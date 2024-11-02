console.log("hello world");

// get the subreddit 
let subreddit_name = " "; 

var button = document.getElementById("confirm_subreddit"); 
button..addEventListener("click", function(event){
  subreddit_name = document.getElementById("subreddit_input").value;
}); 
console.log(subreddit_name); 

