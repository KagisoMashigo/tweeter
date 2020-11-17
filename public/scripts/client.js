/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
}

const createTweetElement = function(tweet) {
  let $tweet = <article id="tweet">
    <header class="tweet-header"> 
      <img>img</img>
      <h2 class="username">name</h2>
      <span class="handle">handle</span>
    </header>
    <section>
      <p>hello world</p>
    </section>
    <footer class="tweet-footer">
      <p2>date</p2>
      <span>socials</span>
    </footer>
    </article>
    // ...
  return $tweet;
}

$(document).ready(() => {
  renderTweets(data);
 
});