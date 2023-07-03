

# My Portfolio

![image](https://github.com/Noroff-FEU-Resits/semester-project-2-resit-2-kayalvaer/blob/main/newspaper-next/newspaper-ui/public/semester-project-2.png)

A simple overview of the use/purpose of the project.

## Description

Semester Project, is part of the requirement to test student skills as part of our software
development qualification at Noroff College.Was tasked with creating a news website where
users can come and read the latest news. Authorized writers for the news site should
be able to log in and create an article.
This report will outline the project plan and why I made them and how I came around to
implement.

User Stories:

- As a user, I want tobe able to log in and create an post., so
that I can explore old and new ideas for post.
- As a user, I want to be able to be able to view the current
posts,
- As a user, I want to be able to search the site for any posts
mentioning the keyword(s) they have used to search.
- As a user I want to match on the titles, the content in the
articles, or both.
- As a user I want to be able to use categories to filter groups
of articles eg. sport, politics, science etc.
- As a user I want to be able to read an article and see who the
author is and should be able to click the author’s name to
view all the articles written by that author.
- As a user I want the titles of the article page must update
with the article title.
- As a user I want to be • Authenticated writers for the
news site to be able to log into an admin panel and on
this panel they are able to add, edit and delete an article.
- As a user I want the article should have at least a: title,
featured image, content, and categories.

## Teck Stack Built With

# Design tools used:

- [Figma](https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=841577996410440132) :
- [Tybloid News Figma designs] ( is used to create the prototypes for the project).
- [Adobe](https://www.adobe.com/products/xd/learn/get-started/what-is-adobe-xd-used-for.html)


# Tech stack used:

- [React.js](https://nextjs.org/docs)
- [Tailwind](https://tailwindui.com/)
- [Strapi API](https://strapi.io/)
- HTML5: HTML5 provides the structure and the content for my project.
- CSS3: CSS3 provides the style of the HTML5 elements.
- Javascript: JavaScript provides the interactivity of the project.


Frameworks, libraries & programs used
- vsCode: The vscode is used to code and develop the project.
- Git: The Git was used for version control to commit to Git and push to GitHub.
- GitHub: The GitHub is used to host the project.

# Testing tools used

Testing During Development
As mentioned at the start much of the testing my JavaScript code was done throughout the
development process using console.log within each function to report on what variables and
arrays were being generated at each stage of the site. Read the output and used breakpoint
and console network to check the location of my errors and the movement action as i
manually tested them. that allowed

- Autoprefixer
• Autoprefixer is used to parsethe CSS and to add vendor prefixes to CSS rules.
- W3C Markup Validation Service
• The W3C MarkUp Validation Service is used to check whether errors in the
HTML5 code.
- W3C CSS validator
• The W3C CSS validator is used to check errors in the CSS3 code.
- Joshing
• JShint is a JavaScript validator is used to check any errors in the JavaScript
code.

# More Tools
- Tinypng: Used to re-size images.
- Google Developer Tools: The GitHub is used to host the project and test the project through the console
and lighthouse.
- Design mockup : http://ami.responsivedesign.is/

## Features

After identifying the user stories I managed to identify the features for the
website to help me with the development roadmap.And then created tasks based on userstories

### Installing

How to get the project started. First clone the repo and then to install the dependencies e.g.

1. Clone the repo:

```bash
git clone git@github.com:NoroffFEU/portfolio-1-example.git
```

2. Install the dependencies:

```
npm install
```

### Running

To run the NextJS app use the commands below and run to start the project:

Run the following commands on the terminal:

```bash
npm run start
```

## Contributing

- Responsiveness
  
Google Developer tools was used to test the layout of my site on multiple device sizes, and
also shared the deployed site with family and friends for them to test on their devices too.

- Performance
  
Lighthouse tool on the Google Developer software was useful to test the performance of my
site. It flagged several errors which some were resolved using the console.The project could
do with more debugging and testing. The performance needs further investigation and acting
on the lighthouse suggested points of improvement.

- Log into admin site using the following details:
- UserLogin Details:
1. test1@test.com Password: test1234
2. test2@test.com Password: test21234
3. test3@test.com Password: test31234

## Contact

This is where you can leave your social links for people to contact you, such as a LinkedIn profile or Twitter link e.g.

[Github Account](https://github.com/kayalvaer)
[Twitter Account](https://twitter.com/KayAlvaer)
[My LinkedIn page](www.linkedin.com)
[Behance Account](https://www.behance.net/keatlarmosarwe)

## License

All text in this project is original content and some help from Noroff College
tutorials .
• The developer took inspiration from several tutorials and github samples listed on the
references below.

- https://github.com/tpiros/jamstack-training-films-ui/tree/main/pages
- https://freefrontend.com/css-magazine-layouts/
- Noroff Tutorials:
- Images from Pexels :


Projects committed to git.

## Acknowledgments

A thank you to lectures at Noroff Institute and Admin employee for all their help during the studies.

## Deploy on Vercel

Used the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Task Brief 

You have been tasked with creating a news website where users can come and read the latest news. Authorized writers for the news site should be able to log in and create an article.

Here are a list of functional requirements: 
- Visitors should be able to view the current articles.
- Visitors should be able to search the site for any articles mentioning the keyword(s) they have used to search. You may match on the titles, the content in the articles, or both.
- Visitors should be able to use categories to filter groups of articles eg. sport, politics, science etc.
- Visitors should be able to read an article and see who the author is and should be able to click the author's name to view all the articles written by that author. The titles of the article page must update with the article title.
- Authenticated writers for the news site should be able to log into an admin panel and on this panel they are able to add, edit and delete an article. The article should have at least a: title, featured image, content, and categories.

You should use WordPress or Strapi as a headless CMS to manage the content. It’s important to note that the editing of the content should happen on the front-end built by you, not the WordPress/Strapi admin panel. You need to be making PUT and POST requests yourself to maintain the content on the site, and be fetching content from the WordPress REST API. 

The API that you create and serve through WordPress/Strapi is one part of the project. You’re just using WordPress/Strapi for the API it gives you. 

The second part of the project is the front-end code; a completely distinct project. 

## Task Level 1 Process 
1. Design the website using a prototyping tool of your choice (Adobe XD, Sketch etc.) 
2. Create your WordPress/Strapi installation and deploy it. If you're using WordPress you can deploy on your web host, and if you're using Strapi you can deploy on Heroku.
3. Make your own example articles so that you have data to start off. You will need at least 12 articles for the site and at least three authors. Provide login credentials for each of the authors in your report so that we can test logging into the admin panel.
4. Use your created repository that GitHub Classroom has created for you for the files for your front-end code.
5. Set up your API call to fetch data from the API and display it in your website. Make sure to read the documentation for the API of your chosen CMS
6. Create the login system and manage the authentication to ensure you can make PUT, POST and DELETE requests. Include the login details for an already created user in your report for the markers to use. 
7. Build the forms for creating, updating and deleting an article. 
8. Make the search functionality for user's to find articles based on their search input, categories, and author.
9. Ensure everything is pushed to the repository created for this project.

## Level 2 Process
1. Visitors should be able to add comments to articles.

## Required Submission 

Submit a link to the repository of the website you’ve created, as well as a report. You can use [this template](https://interactive-content.now.sh/resources/semester-project-2-report-template.docx) for your report. In your report, clearly state the login credentials for the users you've created.

## Social media links for people for contact

[Github Account](https://github.com/kayalvaer)
[Twitter Account](https://twitter.com/KayAlvaer)
[My LinkedIn page](www.linkedin.com)
[Behance Account](https://www.behance.net/keatlarmosarwe)

## License

All text in this project is original content and some help from Noroff College
tutorials .
• The developer took inspiration from several tutorials and github samples listed on the
references below.

- https://github.com/tpiros/jamstack-training-films-ui/tree/main/pages
- https://freefrontend.com/css-magazine-layouts/
- Noroff Tutorials:
- Images from Pexels :


Projects committed to git.

## Acknowledgments

A thank you to lectures at Noroff Institute and Admin employee for all their help during the studies.

## Deploy on Vercel

Used the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Delivery

Include the deploying to provided link in the Moodle delivery window using [Delivery repo](https://github.com/Noroff-FEU-Resits/semester-project-2-resit-2-kayalvaer).

All final changes must be merged into the default branch `main` or `master`. Other branches will not be checked.
