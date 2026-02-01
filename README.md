# A Clean OOP-based CRUD Backend Application

## Features

- **Class-based Architecture**: Follows strict OOP patterns (Controllers, Services, Routes).
- **Todo CRUD**: Create, Read (All/One), Update, Delete.
- **Type Safety**: Built with TypeScript for robustness.

## Structure

```text
src/
├── app.ts                 # Application Entry Class
├── server.ts              # Server Initialization
├── controllers/           # Request Handlers (Async)
├── Services/              # Business Logic Layer
├── Schema/                # Mongoose Models & Interfaces
├── routes/                # Route Definitions
└── interfaces/            # Shared Interfaces & Types
```

## API Endpoints (`/todo`)

| Method | Endpoint | Description          |
| :----- | :------- | :------------------- |
| POST   | `/`      | Create a new task    |
| GET    | `/`      | Get all tasks        |
| GET    | `/:id`   | Get task by ID       |
| PUT    | `/:id`   | Update task          |
| DELETE | `/:id`   | Delete task          |

## Setup

1. `npm install`
2. `npx ts-node src/server.ts`
