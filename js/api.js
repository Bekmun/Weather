export const getWeatherData = async (city) => {
	// aab78371a3b0e12c865ea8fed6eb340f
	// 6286e5ed39a0d7a59aebfb57b16a70f0 kulatov
	try {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aab78371a3b0e12c865ea8fed6eb340f&lang=ru&units=metric`)

		return await response.json()
	} catch (error) {
		console.error(error)
	}
}