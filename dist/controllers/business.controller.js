"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportLine = exports.ReportFood = exports.ReportCoffee = exports.LoadBusiness = exports.AddRating = void 0;
const raven_1 = require("../raven");
const constants_1 = require("../constants");
const ReportLine = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    let line = Boolean(req.params.line);
    const hasId = id !== null && id !== undefined && id.length !== 0;
    if (!hasId)
        throw new Error('404');
    const hasLine = line !== null && line !== undefined;
    if (!hasLine)
        throw new Error('404');
    const session = raven_1.store.openSession();
    try {
        let business = yield session.load(id);
        business.setLine(hasLine);
        yield session.saveChanges();
        let detailed = business.getBusiness();
        return res.status(200).send(detailed);
    }
    catch (err) {
        if (err === '404') {
            return res.status(constants_1.BAD_REQUEST.code).send(constants_1.BAD_REQUEST.message);
        }
    }
    finally {
        session.dispose();
        return res.status(418).send("I'm a Teapot");
    }
});
exports.ReportLine = ReportLine;
const ReportFood = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    let food = Boolean(req.params.food);
    const hasId = id !== null && id !== undefined && id.length !== 0;
    if (!hasId)
        throw new Error('404');
    const hasFood = food !== null && food !== undefined;
    if (!hasFood)
        throw new Error('404');
    const session = raven_1.store.openSession();
    try {
        let business = yield session.load(id);
        business.setFood(hasFood);
        yield session.saveChanges();
        let detailed = business.getBusiness();
        return res.status(200).send(detailed);
    }
    catch (err) {
        if (err === '404') {
            return res.status(constants_1.BAD_REQUEST.code).send(constants_1.BAD_REQUEST.message);
        }
    }
    finally {
        session.dispose();
        return res.status(418).send("I'm a Teapot");
    }
});
exports.ReportFood = ReportFood;
const ReportCoffee = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    let coffee = Boolean(req.params.coffee);
    const hasId = id !== null && id !== undefined && id.length !== 0;
    if (!hasId)
        throw new Error('404');
    const hasCoffee = coffee !== null && coffee !== undefined;
    if (!hasCoffee)
        throw new Error('404');
    const session = raven_1.store.openSession();
    try {
        let business = yield session.load(id);
        business.setCoffee(hasCoffee);
        yield session.saveChanges();
        let detailed = business.getBusiness();
        return res.status(200).send(detailed);
    }
    catch (err) {
        if (err === '404') {
            return res.status(constants_1.BAD_REQUEST.code).send(constants_1.BAD_REQUEST.message);
        }
    }
    finally {
        session.dispose();
        return res.status(418).send("I'm a Teapot");
    }
});
exports.ReportCoffee = ReportCoffee;
const LoadBusiness = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const hasId = id !== null && id !== undefined && id.length !== 0;
    if (!hasId)
        throw new Error('404');
    const session = raven_1.store.openSession();
    try {
        let business = yield session.load(id);
        let detailed = business.getBusiness();
        return res.status(200).send(detailed);
    }
    catch (err) {
        if (err === '404') {
            return res.status(constants_1.BAD_REQUEST.code).send(constants_1.BAD_REQUEST.message);
        }
    }
    finally {
        session.dispose();
        return res.status(418).send("I'm a Teapot");
    }
});
exports.LoadBusiness = LoadBusiness;
const AddRating = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let businessId = req.params.businessId;
    let userId = req.params.userId;
    let rating = parseInt(req.params.rating);
    const hasBusinessId = businessId !== null && businessId !== undefined && businessId.length !== 0;
    if (!hasBusinessId)
        throw new Error('404');
    const hasUserId = userId !== null && userId !== undefined && userId.length !== 0;
    if (!hasUserId)
        throw new Error('404');
    const hasRating = rating !== null && rating !== undefined && (rating <= 5 && rating >= 1);
    if (!hasRating)
        throw new Error('404');
    const session = raven_1.store.openSession();
    try {
        let business = yield session.load(businessId);
        business.setRatting(userId, rating);
        yield session.saveChanges();
        let detailed = business.getBusiness();
        return res.status(200).send(detailed);
    }
    catch (err) {
        if (err === '404') {
            return res.status(constants_1.BAD_REQUEST.code).send(constants_1.BAD_REQUEST.message);
        }
    }
    finally {
        session.dispose();
        return res.status(418).send("I'm a Teapot");
    }
});
exports.AddRating = AddRating;
//# sourceMappingURL=business.controller.js.map