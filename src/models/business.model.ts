import { Rating } from './rating.model';

interface IBusinessDetailed {
    id: string;
    name: string;
    coordinates: number[]; // Two Numbers
    hours: [number[], number[],number[], number[],number[],number[],number[]];
    hasCoffee: boolean;
    hasFood: boolean;
    hasLine: boolean;
    rating: number;
}

class Business {
    constructor(
        private id: string = ' ',
        private name: string = '',
        private coordinates: number[] = [],
        private hours: [number[], number[], number[], number[], number[], number[], number[]] = [[], [],[],[],[],[],[]],
        private hasCoffee: boolean = false,
        private hasFood: boolean = false,
        private hasLine: boolean = false,
        private ratings: Rating[] = [],
    ) {}

    public setRatting = (id: string, newRating: number): void => {
        let exists: boolean = false;
        for (let i = 0; i < this.ratings.length; i++) {
            exists = this.ratings[i].getId() === id;
            if (exists) {
                this.ratings[i].updateRating(newRating);
                break;
            }
        }
        if (!exists) {
            this.ratings.push(new Rating(id, newRating));
        }
    }

    public getRating = () : number => {
        const numberRatings: number = this.ratings.length;
        const hasRatings: boolean = numberRatings > 0;
        if (!hasRatings) {
            return -1;
        }
        let filteredRatings: number[] = this.ratings.map((rate: Rating) => rate.getRating());
        let totalRatings: number = filteredRatings.reduce((prev: number, curr: number) => prev + curr);
        return totalRatings / numberRatings;
    }

    public getBusiness = () : IBusinessDetailed => {
        return {
            id: this.id,
            hours: this.hours,
            hasCoffee: this.hasCoffee,
            hasFood: this.hasFood,
            hasLine: this.hasLine,
            rating: this.getRating()
        } as IBusinessDetailed;
    }

    public setCoffee = (hasCoffee: boolean) : void => {
        this.hasCoffee = hasCoffee;
    }

    public setLine = (setLine: boolean) : void => {
        this.hasLine = setLine;
    }

    public setFood = (hasFood: boolean) : void => {
        this.hasFood = hasFood;
    }
}

export {
    Business,
    IBusinessDetailed
}