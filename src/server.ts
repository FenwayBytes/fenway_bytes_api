import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * as BusinessController from './controllers/business.controller';
import { ppid } from 'process';

const app = express();

app.use(helmet());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
	return res.status(200).send("Hello Sam");
});

app.get('/businesses/:id', BusinessController.LoadBusiness);
app.post('/businesses/:businessId/:userId/:rating', BusinessController.AddRating);
app.post('/businesses/:id/:coffee', BusinessController.ReportCoffee);
app.post('/businesses/:id/:food', BusinessController.ReportFood);
app.post('/businesses/:id/:line', BusinessController.ReportLine);
app.get('/businesses', BusinessController.LoadAllBusinesses);

app.listen(3001, () => {
	console.log("Listening on PORT: ", 3001);
});
