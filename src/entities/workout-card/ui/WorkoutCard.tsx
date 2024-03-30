import { Card } from 'antd';
import Title from 'antd/es/typography/Title';

interface WorkoutCardProps {
    cardImage: string,
    cardDescription: string
}

export function WorkoutCard({ cardImage, cardDescription }: WorkoutCardProps) {

    return (
        <Card
            cover={<img src={cardImage} />}>
            <Title level={2}>{cardDescription}</Title>
        </Card>
    )
}