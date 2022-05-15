import React, {memo} from "react";
import {Card, CardActions, CardContent, CardMedia, Grid, Skeleton} from "@mui/material";
import styles from '../Card.module.css';
import {ITrip} from "../../../interface";

const SkeletonCard = ({highlight}: ITrip) => {

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
            >
                <CardMedia sx={{width: '100%', height: 250}}>
                    <Skeleton variant={'rectangular'} width='100%' height='100%' />
                </CardMedia>
                <CardContent className={styles.body}>
                    <Skeleton variant={'text'} height={40} />
                    <Skeleton variant={'text'} height={40} width={'60%'} />
                </CardContent>
                <CardActions className={styles.detail}>
                    <Skeleton variant={'text'} width={'40%'} height={30}/>
                    <Skeleton variant={'text'} width={'20%'} height={30}/>
                </CardActions>
            </Card>
        </Grid>
    )
};

export default memo(SkeletonCard);