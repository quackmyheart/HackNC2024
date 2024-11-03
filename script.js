document.addEventListener("DOMContentLoaded", () => {
    console.log("hello world"); //check if it's working
    
     // get the subreddit from the user and put it in the label
     let subreddit_name = " "; 
     const test_label = document.getElementById("test_output"); // the test label to put things in 
     const button = document.getElementById("confirm_subreddit"); 
     button?.addEventListener("click", getSubredditName);
     function getSubredditName(event) {
       subreddit_name = document.getElementById("subreddit_input").value;  
       test_label.innerHTML = subreddit_name; 
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
        const titles_and_text_and_name = []; 
        for (let i = 0; i < posts.length; i++) {
            titles_and_text_and_name.push([posts[i]["data"]["title"], posts[i]["data"]["selftext"], posts[i]["data"]["name"]]); 
          }
        console.log(titles_and_text_and_name); // testing
    }
  
  });
  
  
  
  
