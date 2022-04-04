import { Request, Response, NextFunction } from 'express';
import { IDocumentSession } from 'ravendb';
import { store } from '../raven';
import { BAD_REQUEST } from '../constants';
import {
    Business,
    Rating
} from '../models';

const ReportLine = async(req: Request, res: Response, next: NextFunction) : Promise<Response<any, Record<string, any>>> => {
    
    let id: string = req.body.id;
    let line: boolean = Boolean(req.body.line);

    const hasId: boolean = id !== null && id !== undefined && id.length !== 0;
    if (!hasId) throw new Error('404');

    const hasLine: boolean = line !== null && line !== undefined;
    if (!hasLine) throw new Error('404');
    
    const session = store.openSession();

    try {

        let business: Business = await session.load<Business>(id);
        business.hasLine = line;

        await session.saveChanges();

        return res.status(200).send(business);
    } catch (err) {
        if (err === '404') {
            return res.status(BAD_REQUEST.code).send(BAD_REQUEST.message);
        }
        return res.status(500).send('Server Error');
    } finally {
        session.dispose();
        return res.status(418).send("I'm a Teapot");
    }   
}

const ReportFood = async(req: Request, res: Response, next: NextFunction) : Promise<Response<any, Record<string, any>>> => {
    
    let id: string = req.body.id;
    let food: boolean = Boolean(req.body.food);

    const hasId: boolean = id !== null && id !== undefined && id.length !== 0;
    if (!hasId) throw new Error('404');

    const hasFood: boolean = food !== null && food !== undefined;
    if (!hasFood) throw new Error('404');
    
    const session = store.openSession();

    try {

        let business: Business = await session.load<Business>(id);
        business.hasFood = food;

        await session.saveChanges();

        return res.status(200).send(business);
    } catch (err) {
        if (err === '404') {
            return res.status(BAD_REQUEST.code).send(BAD_REQUEST.message);
        }
        return res.status(500).send('Server Error');
    } finally {
        session.dispose();
        return res.status(418).send("I'm a Teapot");
    }   
}

const ReportCoffee = async(req: Request, res: Response, next: NextFunction) : Promise<Response<any, Record<string, any>>> => {
    
    let id: string = req.body.id;
    let coffee: boolean = Boolean(req.body.coffee);

    const hasId: boolean = id !== null && id !== undefined && id.length !== 0;
    if (!hasId) throw new Error('404');

    const hasCoffee: boolean = coffee !== null && coffee !== undefined;
    if (!hasCoffee) throw new Error('404');
    
    const session = store.openSession();

    try {

        let business: Business = await session.load<Business>(id);
        business.hasCoffee = coffee;

        await session.saveChanges();

        return res.status(200).send(business);
    } catch (err) {
        if (err === '404') {
            return res.status(BAD_REQUEST.code).send(BAD_REQUEST.message);
        }
        return res.status(500).send('Server Error');
    } finally {
        session.dispose();
        return res.status(418).send("I'm a Teapot");
    }   
}

const LoadBusiness = async(req: Request, res: Response, next: NextFunction) : Promise<any> => {
    
    let id: string = req.params.id;
    const hasId: boolean = id !== null && id !== undefined && id.length !== 0;
    if (!hasId) throw new Error('404');
    
    const session = store.openSession();

    try {

        let business: Business = await session.load<Business>(id);

        return res.status(200).send(business);
    } catch (err) {
        if (err === '404') {
            return res.status(BAD_REQUEST.code).send(BAD_REQUEST.message);
        } else {
            return res.status(500).send(err);
        }
    } finally {
        session.dispose();
    }   
}

const LoadAllBusinesses = async(req: Request, res: Response, next: NextFunction): Promise<any> => {

    const session = store.openSession();

    try {

        let businesses: any[] = await session.query<Business>({ collection: 'Businesses' })
            .selectFields(['id', 'name', 'coordinates', 'hours', 'ratings'])
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
        // return res.status(418).send("I'm a Teapot");
    }
}

const AddRating = async(req: Request, res: Response, next: NextFunction) : Promise<any> => {
    
    console.log("Body: ", req.body);

    let businessId: string = req.body.businessId;
    let userId: string = req.body.userId;
    let rating: number = parseInt(req.body.rating);

    // const hasBusinessId: boolean = businessId !== null && businessId !== undefined && businessId.length !== 0;
    // if (!hasBusinessId) throw new Error('404');

    // const hasUserId: boolean = userId !== null && userId !== undefined && userId.length !== 0;
    // if (!hasUserId) throw new Error('404');
    
    // const hasRating: boolean = rating !== null && rating !== undefined && (rating <= 5 && rating >= 1);
    // if (!hasRating) throw new Error('404');

    const session = store.openSession();

    try {

        let business: Business = await session.load<Business>(businessId);
        business.ratings.push(new Rating(userId, rating));
        console.log("Business:", business);
        await session.saveChanges();


        return res.status(200).send(business);
    } catch (err) {
        console.log("ERR: ", err);
        if (err === '404') {
            return res.status(BAD_REQUEST.code).send(BAD_REQUEST.message);
        }
        return res.status(500).send('Server Error');
    } finally {
        session.dispose();
    }

    
}

export {
    AddRating,
    LoadBusiness,
    LoadAllBusinesses,
    ReportCoffee,
    ReportFood,
    ReportLine
}