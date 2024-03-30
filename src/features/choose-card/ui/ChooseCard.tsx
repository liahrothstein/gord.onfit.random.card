import { Button } from "antd";

import { chooseCard } from "../model/choose-card-model";

export function ChooseCard() {

    return (
        <Button
            type="primary"
            onClick={() => { chooseCard() }}>
            Выбрать карточку
        </Button>
    )
}