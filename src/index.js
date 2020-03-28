const minimist = require('minimist')

const getSubscriber = require('./commmands/subscriber.js')
const { getTags } = require('./commmands/tags.js')
const { tagSubscriber, removeTagFromSubscriber } = require('./commmands/tags.js')

module.exports = async args => {
  args = minimist(args)
  const [command, ...values] = args._

  // Stores login secrets for Convertkit
  if (command === 'login') {
    const [apiSecret] = values
    const Configstore = require('configstore')
    const config = new Configstore('ck-cli')
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
  if (command === 'addtag') {
    const [tag, email] = values
    console.log(`Adding ${tag} to ${email}`)
    return tagSubscriber(tag, email)
  }

  // Removes tag from subscriber
  if (command === 'removetag') {
    const [tag, email] = values
    console.log(`Removing ${tag} from ${email}`)
    return removeTagFromSubscriber(tag, email)
  }
}
