import { get } from 'https';

export const handler = async (event) => {
	const feedUrl = 'https://aswinrajeev.medium.com/feed';
	try {
		// Fetch the RSS feed
		const response = await new Promise((resolve, reject) => {
			get(feedUrl, (res) => {
				let data = '';
				res.on('data', (chunk) => {
					data += chunk;
				});
				res.on('end', () => {
					resolve({ status: res.statusCode, data });
				});
			}).on('error', (error) => {
				reject(error);
			});
		});

		if (response.status === 200) {
			const rssContent = response.data;
			return {
				statusCode: 200,
				body: rssContent,
			};
		} else {
			console.error(response);
			return {
				statusCode: response.status,
				body: 'Failed to fetch RSS feed',
			};
		}
	} catch (error) {
		return {
			statusCode: 500,
			body: `Error: ${error.message}`,
		};
	}
};
