import type { Card } from "../types";

import alternateFlexionOnTheBiceps from '../assets/images/alternate-flexion-on-the-biceps.gif';
import flexingTheArmsOnTheBiceps from '../assets/images/flexing-the-arms-on-the-biceps.gif';
import liftingTheBodyWithHandsForward from '../assets/images/lifting-the-body-with-hands-forward.gif';
import liftingYourArmsFromDumbbellInFrontOfYou from '../assets/images/lifting-your-arms-from-dumbbell-in-front-of-you.gif';
import lyingSideSlopes from '../assets/images/lying-side-slopes.gif';
import pressDumbbellsOverYourselfFromTheFloor from '../assets/images/press-dumbbells-over-yourself-from-the-floor.gif';
import pullOver from '../assets/images/pull-over.gif';
import pushUpsWithANarrowSettingFromTheBench from '../assets/images/push-ups-with-a-narrow-setting-from-the-bench.gif';
import reverseTwists from '../assets/images/reverse-twists.gif';
import squatWithDumbbellPress from '../assets/images/squat-with-dumbbell-press.gif';
import sumoSquatWithDumbbell from '../assets/images/sumo-squat-with-dumbbell.gif';
import swingYourFootToTheSide from '../assets/images/swing-your-foot-to-the-side.gif';

export const cards: Card[] = [
    {
        image: flexingTheArmsOnTheBiceps,
        description: 'Сгибание рук на бицепс 60 повторений'
    },
    {
        image: alternateFlexionOnTheBiceps,
        description: 'Поочередные сгибания на бицепс 60 повторений'
    },
    {
        image: pullOver,
        description: 'Пуловер 60 повторений'
    },
    {
        image: sumoSquatWithDumbbell,
        description: 'Сумо-приседание с гантелей 100 повторений'
    },
    {
        image: squatWithDumbbellPress,
        description: 'Приседание с жимом гантелей 100 повторений'
    },
    {
        image: swingYourFootToTheSide,
        description: 'Мах ногой в сторону 80 повторений'
    },
    {
        image: liftingYourArmsFromDumbbellInFrontOfYou,
        description: 'Подъем рук с гантелей перед собой 50 повторений'
    },
    {
        image: pressDumbbellsOverYourselfFromTheFloor,
        description: 'Жим гантели над собой с пола 50 повторений'
    },
    {
        image: pushUpsWithANarrowSettingFromTheBench,
        description: 'Отжимания с узкой постановкой от скамьи 50 повторений'
    },
    {
        image: lyingSideSlopes,
        description: 'Боковые наклоны лежа 100 повторений'
    },
    {
        image: reverseTwists,
        description: 'Обратные скручивания 100 повторений'
    },
    {
        image: liftingTheBodyWithHandsForward,
        description: 'Подъем корпуса с руками вперед 100 повторений'
    }
];