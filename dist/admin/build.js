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
const config_1 = require("./config");
const raven_1 = require("../raven");
const models_1 = require("../models");
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Starting Upload...");
    const bulkInsert = raven_1.store.bulkInsert();
    for (let i = 0; i < config_1.locations.length; i++) {
        let location = config_1.locations[i];
        let business = new models_1.Business(' ', location.name, location.coordinates, location.hours, location.hasCoffee, location.hasFood, location.hasLine, []);
        yield bulkInsert.store(business);
        console.log(`Stored: ${location.name} | ${location.id}`);
    }
    yield bulkInsert.finish();
    console.log("Finished...");
}))();
//# sourceMappingURL=build.js.map