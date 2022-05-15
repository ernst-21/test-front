import {Box} from "@mui/material";
import Fuse from 'fuse.js';
import {useQueryClient} from 'react-query';
import { debounce } from 'throttle-debounce';
import {TRIPS_LIST_KEY} from "../../constants/trip";
import styles from './SearchBar.module.css';
import {StyledTextField} from "./index";


const SearchBar = (props: any) => {

    const queryClient = useQueryClient();

    const searchData = debounce(200, (pattern: any) => {
        if (!pattern) {
            queryClient.invalidateQueries(TRIPS_LIST_KEY);
            return;
        }

        const fuse = new Fuse(props.trips, {
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
        <Box className={styles.searchBarContainer}>
            <StyledTextField
                id="custom-css-outlined-input"
                variant="outlined"
                sx={{width: '60%'}}
                onChange={e => searchData(e.target.value)}
                label={'Cherchez des idées de voyage'}
            />
        </Box>
    );
};

export default SearchBar;
