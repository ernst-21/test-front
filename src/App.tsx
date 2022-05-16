import React, {useState} from 'react';
import './App.css';
import {MainLayout} from "./layout/MainLayout";
import {MainHeader} from "./layout/Header";
import {Highlights} from "./modules/trip/components/Highlights";
import {useQuery} from "react-query";
import {TRIPS_LIST_KEY} from "./modules/trip/constants/trip";
import {getTrips} from "./modules/trip/api/api-trip";
import {Typography} from "@mui/material";
import {OtherTrips} from "./modules/trip/components/OtherTrips";
import {FilterArea} from "./modules/trip/components/FilterArea";
import {LoadingSkeleton} from "./modules/trip/components/LoadingSkeleton";

function App() {
    const [trips, setTrips] = useState([]);
    const {data, isLoading, error} = useQuery(TRIPS_LIST_KEY, getTrips, {
        onSuccess: newData => setTrips(newData),
        refetchOnWindowFocus: false
    });

    if (isLoading) {
        return (
            <LoadingSkeleton />
        )
    }

    if (error || !data?.length || !trips.length) {
        return (
            <div className='App'>
                <MainHeader />
                <MainLayout>
                    <FilterArea data={data} searchData={trips} setTrips={setTrips} />
                    <Typography variant='h1'>No trips to display</Typography>
                </MainLayout>
            </div>
        )
    }

  return (
    <div className="App">
        <MainHeader />
        <MainLayout>
            <FilterArea data={data} searchData={trips} setTrips={setTrips} />
            <Highlights isLoading={isLoading} data={trips} />
            <OtherTrips isLoading={isLoading} data={trips} />
        </MainLayout>
    </div>
  );
}

export default App;
