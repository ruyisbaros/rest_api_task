const data = require('./mySource.json')

exports.createLocalResponse = (res, statusCode) => {
    //console.log(data.artists);
    let myArtistList = []
    const numList = []

    do {
        let number = Math.floor(Math.random() * data.artists.length)
        /* NOTE: If we don't create this control, our list may have same artist twice or more times each response which the visitors wouldn't want.
        Since it is a random number generator. Previous numbers could be created again */
        if (!numList.includes(number)) {
            numList.push(number)
        }
    } while (numList.length < 4); //My list has 4 artists each response

    myArtistList = numList.map(num => (
        data.artists[num]
    ))

    res.status(statusCode).json({ localResponse: myArtistList })
}