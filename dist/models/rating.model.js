"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rating = void 0;
class Rating {
    constructor(id, rate) {
        this.id = id;
        this.rate = rate;
        this.getId = () => {
            return this.id;
        };
        this.getRating = () => {
            return this.rate;
        };
        this.updateRating = (newRating) => {
            this.rate = newRating;
        };
    }
}
exports.Rating = Rating;
//# sourceMappingURL=rating.model.js.map