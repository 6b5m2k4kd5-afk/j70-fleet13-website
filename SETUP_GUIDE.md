# Fleet 13 Website - Quick Setup Guide

This guide walks you through getting the Fleet 13 website live in 3 steps.

## Step 1: Prepare Your Files (15 minutes)

### 1a. Prepare Your GitHub Account

1. Go to [github.com](https://github.com)
2. If you don't have an account, click "Sign up" and create one
3. Remember your **username** - you'll need it

### 1b. Download the Project Files

The complete project is ready in this folder. It includes:
- Full website code
- Fleet 13 configuration
- All sample content (events, races, crew, news)
- CSS styling with Chicago flag colors
- Responsive design for mobile/tablet/desktop

### 1c. Prepare Your Content

Gather these items to personalize Fleet 13:

**Essential:**
- Fleet 13 photos (provide Google Drive/Dropbox link)
- Any updates to fleet captain info if needed
- Links to existing resources

**Optional:**
- Fleet 13 logo/emblem image
- Additional news posts
- Boat details (numbers, names, crew)

---

## Step 2: Push to GitHub (20 minutes)

### 2a. Create a GitHub Repository

1. Log into GitHub
2. Click **"New"** button in top left
3. Name it: `j70-fleet13-website`
4. Select **Public** (so it can be deployed)
5. Click **Create repository**

### 2b. Upload Files to GitHub

**Option A: Using Git Command Line (Recommended)**

```bash
# Navigate to the project folder
cd "/Users/doug/Desktop/J70 Fleet Website/Website Builder for Sailing (Test)"

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Fleet 13 website"

# Add GitHub remote (replace USERNAME)
git remote add origin https://github.com/USERNAME/j70-fleet13-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Option B: Using GitHub Web Interface**

1. Go to your new repository
2. Click **"Upload files"** button
3. Drag and drop all project files
4. Commit changes

### 2c. Verify on GitHub

Go to github.com/YOUR_USERNAME/j70-fleet13-website  
You should see all files there.

---

## Step 3: Deploy to Netlify (15 minutes)

### 3a. Create Netlify Account

1. Go to [netlify.com](https://netlify.com)
2. Click **Sign up**
3. Choose **GitHub** as signup method
4. Authorize GitHub access
5. You're in!

### 3b. Deploy Your Site

1. In Netlify dashboard, click **"New site from Git"**
2. Select **GitHub** as your Git provider
3. Find and select `j70-fleet13-website` repository
4. Configure build settings:
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `_site`
5. Click **Deploy**

Netlify will build and deploy in 2-3 minutes.

### 3c. Get Your Live URL

After deployment:
- Netlify gives you a temporary URL (e.g., `mystifying-abc123.netlify.app`)
- Your Fleet 13 site is live at: `mystifying-abc123.netlify.app/Fleet13/`

---

## Step 4: Connect Custom Domain (Optional, 10 minutes)

### 4a. Purchase j70fleet.com Domain

1. Go to [namecheap.com](https://namecheap.com)
2. Search for `j70fleet.com`
3. Purchase the domain (≈$10/year)
4. After purchase, go to **Manage Domain**

### 4b. Connect to Netlify

1. In Netlify, go to **Domain settings**
2. Add custom domain: `j70fleet.com`
3. Netlify shows you **nameservers to use**
4. In Namecheap, set nameservers to Netlify's
5. Wait 24-48 hours for propagation
6. Your site is live at `j70fleet.com/Fleet13/`!

---

## What You Get

✅ **Complete Fleet 13 Website**
- Home page with fleet info
- Event calendar (editable)
- Race results & standings (editable)
- Photo gallery (ready for your photos)
- Crew directory with member bios
- Fleet news blog
- Mobile responsive design
- Chicago flag color scheme

✅ **Easy Content Updates**
- Edit markdown files directly
- No coding required
- Just push to GitHub
- Netlify auto-publishes in 1-2 minutes

✅ **Future Expansion Ready**
- Template for other fleets
- Shared resources system
- Central hub infrastructure
- Fully open-source

---

## Common Updates

### Add a Photo to Gallery

1. Edit `/fleets/Fleet13/photos.md`
2. Replace placeholder image paths with your photo paths
3. Save and push to GitHub
4. Netlify auto-publishes

### Add a Race Result

1. Create new file: `/fleets/Fleet13/races/2024-05-25-spring-r3.md`
2. Copy race template, fill in results
3. Save and push
4. Auto-published!

### Update Fleet Captain Info

1. Edit `/fleets/Fleet13/config.yml`
2. Change name, email, phone
3. Push to GitHub
4. Done!

### Change Colors

1. Edit `/fleets/Fleet13/config.yml`
2. Update color hex codes
3. Or edit `/src/css/style.css`
4. Changes apply site-wide

---

## Troubleshooting

### Build Failed?
- Check Netlify deploy logs
- Verify file paths are correct
- Ensure YAML syntax is valid (check indentation)

### Changes Not Showing?
- Force refresh (Cmd+Shift+R or Ctrl+Shift+R)
- Clear browser cache
- Check Netlify deploy log for errors

### Photos Not Loading?
- Verify image file names and paths
- Ensure images are in correct folder
- Check file extensions (.jpg, .png, .webp)

### Need Help?
📧 Email: doug@f2strategy.com

---

## Next Steps After Launch

1. **Add Your Photos** - Share Google Drive folder with photos
2. **Update Member List** - Pull from Regatta Network
3. **Post News** - Share updates to news section
4. **Social Integration** - Link Facebook group
5. **Invite Others** - Tell other fleets about the template!

---

## The Hub Site (j70fleet.com)

Once Fleet 13 is live, we'll build the central hub at `j70fleet.com` with:
- Directory of all J70 fleets
- Combined calendar
- Aggregated news feed
- Shared resources library
- Cross-fleet community features

This makes it easy for sailors to find and follow multiple fleets!

---

**You're all set! Your Fleet 13 website is ready to launch.** ⛵

Any questions or stuck? Reach out!
