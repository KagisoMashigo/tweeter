const renderTweets = function(tweets) {
$('.tweet-body').empty();
  for (const tweet of tweets) {
   const value = createTweetElement(tweet);
   $('.tweet-body').prepend(value);
  }
}

const createTweetElement = function(tweet) {
  let $tweet = `
  <article id="tweet">
    <header class="tweet-header"> 
      <img src="${escape(tweet.user.avatars)}">
      <h2 class="username">${escape(tweet.user.name)}</h2>
      <span class="handle">${escape(tweet.user.handle)}</span>
    </header>
    <section>
      <p>${escape(tweet.content.text)}</p>
    </section>
    <footer class="tweet-footer">
      <p2>${dateCheck(tweet.created_at)} day(s) ago.</p2>
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
  // console.log("tweet sent off")
  event.preventDefault();
    $.ajax({
      url: "/tweets",
      method: "POST",
      data: $(this).serialize()
    }).then(() => {
      $('.tweet-form').children('textarea').val('')
      loadTweets();
    }).catch(err => console.log(err));
    // console.log("success")
  });
};

// Loads tweets suing AJAX
const loadTweets = () => {
  console.log("Stock tweets fetched");
  $.ajax({
    url: "/tweets",
    method: "GET",
    data: "data"
  }).then((data) => {
    renderTweets(data);
  }).catch(err => console.log(err));
};

// Function used to ensure scripts cannot be run bu users
const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// Formats date on new tweets
const dateCheck = (timeStamp) => {
  const date = new Date() - timeStamp;
  let timeInSecs = Math.floor(date / 1000);
  let timeInMins = Math.floor(timeInSecs / 60);
  let timeInHours = Math.floor(timeInMins / 60);
  let timeInDays = Math.floor(timeInHours / 24);
  return timeInDays;
}

$(document).ready(() => {
  postTweets()
  loadTweets()
});
console.log("Stock tweets fetched");
