"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Business = void 0;
const rating_model_1 = require("./rating.model");
class Business {
    constructor(id = ' ', name = '', coordinates = [], hours = [[], [], [], [], [], [], []], hasCoffee = false, hasFood = false, hasLine = false, ratings = []) {
        this.id = id;
        this.name = name;
        this.coordinates = coordinates;
        this.hours = hours;
        this.hasCoffee = hasCoffee;
        this.hasFood = hasFood;
        this.hasLine = hasLine;
        this.ratings = ratings;
        this.setRatting = (id, newRating) => {
            let exists = false;
            for (let i = 0; i < this.ratings.length; i++) {
                exists = this.ratings[i].getId() === id;
                if (exists) {
                    this.ratings[i].updateRating(newRating);
                    break;
                }
            }
            if (!exists) {
                this.ratings.push(new rating_model_1.Rating(id, newRating));
            }
        };
        this.getRating = () => {
            const numberRatings = this.ratings.length;
            const hasRatings = numberRatings > 0;
            if (!hasRatings) {
                return -1;
            }
            let filteredRatings = this.ratings.map((rate) => rate.getRating());
            let totalRatings = filteredRatings.reduce((prev, curr) => prev + curr);
            return totalRatings / numberRatings;
        };
        this.getBusiness = () => {
            return {
                id: this.id,
                hours: this.hours,
                hasCoffee: this.hasCoffee,
                hasFood: this.hasFood,
                hasLine: this.hasLine,
                rating: this.getRating()
            };
        };
        this.setCoffee = (hasCoffee) => {
            this.hasCoffee = hasCoffee;
        };
        this.setLine = (setLine) => {
            this.hasLine = setLine;
        };
        this.setFood = (hasFood) => {
            this.hasFood = hasFood;
        };
    }
}
exports.Business = Business;
//# sourceMappingURL=business.model.js.map