import { Request, Response, NextFunction } from 'express';
import { IDocumentSession, PointField } from 'ravendb';
import { store } from '../raven';
import { BAD_REQUEST } from '../constants';
import {
    Business,
    Rating
} from '../models';

const LoadByDistance = async(req: Request, res: Response, next: NextFunction): Promise<any> => {

    const latitude: number = Number(req.params.lat);
    const longitude: number = Number(req.params.long);

    const session = store.openSession();

    try {

        let businesses: any[] = await session.query<Business>({ collection: 'Businesses' })
        .spatial("coordinates",
            criteria => criteria.withinRadius(500, 30, 30))
            .selectFields(['id', 'name', 'coordinates', 'hours', 'ratings', 'imageUrl'])
            .all();

        console.log("Businesses: ",  businesses);

        businesses = businesses.map((business: any) => {
            let ratingsLength = business.ratings.length;
            return {
                ...business,
                rating: business.ratings.length === 0 ? 0 : business.ratings.reduce((v1: Rating, v2: Rating) => v1.rate + v2.rate) / ratingsLength
            }
        })
        return res.status(200).send(businesses);

    } catch (err) {
        console.log(err);
        return res.status(500).send('Server Error');
    } finally {
        session.dispose();
    }
}

export {
    LoadByDistance
}