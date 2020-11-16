$( "textarea" ).on("keyup", function() {
  const wordCount =  $(this).parent().children().find(".counter");
  wordCount.text((140 - $(this).val().length));
  wordCount.val() <= 0 ? wordCount.css({'color':'#e40a0a'}): wordCount.css({'color':'#545149'}); // its more advisable to code css into a seperate file
});
