# Deployment Guide

This guide covers various deployment options for the Anand Replica Site.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Build for Production](#build-for-production)
- [Deployment Options](#deployment-options)
  - [Vercel](#vercel)
  - [Netlify](#netlify)
  - [GitHub Pages](#github-pages)
  - [Docker](#docker)
  - [Traditional Hosting](#traditional-hosting)

## Prerequisites

Before deploying, ensure:

1. All dependencies are installed: `npm install`
2. The project builds successfully: `npm run build`
3. All tests pass: `npm run lint`
4. Environment variables are configured (if any)

## Build for Production

Create an optimized production build:

```bash
npm run build
```

This creates a `dist` folder with optimized static files ready for deployment.

## Deployment Options

### Vercel

Vercel is recommended for its ease of use and excellent React/Vite support.

#### Method 1: Using Vercel CLI

1. Install Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Deploy:

   ```bash
   vercel
   ```

3. Follow the prompts to configure your deployment.

#### Method 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Configure build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click "Deploy"

### Netlify

#### Method 1: Using Netlify CLI

1. Install Netlify CLI:

   ```bash
   npm install -g netlify-cli
   ```

2. Build the project:

   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   netlify deploy --prod
   ```

#### Method 2: Using Netlify Dashboard

1. Push your code to GitHub
2. Visit [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Configure build settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
6. Click "Deploy site"

### GitHub Pages

1. Install gh-pages:

   ```bash
   npm install --save-dev gh-pages
   ```

2. Add deployment scripts to `package.json`:

   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.ts`:

   ```typescript
   export default defineConfig({
     base: "/anand-replica-site/",
     // ... other config
   });
   ```

4. Deploy:

   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages in repository settings:
   - Go to Settings > Pages
   - Select `gh-pages` branch
   - Click Save

### Docker

#### Create Dockerfile

```dockerfile
# Build stage
FROM node:20-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### Create nginx.conf

```nginx
events {
  worker_connections 1024;
}

http {
  include /etc/nginx/mime.types;
  default_type application/octet-stream;

  server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
      try_files $uri $uri/ /index.html;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
  }
}
```

#### Build and run

```bash
# Build image
docker build -t anand-replica-site .

# Run container
docker run -p 80:80 anand-replica-site
```

### Traditional Hosting

For traditional web hosting (cPanel, FTP, etc.):

1. Build the project:

   ```bash
   npm run build
   ```

2. Upload the contents of the `dist` folder to your web server's public directory (e.g., `public_html`, `www`)

3. Configure your server to serve `index.html` for all routes (for client-side routing)

#### Apache (.htaccess)

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Environment Variables

If your application uses environment variables:

1. Create a `.env.production` file
2. Add your production environment variables
3. Ensure sensitive data is not committed to Git
4. Configure variables in your deployment platform's dashboard

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test responsive design on different devices
- [ ] Check all links and navigation
- [ ] Verify images and assets load properly
- [ ] Test form submissions (if applicable)
- [ ] Check browser console for errors
- [ ] Test performance with Lighthouse
- [ ] Verify SEO meta tags
- [ ] Test across different browsers
- [ ] Set up monitoring and analytics

## Continuous Deployment

For automatic deployments on every push:

1. The included GitHub Actions workflow (`.github/workflows/ci.yml`) automatically builds and tests on push
2. Configure your hosting platform to auto-deploy from your GitHub repository
3. Platforms like Vercel and Netlify automatically deploy on every push to `main`

## Troubleshooting

### Build Errors

If the build fails:

1. Clear node_modules: `rm -rf node_modules && npm install`
2. Clear cache: `npm cache clean --force`
3. Check Node.js version: `node --version` (should be 18.x or higher)

### 404 Errors After Deployment

Ensure your hosting platform is configured for single-page applications (SPA) and serves `index.html` for all routes.

### Assets Not Loading

Check that:

1. The base path in `vite.config.ts` matches your deployment URL
2. Asset paths are relative, not absolute
3. CORS settings are correct if using a CDN

## Support

For deployment issues, please open an issue on [GitHub](https://github.com/itsmeabirmohanta/anand-replica-site/issues).
