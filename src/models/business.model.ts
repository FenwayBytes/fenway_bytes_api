import { Rating } from './rating.model';

class Business {
    constructor(
        public id: string = ' ',
        public name: string = '',
        public coordinates: number[] = [],
        public hours: [number[], number[], number[], number[], number[], number[], number[]] = [[], [],[],[],[],[],[]],
        public hasCoffee: boolean = false,
        public hasFood: boolean = false,
        public hasLine: boolean = false,
        public ratings: Rating[] = [],
    ) {}

    public setRating = (id: string, newRating: number): void => {
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
    Business
}