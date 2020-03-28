const zlFetch = require('zl-fetch')
const rootendpoint = 'https://api.convertkit.com/v3'
const tagEndpoint = `${rootendpoint}/tags/`

const Configstore = require('configstore')
const config = new Configstore('ck-cli')
const apiSecret = config.get('apiSecret')

const getSubscriber = require('./subscriber')

/**
 * Gets all tags
 * @returns {Array}
 */
async function getTags () {
  const response = await zlFetch(tagEndpoint, {
    queries: { api_secret: apiSecret }
  })

  const tags = response.body.tags
  return tags.map(tag => {
    return { name: tag.name, id: tag.id }
  })
}

/**
 * Gets id and name of a tag
 * @param {string} searchedTag
 */
async function getTag (searchedTag) {
  const tags = await getTags()
  const tag = tags.find(t => t.name === searchedTag)
  if (!tag) throw Error(`Cannot find tag "${searchedTag}"`)
  return tag
}

/**
 * Tags a subscriber
 * @param {String} userTag
 * @param {String} email
 */
async function tagSubscriber (userTag, email) {
  const tag = await getTag(userTag)
  await zlFetch.post(`${tagEndpoint}/${tag.id}/subscribe`, {
    queries: {
      api_secret: apiSecret,
      email
    }
  })

  return getSubscriber(email)
}

/**
 * Removes a tag from a subscriber
 * @param {String} userTag
 * @param {String} email
 */
async function removeTagFromSubscriber (userTag, email) {
  const tag = await getTag(userTag)
  const subscriber = await getSubscriber(email)

  await zlFetch.delete(`${rootendpoint}/subscribers/${subscriber.id}/tags/${tag.id}`, {
    queries: {
      api_secret: apiSecret
    }
  })

  return getSubscriber(email)
}

module.exports = {
  getTags,
  tagSubscriber,
  removeTagFromSubscriber
}
