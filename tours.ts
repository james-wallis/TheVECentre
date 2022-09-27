import { ITour } from './interfaces';

const activeTours = [
    {
        title: 'The VECentre',
        description: 'The immersive 3D exhibition brought to you by TheVECentre.',
        path: 'main',
    },
    {
        title: 'Spring',
        description: 'The VECentre brings you the Spring exhibition!',
        path: 'spring',
    },
    {
        title: 'Summer',
        description: 'The VECentre brings you the Summer exhibition!',
        hidden: true,
        path: 'summer',
    }
]

export const allVecTours = [
    ...activeTours,
    {
        title: 'The Old Millhouse Gallery',
        description: 'The Old Millhouse Gallery',
        path: 'oldmillhousegallery',
    },
    {
        title: 'BALC',
        description: 'The Bored Ape Ladies Club!',
        path: 'balc',
    }
]

const tours: ITour[] = [
    // Some links in the tour are incorrect so display the same tour for main and home
    {
        title: 'The VECentre',
        description: 'The immersive 3D exhibition brought to you by TheVECentre.',
        path: 'home',
    },
    ...activeTours,
];

export default tours;
