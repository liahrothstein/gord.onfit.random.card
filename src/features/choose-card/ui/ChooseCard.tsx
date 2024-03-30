import { Button } from "antd";

import { chooseCard } from "../model/choose-card-model";

interface ChooseCardProps {
    card: number,
    setCard: (card: number) => void
}

export function ChooseCard({ card, setCard }: ChooseCardProps) {

    return (
        <Button
            type="primary"
            onClick={() => { chooseCard(card, setCard) }}>
            Выбрать карточку
        </Button>
    )
}