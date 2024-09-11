const baseUrl = 'https://api.antikdecor.ru/';
export async function getData(endpoint) {
	try {
		const res = await fetch(`${baseUrl}${endpoint}`);
		const data = await res.json();
		return data;
	} catch (err) {
		console.log(err);
	}
}
