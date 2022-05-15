import React from 'react';
import {Box} from "@mui/material";
import styles from './FilterArea.module.css'
import {SearchBar} from "../SearchBar";
import {RadioFilter} from "../RadioFilter";
import {Trips} from "../List/CardList";
import {SearchTextFilterProvider} from "../../context/SearchContext";

const FilterArea = ({data, searchData, setTrips}: Trips) => {
    return (
        <SearchTextFilterProvider>
            <Box sx={{
                flexDirection: {xs: 'column', md: 'row'},
                alignItems: {xs: 'space-between', md: 'center'},
                justifyContent: {xs: 'center', md: 'space-between'},
            }}
                 className={styles.filterContainer}
            >
                <SearchBar trips={searchData} setTrips={setTrips} />
                <RadioFilter data={data} setTrips={setTrips} />
            </Box>
        </SearchTextFilterProvider>
    );
};

export default FilterArea;
