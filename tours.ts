import { ITour } from './interfaces';

const tours: ITour[] = [
    {
        title: 'The Old Millhouse Gallery',
        description: 'Virtual gallery tour featuring art and design by British ArtistJodi.',
        path: 'artistjodi',
        subpaths: {
            gallery: 1,
            studio: 49,
            courtyard: 4,
            jewellery: 13,
        }
    },
    {
        title: 'The VECentre tour',
        description: 'The immersive 3D tour brought to you by TheVECentre.',
        path: 'main',
        subpaths: {
            outside: 1,
            reception: 3,
            lift: 30,
            office: 1,
            'press-office': 14,
            artistjodi: 22
        }
    },
    {
        title: 'The Christmas tour',
        description: 'The VECentre brings you the Christmas tour! Experience a magical winter wonderland at the comfort of your own device.',
        path: 'christmas',
        subpaths: {
            baking: 19,
            craft: 18,
            santa: 22,
            market: 7
        }
    }
];

export default tours;