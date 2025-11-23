#!/bin/bash

# Final build ready - Push all TypeScript fixes to GitHub

cd "/Users/saitejachakravarthula/Desktop/B2C ads/b2c-nextjs"

echo "📦 Staging all changes..."
git add -A

echo "📝 Committing fixes..."
git commit -m "Fix all TypeScript build errors - Final build ready version

- Fixed CustomCursor.tsx: Explicit boolean conversion for closest() calls
- Fixed Hero.tsx: Added Variants type and ease array type assertions  
- Fixed animations.ts: Removed viewport from Variants object

All TypeScript errors resolved. Build ready for Vercel deployment."

echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Done! Vercel will automatically rebuild with the fixes."

