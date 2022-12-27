require('dotenv').config()
const db = require('../models/db')
const Bookmark = require('../models/bookmark')

db.on('open', () => {
    const starterBookmarks = [
        {
            title: 'The best improv site',
            url: 'https://musicalimprovnotes.tumblr.com/'
        },
        {
            title: 'Buy stuff',
            url: 'https://www.amazon.com/'
        },
        {
            title: 'Buy more stuff',
            url: 'https://www.ebay.com/'
        },
    ]
    Bookmark.deleteMany({})
        .then(() => {
            Bookmark.create(starterBookmarks)
            .then((createdBookmarks) => {
                console.log('all the created Bookmarks: ', createdBookmarks)
                db.close()
            })
            .catch((error) => {
                console.log(error)
                db.close()
            })
        })
        .catch((error) => {
            console.log(error)
            db.close()
        })
})