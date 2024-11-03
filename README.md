# HackNC2024: I am secretly not coding 
Looks like you're coding on VS Code, you're actually browsing Reddit :D


## Inspiration
The internet offers a wealth of productivity tools for programmers, such as Leetcode, Stack Exchange, and CLRS. However, there aren’t many options that allow programmers to take a break during work hours. We aimed to create a product that enables people to relax when they should be coding, whether in class or at work.

## What it does
Users enter the name of a Subreddit they wish to browse, and it displays the first few posts disguised as VS Code. This setup allows users to appear focused on coding while actually browsing Reddit. It works with any Subreddit by simply refreshing the page.

## How we built it
We developed a website using HTML, CSS, and JavaScript, pulling information from Reddit's JSON files. We can access these files for any Subreddit using a URL format like "https://www.reddit.com/r/" + subreddit_name + ".json". For example, https://www.reddit.com/r/ruby.json provides data for r/ruby. With some CSS adjustments, we aimed to make the site resemble VS Code as closely as possible.

## Challenges we ran into
One of our main challenges was figuring out how to retrieve information from Reddit. While Reddit has an API, we found it unnecessary for our needs. After exploring various tutorials and documentation, we discovered the JSON conversion method, which proved effective.

## Accomplishments that we're proud of
Unlike many hackathon projects that struggle to function consistently, our product supports every Subreddit page as long as users refresh the page between searches. This is the most complete implementation we've achieved in a hackathon, and we’re pleased to present a fully functional product.

## What we learned 
Creating a VS Code replica within VS Code itself was an interesting experience. The visual similarities between our development environment and our product led to some confusion along the way. It also prompted us to reconsider our desktop organization.

## What's next?
We plan to refine the colors, fonts, and spacing on our website to enhance its resemblance to VS Code. Additionally, we're considering other projects, such as a Reddit browser disguised as Slack or a fake meeting scheduler for work calendars. With more companies enforcing return-to-office policies, we believe these tools could provide some lighthearted relief during the workday.

## Usage of AI 
We utilized Perplexity.ai to improve our writing and clarify our ideas. We also turned to Gemini for assistance with certain CSS questions.

## Learned about Reddit API 
https://www.youtube.com/watch?v=k6CepxRngHo, 
https://www.youtube.com/watch?v=b1oKDLoAHaI&t=218s
