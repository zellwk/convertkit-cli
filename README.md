# A Simple CLI for Convertkit

This is a unofficial CLI for [Convertkit](https://convertkit.com?lmref=yfs9CA).

Note: Links to Convertkit in this repository are affiliate links.

- [A Simple CLI for Convertkit](#a-simple-cli-for-convertkit)
  - [The Convertkit CLI](#the-convertkit-cli)
- [Why use this?](#why-use-this)
  - [Installing the CLI](#installing-the-cli)
    - [Logging in](#logging-in)
  - [Getting information about a subscriber](#getting-information-about-a-subscriber)
  - [Listing Tags](#listing-tags)
  - [Tagging a subscriber](#tagging-a-subscriber)
  - [Removing a tag from a subscriber](#removing-a-tag-from-a-subscriber)
  - [Contributions welcome!](#contributions-welcome)

## The Convertkit CLI

The Convertkit CLI lets you do four things:

1. Get information about a subscriber
2. List tags
3. Add a tag to a subscriber
4. Remove a tag from a subscriber

# Why use this?

When I need to check a person's details on Convertkit, I need to log in to Convertkit and search for the person's email address. This process takes time, energy, and clicks.

I'm not in the state to check a website when I'm doing work. I want to find the person's information quickly and get stuff done.

This is why I created a command line interface for [Convertkit](https://convertkit.com?lmref=yfs9CA).

## Installing the CLI

You can install the CLI with `npm`:

```bash
npm install convertkit-cli --g
```

This lets you use the `ck` command.

### Logging in

You need to provide your API Secret for the Convertkit CLI to work. You can find the API Secret [on your accounts settings page].

Your API Secret is kept safe in your computer, so don't worry about it leaking out :)

You use the `login` command to provide the API Secret.

```bash
ck login <API_SECRET>
```

## Getting information about a subscriber

You can use the `subscriber` command to get information about a subscriber.

```bash
ck subscriber <email>
```

This returns the following information:

1. Name
2. Email address
3. State
4. Date created
5. Tags

<figure role="figure">
  <img src="images/ck-cli/subscriber.gif" alt="Gets a subscriber.">
</figure>

## Listing Tags

You can use the `tags` command to list tags.

```bash
ck tags
```

<figure role="figure">
  <img src="images/ck-cli/tags.gif" alt="Gets list of tags.">
</figure>

## Tagging a subscriber

You can use the `tagsub` command to tag a subscriber. The `tagsub` command contains two subcommands.

- `add`: Adds a tag to a subscriber
- `remove`: Removes a tag from a subscriber

To tag a subscriber, you use `tagsub add`.

```bash
ck tagsub add <tag> <email>
```

<figure role="figure">
  <img src="images/ck-cli/tagsub-add.gif" alt="Adds tag to subscriber">
</figure>

## Removing a tag from a subscriber

To remove a tag from a subscriber, you use `tagsub remove`.

```bash
ck tagsub remove <tag> <email>
```

<figure role="figure">
  <img src="images/ck-cli/tagsub-remove.gif" alt="Removes tag from a subscriber">
</figure>

## Contributions welcome!

This CLI is in an early stage draft. It's not perfect yet. But I want to push this out so people (other than myself) can use it.
