const request = require('request')
const wordnik = {
  words: {}
}

wordnik.url = 'http://api.wordnik.com:80/v4/words.json'

wordnik.words.randomWords = function () {
  const qs = {
    hasDictionaryDef: true,
    minDictionaryCount: 1,
    maxDictionaryCount: -1,
    minLength: 3,
    maxLength: -1,
    limit: 200,
    api_key: process.env.WORDNIK_API_KEY
  }
  return new Promise((resolve, reject) => {
    request.get({
      url: `${wordnik.url}/randomWords`,
      qs: qs
    }, (err, response, body) => {
      err ? reject(err) : resolve(JSON.parse(body))
    })
  })
}

module.exports = wordnik
