document.addEventListener("DOMContentLoaded", () => {
    console.log("hello world"); //check if it's working
    
     // get the subreddit from the user and put it in the label
     let subreddit_name = " "; 
     let titles_and_text_and_name = [];
     const test_label = document.getElementById("test_output"); // the test label to put things in 
     const button = document.getElementById("confirm_subreddit"); 
     const subreddit_name_label = document.getElementById("explorer"); 
     button?.addEventListener("click", getSubredditName);
     function getSubredditName(event) {
       subreddit_name = document.getElementById("subreddit_input").value;  
       test_label.innerHTML = subreddit_name; 
       subreddit_name_label.innerHTML = "r/" + subreddit_name; 
       console.log("yay"); 
       fetchPosts(subreddit_name); 
     }


    // get the reddit from the JSON
    const responses = []; 
    const posts = 10; 
    const fetchPosts = async (subreddit_name) => {
        // get the JSON of the subreddit page 
        // for example https://www.reddit.com/r/ruby.json is for r/ruby 
        // "https://www.reddit.com/r/" + subreddit_name + ".json"

        const response = await fetch(`https://www.reddit.com/r/${subreddit_name}.json?limit=${posts}`);
        const reponseJSON = await response.json(); 
        responses.push(reponseJSON)
        parseResults(responses); 
    }

    const parseResults = (responses) => {
        // isolate the JSON to the posts part 
        const posts = responses[0]["data"]["children"]; 
        console.log(posts);

        // loop through and get the "selftext" and "title" and "name" 
        for (let i = 0; i < posts.length; i++) {
            titles_and_text_and_name.push([posts[i]["data"]["title"], posts[i]["data"]["selftext"], posts[i]["data"]["name"]]); 
          }
        console.log(titles_and_text_and_name); // testing
        displayResults(titles_and_text_and_name); 
    }

    const posts_buttons = [document.getElementById("p0"),document.getElementById("p1"),document.getElementById("p2"),document.getElementById("p3"),document.getElementById("p4"),document.getElementById("p5"),document.getElementById("p6")];
        

    const displayResults = (info) => {
        
        for (let i = 0; i < posts_buttons.length; i++) {
            posts_buttons[i].innerHTML = titles_and_text_and_name[i][0]; 
        }
    }
    const display_post_label = document.getElementById("display_post_text"); 

    const changeDisplay = (num, info) => {
        console.log(num);
        display_post_label.innerHTML = titles_and_text_and_name[num][1];
    }

    posts_buttons[0]?.addEventListener("click", function() {
        display_post_label.innerHTML = titles_and_text_and_name[0][1];
      });
      posts_buttons[1]?.addEventListener("click", function() {
        display_post_label.innerHTML = titles_and_text_and_name[1][1];
      });
      posts_buttons[2]?.addEventListener("click", function() {
        display_post_label.innerHTML = titles_and_text_and_name[2][1];
      });
      posts_buttons[3]?.addEventListener("click", function() {
        display_post_label.innerHTML = titles_and_text_and_name[3][1];
      });
      posts_buttons[4]?.addEventListener("click", function() {
        display_post_label.innerHTML = titles_and_text_and_name[4][1];
      });
      posts_buttons[5]?.addEventListener("click", function() {
        display_post_label.innerHTML = titles_and_text_and_name[5][1];
      });
      posts_buttons[6]?.addEventListener("click", function() {
        display_post_label.innerHTML = titles_and_text_and_name[6][1];
      });
  
  });
  
  
  
  
