#!/bin/bash
# Push B2C Portfolio to GitHub

cd "/Users/saitejachakravarthula/Desktop/B2C ads/b2c-nextjs"

echo "📦 Staging all files..."
git add -A

echo "💾 Committing changes..."
git commit -m "Fix TypeScript build error and production ready: B2C Advertisers portfolio website" || echo "No changes to commit or already committed"

echo "🔗 Setting up remote..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/ChakravarthulaSaiTeja/B2C-portfolio.git

echo "🌿 Setting branch to main..."
git branch -M main

echo "⬆️  Pushing to GitHub..."
git push -u origin main

echo "✅ Done!"

