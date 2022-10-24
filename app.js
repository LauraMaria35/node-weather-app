const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(!address){
    console.log('Please choose a location!')
}else{
geocode(address, (error, {latitude, longitude, location, country}) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location +", " + country)
            console.log(forecastData)
        })
    })
}

