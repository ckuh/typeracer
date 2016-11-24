const request = require('request')
const _ = require('underscore')
const wordnik = {
  words: { path: 'words.json' },
  word: { path: 'word.json' }
}

wordnik.url = 'http://api.wordnik.com:80/v4'

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
      url: `${wordnik.url}/${this.path}/randomWords`,
      qs: qs
    }, (err, response, body) => {
      err ? reject(err) : resolve(JSON.parse(body))
    })
  })
}

wordnik.word.definitions = function (searchQuery) {
  var requestData = []
  const qs = {
    includeRelated: false,
    sourceDictionaries: 'all',
    useCanonical: false,
    includeTags: false,
    limit: 1,
    api_key: process.env.WORDNIK_API_KEY
  }

  return new Promise((resolve, reject) => {
    _.each(searchQuery, word => {
      request.get({
        url: `${wordnik.url}/${this.path}/${word}/definitions`,
        qs: qs
      }, (err, response, body) => {
        if (err) { return reject(err) }
        requestData.push(JSON.parse(body))
        if (requestData.length === searchQuery.length) { resolve(requestData) }
      })
    })
  })
}

module.exports = wordnik
