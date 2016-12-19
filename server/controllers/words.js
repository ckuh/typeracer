const words = require('../models/words.js')
const _ = require('underscore')
const test = require('../wordBank.js').wordBank

exports.get = (req, res) => {
  console.log(req.query)
  res.status(200).send(_.shuffle(test))
  // words.get()
  //   .then((data) => {
  //     data = _.filter(_.shuffle(_.pluck(data, 'word')), (word) => {
  //       return _.every(word, (letter) => {
  //         var re = /^['a-zA-Z0-9-]+$/
  //         return re.test(letter)
  //       })
  //     })
  //     res.status(200).send(_.shuffle(test))
  //   })
  //   .catch((err) => {
  //     res.status(404).send(err)
  //   })
}
