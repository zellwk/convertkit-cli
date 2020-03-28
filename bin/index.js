#!/usr/bin/env node
const args = process.argv.slice(2)
const command = args[0]

// Stores login secrets for Convertkit
if (command === 'login') {
  const apiSecret = args[1]
  const Configstore = require('configstore')
  const config = new Configstore('ck-cli')
  config.set('apiSecret', apiSecret)
}

if (command === 'subscriber') {
  const email = args[1]

  console.log(`Fetching subscriber info for ${email}...`)
  const getSubscriber = require('../commmands/subscriber.js')
  getSubscriber(email)
    .then(console.log)
    .catch(console.log)
}

if (command === 'tags') {
  const { getTags } = require('../commmands/tags.js')
  getTags()
    .then(console.log)
    .catch(console.log)
}

if (command === 'tag') {
  const tag = args[1]
  const email = args[2]

  console.log(`Adding ${tag} to ${email}`)
  const { tagSubscriber } = require('../commmands/tags.js')
  tagSubscriber(tag, email)
    .then(console.log)
}

if (command === 'removeTag') {
  const tag = args[1]
  const email = args[2]

  console.log(`Removing ${tag} from ${email}`)
  const { removeTagFromSubscriber } = require('../commmands/tags.js')
  removeTagFromSubscriber(tag, email)
    .then(console.log)
    .catch(console.log)
}
