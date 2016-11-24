const model = require('../models/word.js')

exports.post = (req, res) => {
  model.post(req.body.searchQuery)
    .then((data) => {
      res.status(200).send(data)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
}
