import type { NextApiRequest, NextApiResponse } from 'next'

const AWS_PREFIX='https://thevecentre.s3.eu-west-2.amazonaws.com';

const panoramas: { [key: string ]: { [key: string]: number } } = {
    christmas: {
        baking: 19,
        craft: 18,
        santa: 22,
        market: 7,
    },
    main: {
        outside: 1,
        reception: 3,
        lift: 30,

        // Office tour idk why it's main/
        office: 1,
        'press-office': 14,
        artistjodi: 22,
    },
    artistjodi: {
        gallery: 1,
        studio: 62,
    }
}

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { query: { tour } } = req;

    let redirectURL: string = '';
    let panoramaIndex: number = -1;

    const name: string = tour && tour[0] ? tour[0].toLowerCase() : '';
    const area: string = tour && tour[1] ? tour[1].toLowerCase() : '';

    switch (name) {
        case 'main':
            if (area === 'office' || area === 'press-office' || area === 'artistjodi') {
                redirectURL = `${AWS_PREFIX}/office/index.htm`;
            } else {
                redirectURL = `${AWS_PREFIX}/main/index.htm`;
            }
            break;
        case 'christmas':
            redirectURL = `${AWS_PREFIX}/christmas/index.htm`;
            break;
        case 'artistjodi':
            redirectURL = `${AWS_PREFIX}/gallery/index.htm`
            break;
    }

    if (!redirectURL) {
        res.statusCode = 404;
        return res.end('Tour not found');
    }

    if (area) {
        panoramaIndex = panoramas[name.toLowerCase()][area.toLowerCase()];
    }

    const url: string = panoramaIndex && panoramaIndex !== -1 ? `${redirectURL}?media-index=${panoramaIndex}` : redirectURL;

    res.redirect(url);
}