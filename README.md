# Employee Management System with GraphQL API, Apollo Server, and React

## Technology Stack
- ![JavaScript](path/to/javascript-logo.png) JavaScript
- ![React](path/to/react-logo.png) React
- ![React Router](path/to/react-router-logo.png) React Router
- ![Nodemon](path/to/nodemon-logo.png) Nodemon
- ![React Hook Form](path/to/react-hook-form-logo.png) React Hook Form
- ![Context-API](path/to/context-api-logo.png) Context-API
- ![MongoDB](path/to/mongodb-logo.png) MongoDB
- ![Express.js](path/to/express-logo.png) Express.js
- ![NodeJS](path/to/nodejs-logo.png) NodeJS
- ![Babel](path/to/babel-logo.png) Babel
- ![Apollo-GraphQL](path/to/apollo-graphql-logo.png) Apollo-GraphQL
- ![Webpack](path/to/webpack-logo.png) Webpack
- ![JWT](path/to/jwt-logo.png) JWT
- ![MUI](path/to/mui-logo.png) MUI
- ![Styled Components](path/to/styled-components-logo.png) Styled Components

## Prerequisites
Ensure you have the following installed on your local machine:
- Node.js
- npm (Node Package Manager)
- MongoDB (Make sure it's running)

## How to Run Locally

### Backend
1. Navigate to the backend directory:
    ```sh
    cd Server
    ```
2. Create a `.env` file in the backend directory and set the following variables:
    ```env
    # DB
    DB_URL= "mongodb+srv://admin:admin@cluster0.hnixyaw.mongodb.net/EMS?retryWrites=true&w=majority"

    ## Server Port
    API_SERVER_PORT= 3001

    ## JWT Key
    JWT_SECRET= "Haunted Key"
    ```
    > Note: Here we are using MongoDB Atlas which provides a free cloud-based database. You can paste the URL provided by Atlas or you can install your own database.

3. Install dependencies:
    ```sh
    npm install
    ```
4. Run the backend server:
    ```sh
    npm start
    ```
5. Open your browser and visit `http://localhost:3001/graphql` to explore the GraphQL playground.

### Frontend
1. Navigate to the frontend directory:
    ```sh
    cd App
    ```
2. Create a `.env` file in the frontend directory and set the following variables:
    ```env
    CLIENT_SERVER_PORT=8000

    CLIENT_API_ENDPOINT=http://localhost:3001/graphql  # Assuming backend runs on the same machine
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Run webpack in watch mode:
    ```sh
    npm run watch
    ```
5. In a separate terminal, run the frontend development server:
    ```sh
    npm start
    ```
6. Open your browser and visit `http://localhost:8000` to explore the Employee Management System frontend.

## Team Members
1. Drashty Patel
2. Bhuvneshvari Shivasagaran

## Contributing
If you'd like to contribute to the project, please follow these steps:
1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature/your-feature
    ```
3. Commit your changes:
    ```sh
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```sh
    git push origin feature/your-feature
    ```
5. Submit a pull request.
