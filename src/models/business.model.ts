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
}

export {
    Business
}