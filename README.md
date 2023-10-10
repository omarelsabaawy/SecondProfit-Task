# SecondProfit-Task

This is a small web application that displays a list of available countries and their respective flags on a single page. The application includes authentication, fetching country data from a third-party API, and dockerization for easy deployment.

## Features

- **Authentication**: Users are required to authenticate using Auth0.
- **Country Data**: The backend fetches country names and flag URLs from the [Restcountries API](https://restcountries.com/).
- **Frontend**: The frontend is built using EJS templates, and it displays the country data in a user-friendly format.
- **Dockerization**: The entire application can be easily containerized using Docker.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/omarelsabaawy/SecondProfit-Task.git
   cd SecondProfit-Task
   ```
2. **Install dependencies:**

   ```bash
   npm install
   ```
3. **Create a .env file in the root directory with the following environment variables:**

   ```bash
   SECRET=your-auth0-secret
   BASEURL=http://localhost:3000
   CLIENTID=your-auth0-client-id
   ISSUERBASEURL=https://your-auth0-issuer-url.com
   PORT=3000
   ```
Replace the placeholders with your actual Auth0 configuration and desired port.

## Usage
1. **Start your Application:**
```bash
npm start
```
The application will be available at http://localhost:3000.
2. **Authenticate using Auth0 to access the country data.**
3. **Explore the country flags and information on the home page.**

## Dockerization

To containerize the application using Docker:

1. **Build the Docker image:**
   ```bash
   docker build -t my-secondprofit-task .
   ```
3. **Run the Docker container:**
   ```bash
   docker run -p 3000:3000 --env-file .env my-secondprofit-task
   ```
The application will be accessible at http://localhost:3000 within the Docker container.
