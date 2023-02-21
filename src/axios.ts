import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://shazam-core.p.rapidapi.com/v1',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': process.env.REACT_APP_SHAZAM_KEY,
		'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
	},
});

export default instance;
