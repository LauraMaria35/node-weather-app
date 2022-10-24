const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.myptv.com/geocoding/v1/locations/by-text?searchText=' + encodeURIComponent(address) + '&apiKey=RVVfYmJiNjRlZDQ0Njc1NGM4NTg2ZTg2MTJjN2M4YmZhOTE6YzAzODk2NzUtNDNmOS00MjVjLWI4ZTgtZDM2YTk1NDUxOTRl'

    request({ url, json: true }, (error, {body} = {}) => {
        if (error) {
            callback('Unable to conect to location services!', undefined)
        } else if (body.locations.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.locations[0].referencePosition.latitude,
                longitude: body.locations[0].referencePosition.longitude,
                location: body.locations[0].address.city,
                country: body.locations[0].address.countryName
             })
        }
    })
}

module.exports = geocode