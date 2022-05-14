import React from 'react';
import {useQuery} from "react-query";
import {TRIPS_LIST_KEY} from "../../constants/trip";
import {getTrips} from "../../api/api-trip";
import {Card} from "../Card";
import {ITrip} from "../../interface";

const CardList = () => {
    const {data: trips, error} = useQuery(TRIPS_LIST_KEY, getTrips);

    if (error || !trips?.length) {
        return (
            <div className={'itinerary-container'}>
                <h1>No trips to display</h1>
            </div>
        )
    }

    return (
        <div className='itinerary-container'>
            {trips?.map((t: ITrip) => (
                <Card
                    key={t?.id}
                    title={t?.title}
                    duration={t?.duration}
                    picture={t?.picture}
                    id={t?.id}
                />))}
        </div>
    );
};

export default CardList;
