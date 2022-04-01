import { ITour } from './interfaces';

const tours: ITour[] = [
    {
        title: 'The VECentre',
        description: 'The immersive 3D exhibition brought to you by TheVECentre.',
        path: 'main',
    },
    // Some links in the tour are incorrect so display the same tour for main and home
    {
        title: 'The VECentre',
        description: 'The immersive 3D exhibition brought to you by TheVECentre.',
        path: 'home',
    },
    {
        title: 'Spring',
        description: 'The VECentre brings you the Spring exhibition!',
        path: 'spring',
    }
];

export default tours;
