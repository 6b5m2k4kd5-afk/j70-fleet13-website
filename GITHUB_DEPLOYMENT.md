# GitHub & Netlify Deployment Guide
## For: Doug Fritz (GitHub: 6b5m2k4kd5-afk)
## Project: J70 Fleet 13 Website

---

## Phase 1: GitHub Setup (10 minutes)

### Step 1a: Verify Your GitHub Account

1. Go to [github.com](https://github.com)
2. Log in with username: **6b5m2k4kd5-afk**
3. Verify you can access your account

### Step 1b: Create New Repository

1. Click the **+** icon in top right → **New repository**
2. Fill in:
   - **Repository name:** `j70-fleet13-website`
   - **Description:** "J70 Fleet 13 website - Southern Lake Michigan"
   - **Visibility:** Select **Public** (required for free hosting)
   - **Initialize:** Leave unchecked (we'll upload files)
3. Click **Create repository**

### Step 1c: Upload Project Files to GitHub

You now have an empty repository. Follow **ONE** of these methods:

#### Method A: Using Git Command Line (Recommended)

Open Terminal/Command Prompt and run:

```bash
# Navigate to the project folder
cd "/Users/doug/Desktop/J70 Fleet Website/Website Builder for Sailing (Test)"

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Fleet 13 website with all pages and styling"

# Add remote connection to GitHub
git remote add origin https://github.com/6b5m2k4kd5-afk/j70-fleet13-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

When prompted for credentials:
- **Username:** 6b5m2k4kd5-afk
- **Password:** Use a Personal Access Token (see below)

#### Getting a GitHub Personal Access Token

If git asks for password:

1. Go to github.com → Settings → Developer settings → Personal access tokens
2. Click **Generate new token**
3. Name it: "Fleet 13 Website"
4. Select scopes: `repo` (full control of private repositories)
5. Click **Generate token**
6. Copy the token (you'll use it as password in git)

#### Method B: Using GitHub Web Upload

If command line is uncomfortable:

1. Go to your new repository on github.com
2. Click **Add file** → **Upload files**
3. Drag and drop ALL project files from:
   ```
   /Users/doug/Desktop/J70 Fleet Website/Website Builder for Sailing (Test)/
   ```
4. Scroll down and click **Commit changes**
5. Add message: "Initial commit: Fleet 13 website"

### Step 1d: Verify Files on GitHub

1. Go to github.com/6b5m2k4kd5-afk/j70-fleet13-website
2. You should see all files and folders:
   - README.md
   - SETUP_GUIDE.md
   - package.json
   - .eleventy.js
   - _includes/
   - src/css/
   - fleets/Fleet13/
   - etc.

✅ **GitHub setup complete!**

---

## Phase 2: Netlify Deployment (15 minutes)

### Step 2a: Create Netlify Account

1. Go to [netlify.com](https://netlify.com)
2. Click **Sign up**
3. Select **Sign up with GitHub**
4. Authorize Netlify to access your GitHub account
5. Complete account setup
6. You should land on Netlify dashboard

### Step 2b: Create New Site from Git

1. In Netlify dashboard, click **New site from Git**
2. Select **GitHub** as your provider
3. You may need to authorize again → click **Authorize Netlify**
4. Search for and select: **j70-fleet13-website**
5. Click **Deploy site**

### Step 2c: Configure Build Settings

Before deploying, Netlify asks for build settings:

**Build command:** 
```
npm install && npm run build
```

**Publish directory:** 
```
_site
```

**Environment variables:** None needed

Click **Deploy site**

### Step 2d: Wait for Deployment

Netlify will:
1. Clone your repository
2. Install dependencies (npm install)
3. Build the site (npm run build)
4. Deploy to their servers

This takes 2-5 minutes. You'll see a progress indicator.

### Step 2e: Get Your Live URL

Once deployed, Netlify shows your temporary domain:
```
https://[random-name].netlify.app
```

Your Fleet 13 site is live at:
```
https://[random-name].netlify.app/Fleet13/
```

**Save this URL!** It's your temporary live site.

✅ **Netlify deployment complete!**

---

## Phase 3: Custom Domain Setup (Optional, 10 minutes)

### Step 3a: Purchase j70fleet.com Domain

1. Go to [namecheap.com](https://namecheap.com)
2. Search for `j70fleet.com`
3. Click **Add to cart**
4. Complete checkout (~$10/year)
5. After purchase, go to **Manage Domain**

### Step 3b: Connect Domain to Netlify

1. In Netlify dashboard, go to **Domain settings**
2. Click **Add custom domain**
3. Enter: `j70fleet.com`
4. Netlify shows you **nameservers** to use
5. Copy those nameservers

### Step 3c: Update Nameservers in Namecheap

1. In Namecheap, go to **Manage Domain** → **Nameservers**
2. Select **Custom DNS** 
3. Enter the nameservers Netlify provided
4. Save changes

### Step 3d: Wait for Propagation

DNS propagation takes 24-48 hours. Once complete:
- Your site is live at: `j70fleet.com/Fleet13/`
- Automatic HTTPS/SSL certificate activated

✅ **Custom domain complete!**

---

## Phase 4: Photo Integration (15 minutes)

### Step 4a: Download Photos from Google Drive

Access your folder: https://drive.google.com/drive/folders/1krzj0TjW5F7_QZvV7f0VeEG4XjFdMXS_

1. Create folders for photos:
   - `race-photos/`
   - `event-photos/`
   - `crew-photos/`

### Step 4b: Create Photos Directory Structure

1. In your project, create:
   ```
   fleets/Fleet13/images/
   fleets/Fleet13/images/gallery/
   fleets/Fleet13/images/race-photos/
   fleets/Fleet13/images/event-photos/
   ```

2. Download your photos from Google Drive
3. Organize into these folders

### Step 4c: Update Gallery Page

Edit `fleets/Fleet13/photos.md`:

Replace placeholder section with real photos:

```markdown
## Spring Series 2024

<div class="gallery">
  <div>
    <h4>Fleet at Monroe Harbor</h4>
    <img src="/Fleet13/images/gallery/race1-start.jpg" alt="Fleet starting line">
  </div>
  <div>
    <h4>Downwind Action</h4>
    <img src="/Fleet13/images/gallery/race1-downwind.jpg" alt="Racing downwind">
  </div>
</div>
```

### Step 4d: Push Changes to GitHub

```bash
# Navigate to project folder
cd "/Users/doug/Desktop/J70 Fleet Website/Website Builder for Sailing (Test)"

# Add the photo changes
git add fleets/Fleet13/images/
git add fleets/Fleet13/photos.md

# Commit
git commit -m "Add Fleet 13 race photos and event gallery"

# Push to GitHub
git push origin main
```

Netlify automatically rebuilds and deploys in 1-2 minutes!

✅ **Photos integrated!**

---

## Phase 5: Testing & Verification (10 minutes)

### Test Checklist

- [ ] Homepage loads correctly: `j70fleet.com/Fleet13/`
- [ ] Navigation works (Events, Races, Crew, Photos, News)
- [ ] Events page displays properly
- [ ] Race results tables are readable
- [ ] Photos gallery displays your images
- [ ] Crew directory shows properly
- [ ] News posts render
- [ ] Links work (internal and external)
- [ ] Mobile view works (test on phone)
- [ ] Colors look good (Chicago flag blue/white/red)

### Test on Mobile

1. Open site on your phone
2. Tap through each page
3. Verify readable on small screen
4. Check that images aren't cut off

### Test Different Browsers

- Chrome ✓
- Safari ✓
- Firefox ✓
- Edge (optional)

✅ **Testing complete!**

---

## Phase 6: Content Updates & Fine-Tuning (As Needed)

### Making Updates

After initial launch, to update content:

1. Edit files locally
2. Push to GitHub: `git push origin main`
3. Netlify auto-deploys (1-2 minutes)
4. Your site is updated!

### Common Updates

**Add a race result:**
- Edit: `fleets/Fleet13/races.md`
- Add race table and standings
- Push to GitHub

**Add news:**
- Edit: `fleets/Fleet13/news.md`
- Add new post at top
- Push to GitHub

**Change fleet info:**
- Edit: `fleets/Fleet13/config.yml`
- Update name, email, colors, etc.
- Changes apply site-wide

**Add event:**
- Edit: `fleets/Fleet13/events.md`
- Add event details
- Push to GitHub

---

## Troubleshooting

### Build Failed in Netlify?

1. Go to Netlify dashboard
2. Click **Deploys**
3. Click the failed deploy
4. Check build logs for errors
5. Fix error, push to GitHub again

### Photos Not Showing?

- Check file paths are correct
- Verify images are in `fleets/Fleet13/images/` directory
- Ensure markdown references match folder structure
- Check file names (case-sensitive)

### Site Not Updating?

- Verify `git push` succeeded
- Check Netlify build logs
- Clear browser cache (Cmd+Shift+R)
- Wait 2 minutes for rebuild

### Domain Not Working?

- DNS propagation takes 24-48 hours
- Check nameservers are set in Namecheap
- Verify in Netlify domain settings

---

## Success Criteria

✅ Files uploaded to GitHub  
✅ Netlify successfully deployed  
✅ Temporary URL works: [random].netlify.app/Fleet13/  
✅ Custom domain purchased (optional)  
✅ Domain connected to Netlify  
✅ Photos integrated into gallery  
✅ All pages load and display correctly  
✅ Mobile responsive design working  
✅ Links all functional  
✅ You know how to make updates  

**Once all checked → LAUNCH TIME! 🚀**

---

## Next: Tell Fleet 13!

Once live, announce to the fleet:

**Email Template:**

---

Subject: Fleet 13 New Website - j70fleet.com/Fleet13

Hi Fleet 13,

We've launched a brand new website for Fleet 13! 

**Visit us at:** j70fleet.com/Fleet13

**On the site you'll find:**
- Race schedule & results
- Fleet photos
- Crew directory
- Fleet news & announcements
- Event calendar

Check it out and let me know if you have any feedback or want to add content.

Questions? Email me at doug@f2strategy.com

⛵ Fleet Captain Doug

---

## Contact & Support

**Questions during setup?**  
Email: doug@f2strategy.com

**Netlify Support:**  
Go to Netlify dashboard → Support → Contact Support

**GitHub Support:**  
Go to github.com → Help

---

## Timeline Summary

- **Today:** GitHub setup & initial deployment (25 min)
- **Tomorrow:** Photo integration (15 min)
- **Day 3:** Testing & verification (10 min)
- **Day 4-5:** Domain setup (optional, 10 min)
- **Day 6:** Launch & announcement

**Total time to live website: < 1 week** ⛵

---

**All set! Your Fleet 13 website is about to go live!**
