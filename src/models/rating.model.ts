class Rating {
    constructor(
        private id: string,
        private rate: number,
    ) {}

    public getId = () : string => {
        return this.id;
    }

    public getRating = () : number => {
        return this.rate;
    }

    public updateRating = (newRating: number) : void => {
        this.rate = newRating;
    }
}

export {
    Rating
}