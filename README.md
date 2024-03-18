# Node.js Express API with MongoDB and Mongoose

- This Node.js Express application provides RESTful APIs for managing authors and news feeds using MongoDB as the database with Mongoose ORM.

Getting Started
Clone the repository:

- bash
Copy code

```
git clone https://github.com/shahid-io/sector-feed.git
cd repository
```

- Install dependencies:

Copy code

```
npm install
Start the server:
```

- sql
Copy code

```
npm start
The server will run on <http://localhost:3000> by default.
```

Endpoints
Authors
Create Author
Endpoint: POST /author

- Request Body:

json
Copy code

```
{
  "name": "Author Name",
  "email": "<author@example.com>",
  "bio": "Author Bio",
  "address": {
    "street": "123 Main Street",
    "city": "Cityville",
    "state": "Stateland",
    "country": "Countryland",
    "zipcode": "12345"
  }
}
```

Response:
json
Copy code

```
{
  "status": "OK",
  "message": "Author created successfully",
  "data": { "authorObject" }
}
```

Get Authors
Endpoint: GET /author
Response:
json
Copy code

```
{
  "status": "OK",
  "message": "Authors fetched successfully",
  "data": [{ "authorObject1" }, { "authorObject2" }, ...]
}
```

News Feed
Create News Feed
Endpoint: POST /newsfeed
Request Body:
json
Copy code

```{
  "title": "News Feed Title",
  "content": "News Feed Content",
  "author": "authorId"
}```
Response:
json
Copy code
```{
  "status": "OK",
  "message": "News feed created successfully",
  "data": { "newsFeedObject" }
}```
Get News Feed by ID
Endpoint: GET /newsfeed/:id
Response:
json
Copy code
```{
  "status": "OK",
  "message": "News feed fetched successfully",
  "data": { "newsFeedObject" }
}```
Get All News Feeds
Endpoint: GET /newsfeed
Response:
json
Copy code
```{
  "status": "OK",
  "message": "News feeds fetched successfully",
  "data": [{ "newsFeedObject1" }, { "newsFeedObject2" }, ...]
}```
Populate Method
The populate method is used to replace specified paths in a document with document(s) from other collection(s). In this application, populate('author') is used to populate the author field in the news feed with the corresponding author document.

Scenarios
Creating Authors:

Use the POST /author endpoint with the required fields (name, email, bio) to create an author. Optionally, you can include address details as well.
Fetching Authors:

Use the GET /author endpoint to fetch all authors.
Creating News Feeds:

Use the POST /newsfeed endpoint with the required fields (title, content, author) to create a news feed. Provide the author field with the ID of the author who created the news feed.
Fetching News Feeds:

Use the GET /newsfeed/:id endpoint to fetch a specific news feed by its ID.
Use the GET /newsfeed endpoint to fetch all news feeds, with the author field populated with the author details.
Note
Make sure to replace { "authorObject" }, { "newsFeedObject" }, { "authorObject1" }, { "authorObject2" }, { "newsFeedObject1" }, { "newsFeedObject2" }, authorId, and other placeholder values with actual data from your application and database.
Ensure proper error handling and validation in your application for robustness and security.
