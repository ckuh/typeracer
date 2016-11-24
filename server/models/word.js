const wordnik = require('../utils/wordnik.js')

exports.post = (searchQuery) => {
  return new Promise((resolve, reject) => {
    wordnik.word.definitions(searchQuery)
      .then((data) => {
        resolve(data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
