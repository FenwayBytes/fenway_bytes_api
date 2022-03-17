import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
	return res.status(200).send("Hello Sam");
});

app.listen(3001, () => {
	console.log("Listening on PORT: ", 3001);
});
