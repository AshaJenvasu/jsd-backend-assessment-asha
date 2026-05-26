# My Understanding

## Submission Links

https://github.com/AshaJenvasu/jsd-backend-assessment-asha

**Loom Video (must be set to public — anyone with the link):**
[https://www.loom.com/share/ca41cb30a20342c5a09189adee983f8f]

---

## Questions

Answer each question in your own words. There are no trick questions.

The goal is not a perfect answer — it is an honest one. Write as if you are explaining to a friend who has never used Express. Completing this will prepare you for your video walkthrough.

Do not copy from documentation, your code comments, or AI output. If you are unsure about something, write what you do understand and note where the gap is.

---

**1. What does each HTTP method in your API mean — GET, POST, PUT or PATCH, and DELETE? Why do we use different methods instead of just using POST for everything?**

_Your answer:_

Each HTTP Method have it own role according to REST API so get: show products, post: create products, put: update product, delete:delete product. We use diffrent method to let us know what we will do for each controller function if we use post for everything and work in a big project with many devs it will confuse.

---

**2. What is `express.json()` and what would happen if you left it out?**

_Your answer:_

It's is Middleware like a translator when we receive request from cilent it will translate from JSON to JavaScript Object. If we forgot to write this Middleware the req.body will be undefined.

---

**3. What is the difference between `req.body`, `req.params`, and `req.query`? Give a real example from your API for each one.**

_Your answer:_

req.body is the whole body of what client send request to us example : const { name, price, quantity } = req.body; because we want to get the information from the body.

req.params is the URL path parameters to identify for example const { id } = req.params; when we want to get the product id.

req.query is additional for URL after the ? mostly use for search or filter on the same page like  const { name } = req.query; search for products name using GET.

---

**4. What are HTTP status codes? List every status code you used in your API and explain why you chose it for that situation.**

_Your answer:_
200: success like use Get to show products
201: create new products for POST
400: Bad Request missing something that required like in the POST
404: Not Found something we are looking for like GET products or DELETE product but putting not existing ID
500: internal server error it is the error handling Middleware that we make

---

**5. What is middleware? Describe what it does in your own words and give one example from your code.**

_Your answer:_

Is the middle guard like a Defense tower before you can enter our kingdom like request is someone who want to see the king and Middleware is Defense tower and the King is response. For example Middleware express.json that translate JSON to JS.

---

**6. Why does the order of middleware matter in Express? What could go wrong if it were in the wrong order?**

_Your answer:_

Because Express run code from top to bottom if we place code wrong order the system will broke for sure. if we place express.json() after POST routes the result of the req.body will be undefined.

---

**7. Walk through what happens on the server, step by step, when a POST request is sent to `/products`.**

_Your answer:_

1. Request found express.json() translate JSON to Javascript Object
2. Request found Logger so it tell terminal to tell the log we coded like time right now what kind of HTTP method we use
3. Request run to POST /products then check the req.body that they contain all name price and quantity or not if not will return 400
4. Then if not thing wrong will crate new product object with unique id and default quanity and push it to the array
5. HTTP status 201 mean created response back to the client

---

**8. What is CRUD? Map each operation to the HTTP method and route you used in your API.**

_Your answer:_
CRUD is Create, Read, Update, Delete.
Create: Post /products
Read: GET /products
Read (only one id): GET /products/:id
Update: PUT /products/:id
Delete: DELETE /products/:id

---

**9. How does your API respond when something goes wrong — for example, when a product with a given ID does not exist?**

_Your answer:_

API will block the normal flow and send back a HTTP status 404 not Found also give the message telling that Product with that id is not found.

---

**10. What was the hardest part of building this API and what did you do to get past it?**

_Your answer:_

The hardest part is understanding how data flows work with different request like req.body, req.params, and req.query and also handle with the logic of the PUT route without hitting a bug it so hard. to make this happen I consult with Gemini to find the way to write a better code because the good code is code that easy to read so we change to if statement it make it readable!
