// import { locations } from './config';
// import { store } from '../raven';
// import { Business } from '../models';

// (async() => {
//     console.log("Starting Upload...");
//     const bulkInsert = store.bulkInsert();

//     for (let i = 0; i < locations.length; i++) {
//         let location = locations[i];
//         let business: Business = new Business(' ', location.name, location.coordinates, location.hours, location.hasCoffee, location.hasFood, location.hasLine, []);
//         await bulkInsert.store(business);
//         console.log(`Stored: ${location.name} | ${location.id}`);
//     }

//     await bulkInsert.finish();
//     console.log("Finished...");
// })();