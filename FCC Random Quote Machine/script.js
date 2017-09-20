$('#getJSONP').click(function() {
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
    .done(update)
    .fail(handleErr);
});

function update(response) {
  $('#demo').html(response.quoteText);
  $('#demo2').html("--" + response.quoteAuthor);

}

$('#tweetJSONP').click(function() {
  var textToTweet = $('#demo').text() + $('#demo2').text();

  var tweetLink = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(textToTweet);
  window.open(tweetLink, '_blank');
});
