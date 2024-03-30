import { Button } from "antd";

import { chooseCard } from "../model/choose-card-model";

interface ChooseCardProps {
    setCard: (card: number) => void
}

export function ChooseCard({ setCard }: ChooseCardProps) {

    return (
        <Button
            type="primary"
            onClick={() => { chooseCard(setCard) }}>
            Выбрать карточку
        </Button>
    )
}