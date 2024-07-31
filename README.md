# zu-vill.si - Website

Welcome to the project repository for **zu-vill.si**. This website is built using PayloadCMS, a powerful and flexible content management system. This README file will guide you through the setup, development, and deployment process.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Project Overview

**zu-vill.si** is a dynamic and modern website designed to provide information about the ZU-Vill community. The site is built with PayloadCMS, offering a user-friendly interface for content management and scalability for future enhancements.

## Getting Started

To get started with this project, you'll need to have the following prerequisites installed on your machine:

- Node.js (v14.x or later)
- Yarn (v1.22.x or later)
- PostgreSQL (for PayloadCMS database)

## Installation

### Install dependencies:

Follow these steps to set up the project locally:

**Clone the repository:**

```bash
git clone https://github.com/yourusername/zu-vill.si.git
cd zu-vill.si
```

**Install dependencies:**

```bash
yarn install
```

**Set up PostgreSQL:**

Ensure PostgreSQL is running on your machine. You can start it using:

```bash
pg_ctl -D /usr/local/var/postgres start
```

Create a new database for the project:

```bash
createdb zu-vil
```

## Configuration

Create a `.env` file in the root directory of the project and add the following environment variables:

```plaintext
# .env
DATABASE_URL=postgres://username:password@localhost:5432/zu-vil
PAYLOAD_SECRET=your-payload-secret
PORT=3000
```

- `DATABASE_URL`: PostgreSQL connection string.
- `PAYLOAD_SECRET`: A secret key for PayloadCMS.
- `PORT`: Port number for running the application.

## Development

To start the development server, run:

```bash
yarn dev
```

This will start the application in development mode, and you can access it at `http://localhost:3000`.

### Directory Structure

- `src/` - Contains the source code of the project.
- `public/` - Static assets for the website.
- `payload.config.js` - PayloadCMS configuration file.

### Available Scripts

- `yarn dev` - Starts the development server.
- `yarn build` - Builds the project for production.
- `yarn start` - Starts the application in production mode.

## Deployment

To deploy the project, follow these steps:

**Build the project:**

```bash
yarn build
```

**Start the application:**

```bash
yarn start
```

**Configure your server:**

Ensure your server is set up to run Node.js applications and PostgreSQL is accessible.

## Contributing

We welcome contributions to improve **zu-vill.si**. If you have suggestions or find any issues, please open an issue or create a pull request.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes.
4. Commit your changes and push to your branch.
5. Create a pull request with a detailed description of your changes.
