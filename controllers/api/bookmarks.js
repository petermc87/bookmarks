const Bookmark = require('../../models/bookmark')

const dataController = {

  index (req, res, next) {
    Bookmark.find({}, (err, foundBookmarks) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.bookmarks = foundBookmarks
        next()
      }
    })
  },
  create (req, res, next) {
    Bookmark.create(req.body, (err, createdBookmark) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.bookmark = createdBookmark
        next()
      }
    })
  },
  show (req, res, next) {
    Bookmark.findById(req.params.id, (err, foundBookmark) => {
      if (err) {
        res.status(400).send({
          msg: err.message,
          output: 'Could not find a bookmark with that ID'
        })
      } else {
        res.locals.data.bookmark = foundBookmark
        next()
      }
    })
  },
  destroy (req, res, next) {
    Bookmark.findByIdAndDelete(req.params.id, (err, deletedBookmark) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.bookmark = deletedBookmark
        next()
      }
    })
  },
  update (req, res, next) {
    Bookmark.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBookmark) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.bookmark = updatedBookmark
        next()
      }
    })
  }
}

const apiController = {
  index (req, res, next) {
    res.json(res.locals.data.bookmarks)
  },
  show (req, res, next) {
    res.json(res.locals.data.bookmark)
  }
}

module.exports = { dataController, apiController }
