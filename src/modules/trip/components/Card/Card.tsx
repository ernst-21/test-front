import React, {memo} from "react";
import {ITrip} from "../../interface";
import {Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {CardChip} from "./components";
import styles from './Card.module.css'

const TripCard = ({
                      id,
                      picture,
                      title,
                      price,
                      duration,
                      highlight,
                      tag,
                      ...data}: ITrip) => {

    return (
        <Grid
            item
            className={styles.cardContainer}
            xs={12}
            sm={6}
            md={highlight ? 6 : 4}
        >
            <Card
                sx={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'space-between',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch'
            }}
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
                    <CardChip tag={tag} />
                </CardContent>
                <CardActions className={styles.detail}>
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
                </CardActions>
            </Card>
        </Grid>
    )
};

export default memo(TripCard);