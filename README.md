# Full Stack Todo App

## Table of Contents
- [Project Name](#full-stack-todo-app)
- [Overview](#overview)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)
- [Troubleshooting](#troubleshooting)

## Overview

This project is a full-stack web application for managing and completing tasks, built using popular front-end and back-end technologies.

## Features
- User authentication for secure access to their task list
- Multiple task creation, modification, and deletion
- Task prioritization with ability to update priorities
- Task assignment to specific categories
- Real-time notification system for new tasks

## Setup and Installation

### Prerequisites

*   Clone the repository using `git clone`
*   Install the required packages using `npm install` in the project root
*   Create a new database and update the database credentials in the backend configuration

### Steps to Install

1.  Navigate to the backend folder and run `npm install` to install required backend dependencies.
2.  Navigate to the frontend folder and run `npm install` to install required frontend dependencies.
3.  Create a new database and update the database credentials in the backend configuration.

## Usage

To start the application, follow these steps:

1.  Navigate to the project root folder in your terminal or command prompt.
2.  Run `npm start` to start the development server.
3.  Open a web browser and navigate to `http://localhost:3000` to access the application.
4.  Follow the in-app instructions to log in, create tasks, and utilize the application's features.

## API Documentation

### Endpoints

*   `POST /auth/login`: Log in to the application with provided credentials
*   `POST /auth/register`: Register a new user in the application
*   `GET /tasks`: Retrieve all tasks for the logged-in user
*   `POST /tasks`: Create a new task for the logged-in user
*   `PATCH /tasks/:id`: Update an existing task for the logged-in user
*   `DELETE /tasks/:id`: Delete a task for the logged-in user

### Request Payload

*   `username`: The user's username for authentication
*   `password`: The user's password for authentication
*   `name`: The task name
*   `priority`: The task priority (High, Medium, or Low)
*   `category`: The task category
*   `dueDate`: The task's due date

### Response Payload

*   `token`: The authentication token for the logged-in user
*   `tasks`: An array of tasks with their details

## Contributing

Contributions are welcome. Feel free to create a new branch, make your changes and submit a pull request. Be sure to describe the changes and why they're necessary.

## License

This project is licensed under the MIT License, see the included `LICENSE` file for details.

## Authors

*   [benet013](https://github.com/benet013)

## Acknowledgments

This project utilized the following technologies and libraries:
*   React
*   Node.js
*   Express.js
*   MongoDB
*   Redux

## Troubleshooting

*   Make sure the database is up and running
*   Ensure correct database credentials are provided
*   Run `npm run build` and `npm run start` in the project root

