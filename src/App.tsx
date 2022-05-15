import React from 'react';
import './App.css';
import {MainLayout} from "./layout/MainLayout";
import {MainHeader} from "./layout/Header";
import {Highlights} from "./modules/trip/components/Highlights";
import {useQuery} from "react-query";
import {TRIPS_LIST_KEY} from "./modules/trip/constants/trip";
import {getTrips} from "./modules/trip/api/api-trip";
import {Typography} from "@mui/material";
import {OtherTrips} from "./modules/trip/components/OtherTrips";
import {SearchBar} from "./modules/trip/components/SearchBar";

function App() {
    const {data: trips, error} = useQuery(TRIPS_LIST_KEY, getTrips);

    if (error || !trips?.length) {
        return (
            <div className='App'>
                <MainHeader />
                <MainLayout>
                    <SearchBar trips={trips} />
                    <Typography variant='h1'>No trips to display</Typography>
                </MainLayout>
            </div>
        )
    }

  return (
    <div className="App">
        <MainHeader />
        <MainLayout>
            <SearchBar trips={trips} />
            <Highlights data={trips} />
            <OtherTrips data={trips} />
        </MainLayout>
    </div>
  );
}

export default App;
