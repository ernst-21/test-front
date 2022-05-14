import React, {memo} from "react";
import {ITrip} from "../../interface";
import {Box, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import styles from './Card.module.css'

const TripCard = ({id, picture, title, price, duration, ...data}: ITrip) => {

    return (
        <Grid
            item
            className={styles.card}
            xs={12}
            sm={6}
            md={4}
        >
            <Card
                sx={{width: '100%'}}
                variant='outlined'
                {...data}
            >
                <CardMedia
                    component="img"
                    height="250"
                    image={picture}
                    alt={title}
                />
                <CardContent className={styles.body}>
                    <Typography className={styles.title} gutterBottom variant="h5" component="p">
                        {title}
                    </Typography>
                    <Box className={styles.detail}>
                        <Typography className={styles.duration} variant="h5" component='span' >
                            {"Environ " + duration + " jours"}
                        </Typography>
                        <Typography className={styles.price} variant="h5" component='span'>
                            {"à partir de "}
                            <Typography className={styles.priceValue} variant="h5" component='span'>
                                {price}
                            </Typography>
                            {" €"}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    )
};

export default memo(TripCard);