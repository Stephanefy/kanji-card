import fetch from 'node-fetch';




const API_ENDPOINT = 'https://jisho.org/api/v1/search/words?keyword='

exports.handler = async (event, context) => {


  console.log(event)

  let response
  let data;
  try {
    response = await fetch(`${API_ENDPOINT}${event.queryStringParameters.search}`,{method: "GET"})
    // handle response
    data = await response.json();


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
      data
    })
  }
}