const zlFetch = require('zl-fetch')
const endpoints = require('../endpoints')

const Configstore = require('configstore')
const config = new Configstore('ck-cli')
const apiSecret = config.get('apiSecret')

async function getSubscriber (email) {
  const subscriberResponse = await zlFetch(endpoints.subscribers, {
    queries: {
      api_secret: apiSecret,
      email_address: email
    }
  })
  const subscriber = subscriberResponse.body.subscribers[0]
  if (!subscriber) throw new Error(`Cannot find subscriber "${email}"`)

  const tagsResponse = await zlFetch(`${endpoints.subscribers}/${subscriber.id}/tags`, {
    queries: {
      api_secret: apiSecret
    }
  })
  const tags = tagsResponse.body.tags.map(tag => tag.name)

  const result = { ...subscriber, tags }
  return result
}

module.exports = getSubscriber
