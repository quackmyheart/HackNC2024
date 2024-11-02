document.addEventListener("DOMContentLoaded", () => {
  console.log("hello world"); //check if it's working
   // get the subreddit from the user and put it in the label
   let subreddit_name = " "; 
   const test_label = document.getElementById("test_output"); // the test label to put things in 
   const button = document.getElementById("confirm_subreddit"); 
   button?.addEventListener("click", getSubredditName);
   function getSubredditName(event) {
     subreddit_name = document.getElementById("subreddit_input").value;
     test_label.value = subreddit_name; 
     console.log("yay"); 
   }
   console.log(subreddit_name, "button reddit subreddit"); // checking if the name is corrrect  
  
  // get something from the reddit json
  // for example https://www.reddit.com/r/ruby.json is for r/ruby 
  // "https://www.reddit.com/r/" + subreddit_name + ".json"
  var subredddit_json = " "; 
  
   // display nicely 

});



