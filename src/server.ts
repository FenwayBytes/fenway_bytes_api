import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * as BusinessController from './controllers/business.controller';
import { PORT } from './config';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));

app.get('/', (req: Request, res: Response) => {
	return res.status(200).send("Hello Sam");
});

app.get('/businesses', BusinessController.LoadAllBusinesses);
app.get('/businesses/:id', BusinessController.LoadBusiness);
app.post('/businesses/rating/add', BusinessController.AddRating);
app.post('/businesses/report/coffee', BusinessController.ReportCoffee);
app.post('/businesses/report/food', BusinessController.ReportFood);
app.post('/businesses/report/line', BusinessController.ReportLine);


app.listen(PORT, () => {
	console.log("Listening on PORT: ", PORT);
});
