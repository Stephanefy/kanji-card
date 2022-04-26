const fetch = require('node-fetch')

const API_ENDPOINT = 'https://jisho.org/api/v1/search/words?keyword=%E5%87%9D%E3%82%8A'

exports.handler = async (event, context) => {
  let response
  try {
    response = await fetch(API_ENDPOINT)
    // handle response
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response
    })
  }
}