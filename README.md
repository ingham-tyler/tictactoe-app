# 🌐 TicTacToe

[![License](https://img.shields.io/badge/license-MIT-yellow.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![Docker](https://img.shields.io/badge/docker-build-blue.svg)](https://www.docker.com/get-started)

A simple, bare-bones static site designed for demonstrating modern frontend build pipelines 
(Vite) and containerized deployment (Docker + Nginx).

---

## 🚀 Overview

This project serves as a minimal yet complete demonstration of a full-stack-lite deployment 
pipeline. The frontend is developed using Vite for rapid build optimization, and the final 
static assets are packaged and served reliably using Docker and Nginx.

Whether you are looking for a fast prototype or a simple educational example of containerizing a 
static site, this repository provides a clean, reproducible environment.

### ✨ Features

*   **Modern Frontend:** Built with Vite.
*   **Static Content:** Extremely lightweight and fast-loading public content.
*   **Containerized:** Complete deployment via Docker, ensuring environment consistency.
*   **Simple Deployment:** Uses Nginx as a high-performance, bare-bones web server within the 
container.

## 🛠️ Prerequisites

Before you begin, ensure you have the following software installed on your development machine:

*   [Node.js](https://nodejs.org/) (v14+)
*   [npm](https://www.npmjs.com/)
*   [Docker](https://www.docker.com/)
*   [Docker Compose](https://github.com/docker/compose) (Optional, but recommended for full 
setup)

## 🏗️ Getting Started

The project can be run in two primary modes: **Local Development** or **Production 
Containerization**.

### ➡️ Local Development (Vite Server)

This method is used for writing and testing the frontend code.

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/ingham-tyler/tictactoe-app tictactoe
    cd tictactoe
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Start the Development Server:**
    ```bash
    npm run dev
    ```
    The application will be available, typically at `http://localhost:5173/`.

### 📦 Production Deployment (Docker)

This method is used to build the final, optimized, and containerized version of the site.

#### 1. Build the Application

First, run the Vite build process to generate the static assets into the `/dist` folder.

```bash
npm run build
```

#### 2. Build the Docker Image

This command builds the Nginx container image, copying the generated `/dist` files into the 
correct location inside the container.

```bash
docker build -t tictactoe:latest .
```

#### 3. Run the Container

Start the web server by mapping port `8080` on your host machine to port `80` inside the 
container.

```bash
docker run -p 8080:80 -it tictactoe:latest
```

The application is now accessible at `http://localhost:8080`.

## 📁 Project Structure

The architecture is kept intentionally simple:

```
.
├── index.html       # Main entry point of the application.
├── styles.css       # Global styles for the site.
├── script.js        # Frontend logic and interactivity.
├── package.json     # NPM dependencies and scripts (for Vite).
├── Dockerfile       # Defines the container environment (Nginx setup).
└── nginx.conf       # Configures nginx server
```

### Architecture Flow:

1.  **Development:** `index.html` $\rightarrow$ `script.js` + `styles.css` $\rightarrow$ served 
by Vite Dev Server.
2.  **Build:** `npm run build` $\rightarrow$ Bundles $\rightarrow$ Outputs to `/dist`.
3.  **Deployment:** `/dist` $\rightarrow$ Copied into Docker Image $\rightarrow$ Served by Nginx 
container.

## ⚖️ License

This project is licensed under the [MIT License](LICENSE). See the `LICENSE` file for details.

## 📧 Contact

Tyler Ingham - [email](tdingham31@gmail.com)

See it [live](https://tictactoe-de6d8.containers.snapdeploy.app/)
