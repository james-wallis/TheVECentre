import type { NextApiRequest, NextApiResponse } from 'next'

const panoramas: { [key: string ]: { [key: string]: number } } = {
    christmas: {
        baking: 19,
        craft: 18,
        santa: 30,
        market: 7,
    },
}

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { query: { tour } } = req;

    let redirectURL: string = '';
    let panoramaIndex: number = -1;

    const [name, area] = tour;

    switch (name) {
        case 'main-hall':
            redirectURL = 'https://thevecentre.s3.eu-west-2.amazonaws.com/main-hall/index.htm';
            break;
        case 'christmas':
            redirectURL = 'https://thevecentre.s3.eu-west-2.amazonaws.com/christmas/index.htm';
            if (area) {
                panoramaIndex = panoramas.christmas[area];
            }
            break;
    }

    if (!redirectURL) {
        res.statusCode = 404;
        return res.end('Tour not found');
    }

    const url: string = panoramaIndex !== -1 ? `${redirectURL}?media-index=${panoramaIndex}` : redirectURL;

    res.redirect(url);
}