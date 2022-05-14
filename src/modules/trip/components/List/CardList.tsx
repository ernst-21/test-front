import React from 'react';
import {useQuery} from "react-query";
import {TRIPS_LIST_KEY} from "../../constants/trip";
import {getTrips} from "../../api/api-trip";
import {Card} from "../Card";
import {ITrip} from "../../interface";
import {Box, Grid, Typography} from "@mui/material";
import styles from './List.module.css';

const CardList = () => {
    const {data: trips, error} = useQuery(TRIPS_LIST_KEY, getTrips);

    if (error || !trips?.length) {
        return (
            <Box className={styles.itineraryContainer}>
                <Typography variant='h1'>No trips to display</Typography>
            </Box>
        )
    }

    return (
        <Grid container spacing={4}>
            {trips?.map((t: ITrip) => (
                    <Card
                        key={t?.id}
                        title={t?.title}
                        duration={t?.duration}
                        picture={t?.picture}
                        id={t?.id}
                    />
                ))}
        </Grid>
    );
};

export default CardList;
