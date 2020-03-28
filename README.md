# Convertkit CLI

This is a unofficial CLI for [Convertkit](https://convertkit.com?lmref=yfs9CA).

- [Convertkit CLI](#convertkit-cli)
  - [Installation](#installation)
  - [Get subscriber](#get-subscriber)
  - [Get Tags](#get-tags)
  - [Add tag to a subscriber](#add-tag-to-a-subscriber)
  - [Remove tag from a subscriber](#remove-tag-from-a-subscriber)

## Installation

Install this this cli with `npm install convertkit-cli -g`

```bash
npm install convertkit-cli -g
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
  <img src="/images/2020/" alt="">
</figure>

## Get Tags

Gets a list of available tags.

```
ck tags
```

<figure role="figure">
  <img src="/images/2020/" alt="">
</figure>

## Add tag to a subscriber

Adds a tag to a subscriber

```bash
ck addtag <tag> <subscriberEmail>
```

<figure role="figure">
  <img src="/images/2020/" alt="">
</figure>

Note: I prepended `\#` because my tags begin with `#`. `#` is a special character that needs to be escaped. If your tags do not begin with `#`, you don't need to write `\#`.

## Remove tag from a subscriber

Removes a tag from a subscriber

```bash
ck removetag <tag> <subscriberEmail>
```

<figure role="figure">
  <img src="/images/2020/" alt="">
</figure>

Note: I prepended `\#` because my tags begin with `#`. `#` is a special character that needs to be escaped. If your tags do not begin with `#`, you don't need to write `\#`.
