# Blog API Project

## Node.js Course

### Introduction

In this project, we will create a Blog API along with two different front-ends: one for readers to access and comment on posts, and another for authors to write, edit, and publish posts. By separating the backend and frontend, we demonstrate the flexibility and power of decoupling code.

### Assignment

Begin by designing the backend models and schemas. Here are some considerations:

- For a single-author blog, consider implementing authentication for editing functions.
- Define models for posts and comments.
- Decide whether users need to leave a username or email with comments.
- Determine how to handle timestamps for posts and comments.
- Designate published vs unpublished posts in the database.

Set up your Express app and define models using Mongoose. Then, create routes and controllers following RESTful organization.

Testing routes can be done using tools like `curl` or platforms like Postman.

Once the API is working, focus on frontend code. You can use any frontend framework or stick to plain HTML and CSS. Fetch data from the API endpoints to display posts.

Create a second website for authoring and editing posts. Here are some features to include:

- List of all posts with their publication status.
- Buttons to publish/unpublish posts.
- A form for creating new posts, possibly integrating a rich text editor like TinyMCE.
- Ability to manage comments (delete or edit).

### Conclusion

This project will provide hands-on experience in building a RESTful API with Node.js and Express, along with frontend development for accessing and managing blog content. The flexibility of separating backend and frontend code will be demonstrated, along with considerations for authentication and data management.
