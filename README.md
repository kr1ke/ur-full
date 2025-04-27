# UR Website Deployment Guide

This guide explains how to deploy and run the UR website (frontend + contact form backend) on a server.

## Prerequisites

- Docker and Docker Compose installed on your server
- Git (optional, for cloning the repository)
- SMTP server credentials for email notifications

## Setup Instructions

### 1. Get the Code on Your Server

Either clone the repository or upload the files to your server:

```bash
# Option 1: Clone from your Git repository (if applicable)
git clone [your-repository-url]
cd [repository-folder]

# Option 2: Upload files via SFTP/SCP and navigate to directory
cd /path/to/uploaded/files
```

### 2. Configure Environment Variables

Set up the email service by configuring the backend environment variables:

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Create or edit the `.env` file:
   ```bash
   cp .env.example .env
   nano .env  # Or use any text editor
   ```

3. Update the following values in the `.env` file:
   ```
   PORT=4444
   EMAIL_HOST=your-smtp-server.com
   EMAIL_PORT=465  # Usually 465 for SSL or 587 for TLS
   EMAIL_SECURE=true  # true for SSL, false for TLS
   EMAIL_USER=your-email@example.com
   EMAIL_PASS=your-email-password
   EMAIL_FROM=noreply@yourdomain.com
   EMAIL_TO=recipient@yourdomain.com
   ```

### 3. Build and Start the Application

Navigate back to the project root and use Docker Compose to build and start both services:

```bash
cd ..  # Go back to project root if needed
docker-compose up -d --build
```

This command will:
- Build the frontend and backend Docker images
- Start the containers in detached mode
- Configure the network between services

### 4. Verify the Deployment

The application should now be running with:
- Frontend accessible at: http://your-server-ip:5555
- Backend API accessible at: http://your-server-ip:4444

Check that the containers are running:
```bash
docker-compose ps
```

View logs if needed:
```bash
docker-compose logs -f
```

### 5. Test the Contact Form

1. Open the website in a browser
2. Fill out the contact form 
3. Submit the form
4. Check that you receive the email notification at the address specified in EMAIL_TO

## Troubleshooting

### Email Issues
- Verify your SMTP settings are correct
- Check server logs: `docker-compose logs -f backend`
- Make sure your SMTP server allows connections from your server IP

### Connection Issues
- Ensure ports 5555 and 4444 are open in your server firewall
- Check Docker is running properly: `docker info`

## Maintenance

### Stopping the Application
```bash
docker-compose down
```

### Updating the Application
```bash
git pull  # If using Git
docker-compose up -d --build
```

### Viewing Logs
```bash
# View all logs
docker-compose logs -f

# View only backend logs
docker-compose logs -f backend

# View only frontend logs
docker-compose logs -f frontend
```
