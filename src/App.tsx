import React from 'react';
import './App.css';
import {MainLayout} from "./layout/MainLayout";
import {MainHeader} from "./layout/Header";
import {Highlights} from "./modules/trip/components/Highlights";
import {useQuery} from "react-query";
import {TRIPS_LIST_KEY} from "./modules/trip/constants/trip";
import {getTrips} from "./modules/trip/api/api-trip";
import {Box, Typography} from "@mui/material";
import styles from "./modules/trip/components/List/List.module.css";
import {OtherTrips} from "./modules/trip/components/OtherTrips";

function App() {
    const {data: trips, error} = useQuery(TRIPS_LIST_KEY, getTrips);

    if (error || !trips?.length) {
        return (
            <Box className={styles.itineraryContainer}>
                <Typography variant='h1'>No trips to display</Typography>
            </Box>
        )
    }

  return (
    <div className="App">
        <MainHeader />
        <MainLayout>
            <Highlights data={trips} />
            <OtherTrips data={trips} />
        </MainLayout>
    </div>
  );
}

export default App;
