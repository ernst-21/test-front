import React from 'react';
import {Chip, Typography} from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import MergeTypeIcon from '@mui/icons-material/MergeType';
import styles from "./CardChip.module.css";

type ChipProps = {
    tag?: string | 'combined' | 'group' | undefined
}

const renderChipIcon = (tag: ChipProps) => {
    return tag === 'group' ?
        (<GroupsIcon className={styles.cardChipIcon}/>)
        :
        (<MergeTypeIcon className={styles.cardChipIcon}/>)
};

const CardChip = ({tag}: ChipProps) => {

    if (!tag) {
        return null;
    }

    return (
        <Chip
            icon={renderChipIcon(tag as ChipProps)}
            className={styles.cardChip}
            variant={'filled'}
            label={<Typography variant={'h6'} component='span'>
                {tag}
            </Typography>}
        />
    );
};

export default CardChip;
