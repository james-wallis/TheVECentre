import type { NextApiRequest, NextApiResponse } from 'next'

const AWS_PREFIX='https://thevecentre.s3.eu-west-2.amazonaws.com';

const panoramas: { [key: string ]: { [key: string]: number } } = {
    christmas: {
        baking: 19,
        craft: 18,
        santa: 30,
        market: 7,
    },
    main: {
        lift: 30,
    }
}

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { query: { tour } } = req;

    let redirectURL: string = '';
    let panoramaIndex: number = -1;

    const [name, area] = tour;

    switch (name) {
        case 'main':
            redirectURL = `${AWS_PREFIX}/main-hall/index.htm`;
            break;
        case 'christmas':
            redirectURL = `${AWS_PREFIX}/christmas/index.htm`;
            break;
    }

    if (!redirectURL) {
        res.statusCode = 404;
        return res.end('Tour not found');
    }

    if (area) {
        panoramaIndex = panoramas[name][area];
    }

    const url: string = panoramaIndex !== -1 ? `${redirectURL}?media-index=${panoramaIndex}` : redirectURL;

    res.redirect(url);
}