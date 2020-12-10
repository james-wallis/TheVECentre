import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { query: { tour } } = req;
    let redirectURL: string = '';

    switch (tour) {
        case 'main-hall':
            redirectURL = 'https://thevecentre.b-cdn.net/TheVECentreXmasTour/index.htm';
            break;
    }

    if (!redirectURL) {
        res.statusCode = 404;
        return res.end('Tour not found');
    }

    res.redirect(redirectURL);
}