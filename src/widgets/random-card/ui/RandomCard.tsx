import { useState } from "react";

import { WorkoutCard } from "@entities/index";
import { ChooseCard } from "@features/index";

import { cards } from "@constants/index";

import cardShirt from '../../../shared/assets/images/card-shirt.jpg';

import './RandomCard.scss';

export function RandomCard() {
    const [card, setCard] = useState<number>();

    return (
        <div className="randomCard">
            <ChooseCard
                card={(card !== undefined) ? card : 0}
                setCard={setCard} />
            {(card === undefined) ?
                <WorkoutCard
                    cardImage={cardShirt}
                    cardDescription="" /> :
                <WorkoutCard
                    cardImage={cards[card].image}
                    cardDescription={cards[card].description} />}
        </div>
    )
}