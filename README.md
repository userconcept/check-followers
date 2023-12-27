# check-followers

Shows users you are following, but who are not following you and reverse (JavaScript, React, Redux, REST API).

## About project

This experimental project parse data on frontend (client side) by several synchronous steps:

* 1 step - get user profile info.
* 2 step - get all followers by synchronous chain of requests.
* 3 step - get all following by synchronous chain of requests.
* 4 step - compare results: two arrays of objects (followers and following).

This app show you difference between followers and following. It shows users you are following, but who are not following you. And users who are following you, but you are not following them.

Project in development status, it work only for GitHub.
You can't compare followers, if account have summary more than 5900 followers and following, because GitHub REST API have rate limits for 60 unauthenticated requests per hour. If you will try to do more requests to server, application will show you a message.

## Basic commands

Install dependencies:

`npm i`

Start development:

`npm run dev`

Build project:

`npm run build`

## Project page

[https://userconcept.github.io/check-followers](https://userconcept.github.io/check-followers)

## My website

[https://userconcept.ru](https://userconcept.ru)
