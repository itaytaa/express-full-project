let counter = 1;
const albums = [];

class Albums {
    //  Create an Album  //
    static create(req, res) {
        const { title, date } = req.body
        if (!title || !date) {
            res.status(400).send('Incorrect Body')
            return;
        }
        const newAlbum = {
            id: counter,
            title,
            date
        }
        counter++
        albums.push(newAlbum)
        res.sendStatus(201)
    }

    //  Get all Albums //
    static getAll(req, res) {
        res.send(albums)
    }

    //  Get a single Album  // 
    static get(req, res) {
        const albumId = parseInt(req.params.id)
        const requestedAlbum = albums.find(album => album.id === albumId)
        if (!requestedAlbum) {
            res.status(404).send('album is not found')
            return;
        }
        res.send(requestedAlbum)
    }

    // update an Album //
    static update(req, res) {
        const albumId = parseInt(req.params.id)
        const albumIdx = albums.findIndex(album => album.id === albumId)
        if (albumIdx < 0) {
            res.status(404).send('album is not found')
            return;
        }
        const { title, date } = req.body
        if (title) {
            albums[albumIdx].title = title
        }
        if (date) {
            albums[albumIdx].date = date
        }
        if (!date && !title) {
            res.status(400).send('No data to change')
        }
        res.status(200).send('Album edited')
    }

    // delete an Album   //
    static delete(req, res) {
        const albumId = parseInt(req.params.id)
        const albumIdx = albums.findIndex(album => album.id === albumId)
        if (albumIdx < 0) {
            res.status(404).send('album is not found')
            return;
        }
        albums.splice(albumIdx, 1);
        res.sendStatus(204)
    }
}
module.exports = Albums