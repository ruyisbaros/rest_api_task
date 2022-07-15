const csvJson = require('csvjson')
const fs = require('fs')

exports.createCsvLogs = (arr) => {
    //console.log(arr);
    const c_data = arr.map(item => ({
        name: item.name, mbid: item.mbid, url: item.url, image_small: item.image[0]["#text"], image: [{ ...item.image }]
    }))

    const csv_data = csvJson.toCSV(c_data, {
        headers: 'key'
    })
    fs.writeFileSync('./user-supplied.csv', csv_data)
}