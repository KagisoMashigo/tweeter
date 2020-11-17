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

$(document).ready(() => {
  postTweets()
  loadTweets()
});
console.log("Stock tweets fetched");
