## Comic Book Store Backend

### Setup Instructions:
1. Clone the repository: `git clone <repo_url>`
2. Install dependencies: `npm install`
3. Set up environment variables in `.env` file:
    ```
   PORT=8000
MONGODB_URI=mongodb+srv://itsayesha66:itsayesha66@cluster0.r1nqq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0    ```
4. Start the server: `npm start`

### API Endpoints:
- `POST /api/comics`: Add a new comic book.
- `PUT /api/comics/:id`: Update an existing comic book.
- `DELETE /api/comics/:id`: Delete a comic book.
- `GET /api/comics`: Get all comic books with pagination and filters.
- `GET /api/comics/:id`: Get details of a single comic book.

### Testing:
Import the Postman collection and run tests for all endpoints.
