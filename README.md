
---

# Inventory Management API

Welcome to the Inventory Management API, a simple RESTful API designed for managing inventory items. This project was developed as part of a backend test assignment for the BenchFive Backend Developer role.

## Table of Contents

- [Project Overview](#project-overview)
- [API Endpoints](#api-endpoints)
- [API Endpoints Using the Hosted URL](#api-endpoints-using-the-hosted-url)
- [Setup Instructions](#setup-instructions)
- [Data Validation](#data-validation)
- [Project Structure](#project-structure)
- [Hosting and Repository](#hosting-and-repository)
- [Conclusion](#conclusion)

## Project Overview

This API allows for basic CRUD (Create, Read, Update, Delete) operations on inventory items. Each item in the inventory has several attributes, including an ID, name, category, quantity, price, supplier, and added date.

### Key Features

- **Create**: Add a new item to the inventory.
- **Read**: Retrieve a list of all items or a single item by its ID.
- **Update**: Modify an existing item's details.
- **Delete**: Remove an item from the inventory.

## API Endpoints

### 1. Create an Item
- **Endpoint:** `POST /inventory`
- **Description:** Adds a new inventory item.
- **Request Body:**
- **Using this dummy object as example:**
    ```json
    {
        "name": "Laptop",
        "category": "Electronics",
        "quantity": 10,
        "price": 999.99,
        "supplier": "Tech Supplies Co.",
        "addedDate": "2024-09-01"
    }
    ```
- **Response:**
    ```json
    {
        "name": "Laptop",
        "category": "Electronics",
        "quantity": 10,
        "price": 999.99,
        "supplier": "Tech Supplies Co.",
        "addedDate": "2024-09-01"
    }
    ```

### 2. Get a List of All Items
- **Endpoint:** `GET /inventory`
- **Description:** Retrieves all inventory items.
- **Response:**
    ```json
    [
        {
            "id": 1,
            "name": "Laptop",
            "category": "Electronics",
            "quantity": 10,
            "price": 999.99,
            "supplier": "Tech Supplies Co.",
            "addedDate": "2024-09-01"
        },
        ...
    ]
    ```

### 3. Get a Single Item by ID
- **Endpoint:** `GET /inventory/:id`
- **Description:** Retrieves a specific inventory item by its ID.
- **Response:**
    ```json
    {
        "id": 1,
        "name": "Laptop",
        "category": "Electronics",
        "quantity": 10,
        "price": 999.99,
        "supplier": "Tech Supplies Co.",
        "addedDate": "2024-09-01"
    }
    ```

### 4. Update an Item
- **Endpoint:** `PUT /inventory/:id`
- **Description:** Updates the details of an existing inventory item.
- **Request Body:**
    ```json
    {
        "name": "Gaming Laptop",
        "category": "Electronics",
        "quantity": 8,
        "price": 1199.99,
        "supplier": "Gaming Gear Inc.",
        "addedDate": "2024-09-01"
    }
    ```
- **Response:**
    ```json
    {
        "id": 1,
        "name": "Gaming Laptop",
        "category": "Electronics",
        "quantity": 8,
        "price": 1199.99,
        "supplier": "Gaming Gear Inc.",
        "addedDate": "2024-09-01"
    }
    ```

### 5. Delete an Item
- **Endpoint:** `DELETE /inventory/:id`
- **Description:** Deletes an inventory item by its ID.
- **Response:** `204 No Content`

## API Endpoints Using the Hosted URL

To interact with the API online, use the following endpoints, where the base URL is [https://backend-test-biqe.onrender.com](https://backend-test-biqe.onrender.com).

### 1. Create an Item
- **Endpoint:** `POST https://backend-test-biqe.onrender.com/inventory`

### 2. Get a List of All Items
- **Endpoint:** `GET https://backend-test-biqe.onrender.com/inventory`

### 3. Get a Single Item by ID
- **Endpoint:** `GET https://backend-test-biqe.onrender.com/inventory/:id`

### 4. Update an Item
- **Endpoint:** `PUT https://backend-test-biqe.onrender.com/inventory/:id`

### 5. Delete an Item
- **Endpoint:** `DELETE https://backend-test-biqe.onrender.com/inventory/:id`

## Setup Instructions

### Prerequisites

- Node.js (v14.x or later)
- MongoDB

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Jerry-Khobby/backend-test.git
    cd inventory-management-api
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
    ```env
    PORT=3000 or any Port number of your choice
    MONGODB_URI=your_mongodb_connection_string
    ```

4. **Start the server:**
    ```bash
    node index.js or nodemon
    ```

### Testing the API

You can use tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/) to test the endpoints.

## Data Validation

The API includes basic data validation:
- **Quantity:** Must be a positive integer.
- **Price:** Must be a positive decimal.
- **Date:** Must be a valid date in ISO format.

## Project Structure

```
├── controllers/
│   └── inventoryController.js
├── models/
│   └── inventoryModel.js
├── routes/
│   └── inventoryRoutes.js
├── app.js
├── server.js
└── .env
```

- **controllers/**: Contains the logic for handling requests and responses.
- **models/**: Defines the schema for inventory items.
- **routes/**: Manages the routing for inventory-related endpoints.
- **app.js**: Initializes the Express application.
- **server.js**: Starts the server.

## Hosting and Repository

The API is hosted on Render and can be accessed at [https://backend-test-biqe.onrender.com](https://backend-test-biqe.onrender.com).

The source code is available on GitHub at [GitHub Repository URL](https://github.com/yourusername/inventory-management-api).

## Conclusion

This Inventory Management API fulfills the requirements for the BenchFive Backend Developer test assignment. It demonstrates the ability to perform CRUD operations on a database, handle edge cases, and ensure data validation. Thank you for the opportunity!
