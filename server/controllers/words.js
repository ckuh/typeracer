const words = require('../models/words.js')
const _ = require('underscore')

exports.get = (req, res) => {
  words.get()
    .then((data) => {
      data = _.shuffle(_.pluck(data, 'word'))
      res.status(200).send(data)
    })
    .catch((err) => {
      res.status(404).send(err)
    })
}
