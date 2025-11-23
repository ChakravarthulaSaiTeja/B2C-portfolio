# Vercel Deployment Guide

## Pre-Deployment Checklist

✅ **Completed:**
- Removed console.log statements
- Verified Next.js configuration
- Checked for linting errors
- Added .vercelignore file
- Optimized next.config.ts for Vercel

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push code to GitHub:**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository: `ChakravarthulaSaiTeja/B2C-portfolio`
   - Vercel will auto-detect Next.js
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **For production:**
   ```bash
   vercel --prod
   ```

## Environment Variables

No environment variables are required for basic functionality.

If you need to add any later:
- Go to Vercel Dashboard → Project Settings → Environment Variables
- Add your variables
- Redeploy

## Build Settings (Auto-detected by Vercel)

- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

## Post-Deployment

1. **Verify deployment:**
   - Check the provided Vercel URL
   - Test all pages and functionality
   - Verify images load correctly

2. **Custom Domain (Optional):**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Configure DNS as instructed

## Troubleshooting

- **Build fails:** Check build logs in Vercel dashboard
- **Images not loading:** Verify image paths in `public/images/`
- **Styling issues:** Ensure Tailwind CSS is properly configured

