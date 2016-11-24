const woodnik = require('../utils/wordnik.js')

exports.get = () => {
  return new Promise((resolve, reject) => {
    woodnik.words.randomWords()
      .then((data) => {
        resolve(data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
