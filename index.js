import app from './utils/setupApp';
import fetch from 'node-fetch';

const API_URL = process.env.API_URL || 'api.openweathermap.org/data/';
const API_VERSION = process.env.API_VERSION || '2.5';
const API_KEY = process.env.API_KEY || '9b585103c5c4a27ec8b51073e721e0b1';


app.get('/weather', async ({ query: {
	ids,
} }, res) => {
	const results = await fetch(`http://${API_URL}${API_VERSION}/group?id=${ids}&appid=${API_KEY}&lang=pt`);
	const response = await results.json();
	res.json(response);
});

app.get('/find', async ({ query: {
	search,
	sort="population",
	type="like"
} }, res) => {
	const results = await fetch(`http://${API_URL}${API_VERSION}/find?q=${search}&appid=${API_KEY}&lang=pt&sort=${sort}&type=${type}&units=metric`);
	const response = await results.json();
	res.json(response);
})


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => { console.log(`app is listening to port ${PORT}`); })