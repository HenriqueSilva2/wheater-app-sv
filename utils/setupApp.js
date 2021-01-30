import express from 'express';
import bodyParser from 'body-parser';
import winston from 'winston';
import expressWinston from 'express-winston';
import cors from 'cors';

const app = express();

app.use(cors());
// setup logs
app.use(expressWinston.logger({
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({
			filename: 'log/access.log'
		})
	],
	format: winston.format.combine(
		winston.format.colorize(),
		winston.format.json(),
	),
	msg: "HTTP {{req.method}} {{req.url}}",
	expressFormat: true,
	colorize: false,
}));

// setup app


app.use(bodyParser.json());

export default app;