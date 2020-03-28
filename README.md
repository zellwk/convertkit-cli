# Convertkit CLI

This is a unofficial CLI for [Convertkit](https://convertkit.com?lmref=yfs9CA).

- [Convertkit CLI](#convertkit-cli)
  - [Installation](#installation)
  - [Login](#login)
  - [Get subscriber](#get-subscriber)
  - [Get Tags](#get-tags)
  - [Add tag to a subscriber](#add-tag-to-a-subscriber)
  - [Remove tag from a subscriber](#remove-tag-from-a-subscriber)

## Installation

Install this this cli with `npm install convertkit-cli -g`

```bash
npm install convertkit-cli -g
```

## Login

You must provide your API secret for this CLI to work. The API secret is kept safe in your computer, so don't worry :)

You can find your API secret in the [Accounts Settings](https://app.convertkit.com/account/edit) page.

```bash
ck login <API_SECRET>
```

## Get subscriber

Gets information about a subscriber. Information includes:

1. First name
2. Email
3. Custom fields
4. Creation date
5. Tags

```bash
ck subscriber <subscriberEmail>
```

<figure role="figure">
  <img src="images/subscriber.gif" alt="Gets a subscriber.">
</figure>

## Get Tags

Gets a list of available tags.

```
ck tags
```

<figure role="figure">
  <img src="images/tags.gif" alt="Gets list of tags.">
</figure>

## Add tag to a subscriber

Adds a tag to a subscriber

```bash
ck addtag <tag> <subscriberEmail>
```

<figure role="figure">
  <img src="images/addtag.gif" alt="Adds tag to subscriber">
</figure>

## Remove tag from a subscriber

Removes a tag from a subscriber

```bash
ck removetag <tag> <subscriberEmail>
```

<figure role="figure">
  <img src="images/removetag.gif" alt="Removes tag from a subscriber">
</figure>
