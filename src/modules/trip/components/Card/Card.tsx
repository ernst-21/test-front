import React, {memo} from "react";
import {ITrip} from "../../interface";

const Card = ({id, picture, title, price, duration}: ITrip) => {

    return (
        <div className="card" data-testid={`itinerary-card-${id}`}>
            <div className="header">
                <div className="cover" style={{backgroundImage: `url(${picture})`}}/>
            </div>
            <div className="body">
                <p className="title">{title}</p>
                <div className="detail">
            <span className="duration">
                {"Environ " + duration + " jours"}
            </span>
                    <span className="price">
                {"à partir de "}
                        <span className="priceValue">{price}</span>
                        {" €"}
            </span>
                </div>
            </div>
        </div>
    )
};

export default memo(Card);