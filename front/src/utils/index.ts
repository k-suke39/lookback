import axios, { AxiosResponse, AxiosError } from 'axios';

export const fetcher = (url: string) =>
	axios
		.get(url)
		.then((res: AxiosResponse) => {
			return res.data;
		})
		.catch((err: AxiosError) => {
			console.log(err.message);
			throw err;
		});
