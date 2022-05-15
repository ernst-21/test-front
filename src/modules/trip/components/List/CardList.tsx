import React, {Dispatch, SetStateAction} from 'react';
import {Card} from "../Card";
import {ITrip} from "../../interface";
import {Grid} from "@mui/material";

export type Trips = {
    data?: ITrip[];
    searchData?: ITrip[];
    highlight?: boolean;
    isLoading?: any;
    setTrips?: Dispatch<SetStateAction<never[]>>;
}

const CardList = ({highlight=false, isLoading, data}: Trips) => {

    return (
        <Grid container spacing={highlight ? 6 : 4} >
            {data?.map((t: ITrip) => (
                    <Card isLoading={isLoading} key={t?.id} {...t}  />
                ))}
        </Grid>
    );
};

export default CardList;
