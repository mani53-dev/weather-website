const request = require('request')

const forecast = (location, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + encodeURIComponent(location) + '&appid=557e0d078f1da9cd660e7aba943da53d&units=metric'

    request({ url, json: true }, (error, { body } = {}) => {

        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.cod === "404") {
            callback('Unable to find location ' + location, undefined)
        } else {
            callback(undefined, ' It is currently ' + body.main.temp + ' degress out. But feels like ' + body.main.feels_like + '. There are ' + body.clouds.all + '% clouds out there.')
        }
    })
}

module.exports = forecast