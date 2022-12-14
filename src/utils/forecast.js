const request = require('request')

const forecast = (latitude, longitude, callback) =>  {
    const url = 'http://api.weatherstack.com/current?access_key=88bb24f3681e38cfbff75ef52582ac75&query=' + latitude + ',' + longitude + '&units=m'
    
    request({ url, json: true }, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location! Try another search.', undefined)
        } else {
            console.log(body.current)
            callback(undefined,
            `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. The humidity is ${body.current.humidity}%. `)
        }
    })
}

module.exports = forecast