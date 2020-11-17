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
// $('.tweet-body').empty();
  for (const tweet of tweets) {
   const value = createTweetElement(tweet);
   $('.tweet-body').prepend(value);
  }
}

const createTweetElement = function(tweet) {
  let $tweet = `
  <article id="tweet">
    <header class="tweet-header"> 
      <img src="${tweet.user.avatars}">
      <h2 class="username">${tweet.user.name}</h2>
      <span class="handle">${tweet.user.handle}</span>
    </header>
    <section>
      <p>${tweet.content.text}</p>
    </section>
    <footer class="tweet-footer">
      <p2>${tweet.content.created_at}</p2>
      <span>
      <i class="fab fa-facebook-square"></i>
      </span>
    </footer>
  </article>`

  return $tweet;
}

// Posts tweets using AJAX
const postTweets = () => {
  $(".tweet-form").submit(function(event) {
  console.log("tweet sent off")
  event.preventDefault();
    $.ajax({
      url: "/tweets",
      method: "POST",
      data: $(this).serialize()
    }).catch(err => console.log(err));
    console.log("success")
  });
};

// Loads tweets suing AJAX
// const loadTweets = () => {
//   console.log("Tweet fetched");
//   $.ajax({
//     url: "/tweets",
//     method: "GET"
//   }).then((data) => {
//     renderTweets(data);
//   }).catch(err => console.log(err));
// };

$(document).ready(() => {
  renderTweets(data);
  postTweets()
});