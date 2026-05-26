# 🛒 Cardfight Vanguard Store REST API

REST API for a shopping cart backend built with **Express.js** and **Node.js**. Features in-memory data management, structured middleware logic, and centralized error handling — developed as part of a professional backend development assessment.

---

## ✨ Features

- **Full CRUD Operations** — Create, Read, Update, and Delete products seamlessly
- **Advanced Query Filtering** — Filter products via query parameters (e.g., `?name=`)
- **Custom Middleware** — Request Logger tracks live HTTP traffic in the terminal
- **Robust Error Handling** — Centralized middleware intercepts syntax errors (e.g., malformed JSON) and returns safe `500 Internal Server Error` responses
- **Smart Data Validation** — Conditional updates prevent numerical bugs (e.g., resetting quantity to `0`) and ensure type safety

---

## 🛣️ API Endpoints

| Method | Endpoint | Description | Status Code |
| :---: | :--- | :--- | :---: |
| `GET` | `/products` | Retrieve all products (supports `?name=` filter) | `200 OK` |
| `GET` | `/products/:id` | Retrieve a single product by ID | `200 OK` / `404` |
| `POST` | `/products` | Create a new product (validates required fields) | `201 Created` / `400` |
| `PUT` | `/products/:id` | Conditionally update an existing product | `200 OK` / `404` |
| `DELETE` | `/products/:id` | Remove a product | `200 OK` / `404` |

### Product Schema

```json
{
  "id": "String (Required)",
  "name": "String (Required)",
  "price": "Number (Required)",
  "quantity": "Number (Default: 1)"
}
```

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| Runtime | Node.js |
| Framework | Express.js (ES Modules — `import/export`) |
| Dev Server | Native `node --watch` (no Nodemon needed) |
| Testing | VS Code REST Client (`requests.http`) |

---

## ⚙️ Installation & Setup

**1. Clone the repository**

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm run dev
```

The server will start at `http://localhost:3000`

---

## 🔍 Testing the API

All endpoints can be tested using the included `requests.http` file. Install the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension for VS Code and click **Send Request** above each block.

**Example — Add a product:**

```http
POST http://localhost:3000/products
Content-Type: application/json

{
  "name": "Fated One of Miracles, Rezael",
  "price": 300,
  "quantity": 1
}
```

---

## 💡 Key Architectural Decisions

**Why `express.json()` matters**
Acts as an essential gatekeeper that parses incoming raw JSON strings into JavaScript objects accessible via `req.body`. Without it, the body would be `undefined`.

**Top-to-bottom middleware execution**
The app is built with strict linear execution order — payloads are parsed and logged *before* reaching any route handler, ensuring consistent, predictable behavior.

**Readable conditional logic**
Explicit `if`-statements are used over shorthand tricks for update operations. This prevents silent bugs (e.g., a falsy `0` value wiping a field) and makes the code easier to audit and maintain.

---
