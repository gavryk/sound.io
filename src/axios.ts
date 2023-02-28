import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://shazam-core.p.rapidapi.com/',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_SHAZAM_KEY,
	},
});

export default instance;
