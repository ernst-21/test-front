import React, {useContext} from 'react';
import {Box} from "@mui/material";
import styles from './SearchBar.module.css';
import {StyledTextField} from "./index";
import {SearchTextFilterContext} from "../../context/SearchContext";
import {useQueryClient} from "react-query";
import {debounce} from "throttle-debounce";
import {TRIPS_LIST_KEY} from "../../constants/trip";
import Fuse from "fuse.js";

const SearchBar = (props: any) => {
    //@ts-ignore
    const {setSearchText} = useContext(SearchTextFilterContext);

    const queryClient = useQueryClient();

    const searchData = debounce(200, (pattern: any) => {
        if (!pattern) {
            queryClient.invalidateQueries(TRIPS_LIST_KEY);
            setSearchText('');
            return;
        }

        const fuse = new Fuse(props?.trips, {
            keys: ['title'],
        });

        const result = fuse.search(pattern);
        const matches:any = [];
        if (!result.length) {
            queryClient.setQueryData([TRIPS_LIST_KEY], matches);
        } else {

            result.forEach(({item}) => {
                matches.push(item);
            });
            queryClient.setQueryData([TRIPS_LIST_KEY], matches);
        }
    });

    return (
        <Box sx={{
            width: {xs: '100%', md: '65%'},
            marginBottom: {xs: '1rem', md: 0}
        }} className={styles.searchBarContainer}>
            <StyledTextField
                id="custom-css-outlined-input"
                variant="outlined"
                sx={{width: '100%'}}
                onChange={e => searchData(e.target.value)}
                label={'Cherchez des idées de voyage'}
            />
        </Box>
    );
};

export default SearchBar;