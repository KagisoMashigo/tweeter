// Character counter logic
$("textarea").on("keyup", function() {
  const wordCount =  $(this).parent().find(".counter");
  wordCount.text((140 - $(this).val().length));
  wordCount.val() <= 0 ? wordCount.css({'color':'#e40a0a'}) : wordCount.css({'color':'#545149'});
});
