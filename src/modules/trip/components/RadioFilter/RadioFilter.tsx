import React, {useEffect, useCallback, useContext} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {MODALITIES} from "../../constants/trip";
import styles from './RadioFilter.module.css';
import {Trips} from "../List/CardList";
import {ITrip} from "../../interface";
import {SearchTextFilterContext} from "../../context/SearchContext";

const RadioFilter = ({data, setTrips}: Trips) => {
    //@ts-ignore
    const {searchText} = useContext(SearchTextFilterContext);
    const [value, setValue] = React.useState('all');


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //@ts-ignore
        setValue((event.target as HTMLInputElement).value);
    };

    const setTripResults = useCallback(() => {
        let match: ITrip[] = [];

        if (value === 'none') {
            //@ts-ignore
           match = data?.filter((trip: ITrip) => trip?.tag !== 'group' && trip?.tag !== 'combined')
        }

        if (value === 'all' && !searchText?.length) {
        //@ts-ignore
            match = data;
        }
        if (value === 'all' && searchText?.length) {
            //@ts-ignore
            match = data?.find((trip: ITrip) => trip?.title?.toLocaleLowerCase().includes(searchText));
        }
        if (value === 'group' || value === 'combined') {
            //@ts-ignore
            match = data?.filter((trip: ITrip) => trip?.tag === value)
        }

        //@ts-ignore
        setTrips(match);
    }, [value, data])

    useEffect(() => {
        setTripResults();
    }, [value, data, setTripResults]);

    return (
        <FormControl sx={{width: {xs: '50%', md: '30%'}}}>
            <FormLabel sx={{
                fontSize: 16,
                '&:Mui-focused': {
                    color: 'red'
                }
            }} id="demo-controlled-radio-buttons-group">
                Filtrer par tag
            </FormLabel>
            <RadioGroup
                className={styles.radioFilter}
                row
                sx={{fontSize: 16}}
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
            >
                {MODALITIES.map(item => (
                    <FormControlLabel
                        className={styles.MuiTypographyRoot}
                        key={item.value}
                        value={item.value}
                        control={<Radio />}
                        label={item.label}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
};

export default RadioFilter;