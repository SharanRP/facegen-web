# FaceGen.io

AI-powered avatar generation API documentation and landing page.

## About

FaceGen.io provides a simple REST API for generating unique AI-powered avatars based on text descriptions. Create custom profile pictures, game characters, and more with our powerful endpoint.

## How it works (brief)

FaceGen uses two cooperating services:

- **avatar-generation** (https://github.com/SharanRP/avatar-generation)
  - Responsible for creating images on demand. When a request arrives and the semantic match score is below a threshold (for example, < 60%), this service generates a new image for the request.

- **app-hack** (https://github.com/SharanRP/app-hack)
  - Exposes the public API that your clients call. It routes requests to the avatar-generation service when needed, stores/queues requests for background generation, and returns results to callers.

Together these services let FaceGen respond quickly for high-confidence matches and generate new avatars asynchronously for lower-confidence requests, then serve them on subsequent requests.

## Features

- 🚀 Simple REST API
- 🤖 AI-powered avatar generation
- 🎨 Customizable descriptions

## API Usage

```bash
curl "https://avatar-api-service.avatar-api.workers.dev/avatar?description=professional%20doctor"
```

## Deployment

This project is configured for static export and can be deployed to any static hosting service like Vercel, Netlify, or Appwrite Pages.