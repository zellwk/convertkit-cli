const minimist = require('minimist')

const config = require('./config')
const getSubscriber = require('./commmands/subscriber.js')
const { getTags } = require('./commmands/tags.js')
const { tagSubscriber, removeTagFromSubscriber } = require('./commmands/tags.js')

module.exports = async args => {
  args = minimist(args)
  const [command, ...values] = args._

  // Stores login secrets for Convertkit
  if (command === 'login') {
    const [apiSecret] = values
    config.set('apiSecret', apiSecret)
  }

  // Gets information about a subscriber
  if (command === 'subscriber') {
    const [email] = values
    console.log(`Fetching subscriber info for ${email}...`)
    return getSubscriber(email)
  }

  // Gets all tags
  if (command === 'tags') {
    console.log('Fetching Tags')
    return getTags()
  }

  // Adds tag to subscriber
  if (command === 'tagsub') {
    const [subcommand, tag, email] = values

    if (subcommand === 'add') {
      console.log(`Adding ${tag} to ${email}`)
      return tagSubscriber(tag, email)
    }

    if (subcommand === 'remove') {
      console.log(`Removing ${tag} from ${email}`)
      return removeTagFromSubscriber(tag, email)
    }
  }
}
