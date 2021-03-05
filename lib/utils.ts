import ITourUrls from '../interfaces/ITourUrls';

const AWS_PREFIX='https://thevecentre.s3.eu-west-2.amazonaws.com';

export function getTourURLs(tour: string[], mediaIndex: number): ITourUrls {
    let urlPrefix: string = '';

    const name: string = tour && tour[0] ? tour[0].toLowerCase() : '';
    const area: string = tour && tour[1] ? tour[1].toLowerCase() : '';

    switch (name) {
        case 'main':
            if (area === 'office' || area === 'press-office' || area === 'artistjodi') {
                urlPrefix = `${AWS_PREFIX}/office`;
            } else {
                urlPrefix = `${AWS_PREFIX}/main`;
            }
            break;
        case 'christmas':
            urlPrefix = `${AWS_PREFIX}/christmas`;
            break;
        case 'artistjodi':
            urlPrefix = `${AWS_PREFIX}/theoldmillhousegallery`;
            break;
    }

    if (!urlPrefix) {
        throw new Error(`Unknown tour: ${tour}`);
    }

    const indexHtml: string = mediaIndex > 0 ? `${urlPrefix}/index.htm?media-index=${mediaIndex}` : `${urlPrefix}/index.htm`;
    const socialThumbnail: string = `${urlPrefix}/socialThumbnail.jpg`;
    const favicon: string = `${urlPrefix}/favicon.ico`;
    const manifest: string = `${urlPrefix}/manifest.json`;
    const browserConfig: string = `${urlPrefix}/browserconfig.xml`;
    const miscDir: string = `${urlPrefix}/misc`;
    return {
        baseUrl: urlPrefix,
        indexHtml,
        socialThumbnail,
        favicon,
        manifest,
        browserConfig,
        miscDir,
    };
}