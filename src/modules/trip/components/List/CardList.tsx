import React from 'react';
import {Card} from "../Card";
import {ITrip} from "../../interface";
import {Grid} from "@mui/material";

export type Trips = {
    data: ITrip[];
    highlight?: boolean;
}

const CardList = ({highlight=false, data}: Trips) => {

    return (
        <Grid container spacing={highlight ? 6 : 4} >
            {data?.map((t: ITrip) => (
                    <Card key={t?.id} {...t}  />
                ))}
        </Grid>
    );
};

export default CardList;
