# Deployment Guide for AnyPOS

This guide explains how to deploy the AnyPOS backend to Render using the `render.yaml` configuration file.

## Prerequisites

- A [Render](https://render.com) account.
- A GitHub repository containing this code.

## Deployment Steps

1.  **Push Code to GitHub:** Ensure your latest code is pushed to your GitHub repository.
2.  **Create a New Blueprint Instance:**
    - Go to the Render Dashboard.
    - Click "New" and select "Blueprint".
    - Connect your GitHub repository.
    - Render will automatically detect the `render.yaml` file.
3.  **Approve the Plan:**
    - Render will show a preview of the resources to be created:
        - `anypos-db` (PostgreSQL Database)
        - `anypos-api` (Web Service)
    - Click "Apply" to start the deployment.

## Architecture & Configuration

### Backend (Middleware)

- **Service Name:** `anypos-api`
- **Runtime:** .NET 8 (Native)
- **Port:** Listens on port `10000` (mapped to external HTTP/HTTPS).
- **Environment Variables:**
    - `ASPNETCORE_URLS`: `http://0.0.0.0:10000` (Required for Render)
    - `ConnectionStrings__DefaultConnection`: Automatically linked to the `anypos-db` database.
    - `ASPNETCORE_ENVIRONMENT`: `Production`

### Database

- **Service Name:** `anypos-db`
- **Type:** PostgreSQL
- **Plan:** Free (or Starter for production workloads)
- **Region:** Oregon (configurable in `render.yaml`)

### Frontend (POS App)

The `pos-app` is an Electron-based desktop application designed for offline-first usage. It is **not** deployed to Render as a web application.

**To connect the desktop app to the deployed backend:**

1.  Get the URL of your deployed `anypos-api` service from the Render Dashboard (e.g., `https://anypos-api.onrender.com`).
2.  Update the `src/pos-app/electron/config.ts` or relevant configuration file in the desktop app to point to this URL instead of `localhost`.
3.  Build and distribute the Electron app separately.

## Troubleshooting

- **Build Failures:** Check the logs in the Render Dashboard. Ensure the `dotnet publish` command is running correctly in the `src/middleware` directory.
- **Database Connection:** Verify that the `ConnectionStrings__DefaultConnection` environment variable is correctly set in the Web Service settings. It should look like `postgres://user:password@hostname/database`.
