const zlFetch = require('zl-fetch')
const endpoints = require('../endpoints')

const getSubscriber = require('./subscriber')
const config = require('../config')
const apiSecret = config.get('apiSecret')

/**
 * Gets all tags
 * @returns {Array}
 */
async function getTags () {
  const response = await zlFetch(endpoints.tags, {
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
  await zlFetch.post(`${endpoints.tags}/${tag.id}/subscribe`, {
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

  await zlFetch.delete(`${endpoints.subscribers}/${subscriber.id}/tags/${tag.id}`, {
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
