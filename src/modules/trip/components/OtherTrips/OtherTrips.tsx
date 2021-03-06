import React from 'react';
import {ITrip} from "../../interface";
import {CardList} from "../List";
import {Trips} from "../List/CardList";

const OtherTrips = ({data, isLoading}: Trips) => {

    const otherTrips = data?.filter((t: ITrip) => !t?.highlight)

    return (
        <CardList data={otherTrips} isLoading={isLoading} />
    );
};

export default OtherTrips;
