import { ITour } from './interfaces';

const activeTours: ITour[] = [
    {
        title: 'The VECentre',
        description: 'The immersive 3D exhibition brought to you by TheVECentre.',
        path: 'main',
    },
    {
        title: 'Summer',
        year: '2022',
        description: 'The VECentre brings you the Summer exhibition!',
        path: 'summer',
    }
]

const activeToursNotOnNavigation: ITour[] = [
    {
        title: 'Spring',
        year: '2022',
        description: 'The VECentre brings you the Spring exhibition!',
        path: 'spring',
    },
]

export const allVecTours: ITour[] = [
    ...activeTours,
    ...activeToursNotOnNavigation,
    {
        title: 'The Old Millhouse Gallery',
        description: 'The Old Millhouse Gallery',
        path: 'oldmillhousegallery',
    },
    {
        title: 'BALC',
        description: 'The Bored Ape Ladies Club!',
        path: 'balc',
    },
]

export const tours: ITour[] = [
    // Some links in the tour are incorrect so display the same tour for main and home
    {
        title: 'The VECentre',
        description: 'The immersive 3D exhibition brought to you by TheVECentre.',
        path: 'home',
    },
    ...activeTours,
    ...activeToursNotOnNavigation,
];
