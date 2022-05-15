import React from 'react';
import {Box} from "@mui/material";
import styles from './SearchBar.module.css';
import {StyledTextField} from "./index";
import {useSearchTrips} from "../../hooks/useSearchTrips";


const SearchBar = (props: any) => {
    const {searchData} = useSearchTrips(props);

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
