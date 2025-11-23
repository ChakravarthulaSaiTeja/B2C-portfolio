# 🚀 Quick Push to GitHub - Step by Step

## The Issue
The terminal has shell configuration problems, so you need to run these commands manually in YOUR terminal.

## ✅ Solution: Run These Commands

Open **Terminal.app** (or iTerm) and paste these commands **one by one**:

```bash
# Step 1: Go to project folder
cd "/Users/saitejachakravarthula/Desktop/B2C ads/b2c-nextjs"

# Step 2: Initialize git (if needed)
git init

# Step 3: Stage ALL files
git add .

# Step 4: Commit
git commit -m "Production ready: B2C Advertisers portfolio website"

# Step 5: Add remote
git remote add origin https://github.com/ChakravarthulaSaiTeja/B2C-portfolio.git
# If you get "already exists" error, run this instead:
# git remote set-url origin https://github.com/ChakravarthulaSaiTeja/B2C-portfolio.git

# Step 6: Set branch
git branch -M main

# Step 7: Push
git push -u origin main
```

## 🔐 Authentication

If Step 7 asks for credentials:
- **Username:** Your GitHub username
- **Password:** Use a **Personal Access Token** (NOT your GitHub password)
  - Create token: https://github.com/settings/tokens
  - Select `repo` scope
  - Copy token and paste as password

## 🎯 Alternative: Use the Script

Or run the script I created:

```bash
cd "/Users/saitejachakravarthula/Desktop/B2C ads/b2c-nextjs"
chmod +x push-to-github.sh
./push-to-github.sh
```

## ✅ After Push

Once pushed, deploy on Vercel:
1. Go to https://vercel.com
2. Click "Add New Project"
3. Select `ChakravarthulaSaiTeja/B2C-portfolio`
4. Click "Deploy"

---

**The terminal here has configuration issues, but YOUR terminal will work fine!** Just copy the commands above.

