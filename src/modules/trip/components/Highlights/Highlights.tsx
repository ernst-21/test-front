import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import styles from './Highlights.module.css';
import {ITrip} from "../../interface";
import {Trips} from "../List/CardList";
import {CardList} from "../List";

const Highlights = ({data, isLoading}: Trips) => {

    const highlighted = data?.filter((t:ITrip) => t.highlight);

    if (!highlighted?.length) {
        return null;
    }

    return (
        <Stack sx={{padding: {xs: 0}}} className={styles.highlightsContainer}>
            <Box sx={{width: '100%'}}>
                <Typography
                    sx={{
                        padding: '2rem 3rem',
                        textAlign: {xs: 'center', md: 'left'},
                    }}
                    className={styles.title}
                    variant='h3'
                    component='h2'
                >
                    Highlights
                </Typography>
            </Box>

            <Box  className={styles.highlightsGrid}>
                <CardList isLoading={isLoading} data={highlighted} highlight />
            </Box>
        </Stack>
    );
};


export default Highlights;
