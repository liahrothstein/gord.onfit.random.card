import { Card } from 'antd';
import Title from 'antd/es/typography/Title';

import './WorkoutCard.scss';

interface WorkoutCardProps {
    cardImage: string,
    cardDescription: string
}

export function WorkoutCard({ cardImage, cardDescription }: WorkoutCardProps) {

    return (
        <Card
            cover={<img className='cardImage' src={cardImage} />}>
            <Title level={3}>{cardDescription}</Title>
        </Card>
    )
}