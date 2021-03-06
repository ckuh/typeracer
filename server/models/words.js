const wordnik = require('../utils/wordnik.js')

exports.get = () => {
  return new Promise((resolve, reject) => {
    wordnik.words.randomWords()
      .then((data) => {
        resolve(data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
