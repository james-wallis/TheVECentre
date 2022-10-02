import { ITour } from './interfaces';

const activeTours: ITour[] = [
    {
        title: 'The VECentre',
        description: 'The immersive 3D exhibition brought to you by TheVECentre.',
        path: 'main',
    },
    {
        title: 'Summer',
        year: "2022",
        description: 'The VECentre brings you the Summer exhibition!',
        path: 'summer',
    }
]

export const allVecTours: ITour[] = [
    ...activeTours,
    {
        title: 'Spring',
        year: "2022",
        description: 'The VECentre brings you the Spring exhibition!',
        path: 'spring',
    },
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
