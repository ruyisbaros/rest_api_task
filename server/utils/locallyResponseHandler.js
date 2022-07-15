const data = require('./mySource.json')

exports.createLocalResponse = (res, statusCode) => {
    //console.log(data.artists);
    const myArtistList = []
    let counter = 0;
    do {
        let listItem = data.artists[Math.floor(Math.random() * data.artists.length)] //Not including length of array (between 0-data.artists.length-1)
        myArtistList.push(listItem)
        counter++;
    } while (counter < 4);
    res.status(statusCode).json({ localResponse: myArtistList })
}