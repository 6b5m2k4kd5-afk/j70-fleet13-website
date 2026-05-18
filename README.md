# J70 Multi-Fleet Website Platform

A modern, open-source website template for J70 sailing fleets. Built for easy customization and multi-fleet deployment.

## 🎯 What This Is

A complete website platform that allows each J70 fleet to have its own customizable site while leveraging shared resources and a central hub.

- **Main Hub:** www.j70fleet.com (fleet directory, combined calendar, aggregated news)
- **Individual Fleets:** www.j70fleet.com/Fleet13, www.j70fleet.com/Fleet1, etc.
- **Shared Resources:** Coaching guides, racing rules, cross-fleet data

## 🚀 Quick Start

### For Fleet Captains (Non-Technical)

1. Fork the GitHub repository
2. Edit `fleets/YOUR_FLEET/config.yml` with your fleet details
3. Add photos to `fleets/YOUR_FLEET/images/`
4. Connect to Netlify and deploy
5. Your site goes live automatically!

### For Developers

```bash
# Install dependencies
npm install

# Development server (http://localhost:8080)
npm start

# Build for production
npm run build
```

## 📁 Project Structure

```
j70-multi-fleet/
├── .eleventy.js              # 11ty configuration
├── _config/                  # Shared configuration
│   ├── filters.js           # Template filters
│   └── shortcodes.js        # Template shortcodes
├── _includes/               # Shared templates
│   ├── layouts/             # Base layouts
│   ├── components/          # Reusable components
│   └── css/                 # Shared CSS
├── _site/                   # Build output (generated)
├── fleets/                  # Individual fleet content
│   ├── Fleet13/
│   │   ├── config.yml      # Fleet-specific config
│   │   ├── news/           # Blog posts
│   │   ├── races/          # Race results
│   │   ├── images/         # Photos
│   │   ├── index.md        # Homepage
│   │   └── events.md       # Calendar page
│   ├── Fleet1/
│   └── ...
├── hub/                     # Main hub site
│   ├── index.md            # Hub homepage
│   ├── directory.md        # Fleet directory
│   ├── calendar.md         # Combined calendar
│   └── resources.md        # Shared resources
└── package.json            # Dependencies
```

## 🎨 Features by Fleet

Each fleet gets:

- **📅 Event Calendar** - Upcoming races, practices, social events
- **🏆 Race Results** - Historical race data, standings, boat performance
- **📷 Photo Gallery** - Organized event photos with lightbox
- **👥 Crew Directory** - Member list with boat details
- **📰 Fleet News** - Blog posts and announcements
- **🔗 Social Integration** - Links to Facebook and external sites
- **📚 Shared Resources** - Access to coaching guides and class documents

## ⚙️ Configuration

### Fleet Setup (config.yml)

Each fleet has its own `fleets/FLEETNAME/config.yml`:

```yaml
name: Fleet 13
location: Southern Lake Michigan
fleetNumber: 13
fleetCaptain:
  name: Doug Fritz
  email: doug@example.com
  phone: 415-844-0641

branding:
  primaryColor: '#0047AB'    # Chicago flag blue
  secondaryColor: '#FFFFFF'  # White
  accentColor: '#CE1126'     # Chicago flag red

socialMedia:
  facebook: 'https://www.facebook.com/j70fleet13'
  email: 'fleet13@j70fleet.com'

description: |
  Fleet 13 of the J70 Class Association,
  based in Southern Lake Michigan. Home to
  some of the Midwest's most competitive sailors.

regattaNetworkUrl: 'https://www.regattanetwork.com/membermgmt/J70/member_list.php?fleet=13'
```

### Global Configuration (.eleventy.js)

- Port, watch paths, filters, shortcodes
- Multi-fleet routing
- CSS/image processing
- Static file copying

## 📝 Creating Content

### Adding a Race Result

Create `fleets/Fleet13/races/2024-05-18-may-series-r3.md`:

```yaml
---
title: "May Series - Race 3"
date: 2024-05-18
fleet: Fleet13
layout: race
results:
  - place: 1
    boatName: "Quantum"
    boatNumber: 1
    skipper: "Doug Fritz"
    crew: ["Sarah", "Mike"]
    points: 1
  - place: 2
    boatName: "Breeze"
    boatNumber: 5
    skipper: "John Smith"
    points: 3
---

Light winds made for a challenging race. Great competition!
```

### Adding an Event

Create `fleets/Fleet13/events/2024-06-15-summer-opener.md`:

```yaml
---
title: "Summer Series Opener"
date: 2024-06-15
location: "Monroe Harbor"
time: "11:00 AM"
fleet: Fleet13
layout: event
---

Join us for the start of the summer racing series!
Registration closes June 10th.
```

### Adding News

Create `fleets/Fleet13/news/2024-05-20-new-members.md`:

```yaml
---
title: "Welcome New Fleet 13 Members!"
date: 2024-05-20
fleet: Fleet13
author: "Doug Fritz"
layout: post
---

Excited to welcome our new members this season...
```

## 🖼️ Adding Photos

1. Add photos to `fleets/Fleet13/images/gallery/`
2. Create a gallery page referencing them
3. Photos automatically get optimized and responsive

```yaml
---
title: "Spring Series Photos"
date: 2024-05-01
fleet: Fleet13
gallery:
  - image: spring-r1-start.jpg
    caption: "Fleet starting line, perfect weather"
  - image: spring-r2-downwind.jpg
    caption: "Downwind leg of race 2"
---
```

## 🌐 Hosting & Deployment

### GitHub Setup

1. Create GitHub account (free)
2. Fork the j70-multi-fleet repository
3. Clone your fork locally
4. Make changes and commit
5. Push to your GitHub fork

### Netlify Deployment

1. Sign up at Netlify.com (free)
2. Connect your GitHub fork
3. Set build command: `npm run build`
4. Set publish directory: `_site`
5. Deploy — Netlify auto-publishes on every push!

### Custom Domain

1. Purchase j70fleet.com from Namecheap
2. In Netlify: Domain settings → Add custom domain
3. Point j70fleet.com to Netlify nameservers
4. Fleet sites live at: j70fleet.com/Fleet13, j70fleet.com/Fleet1, etc.

## 📚 Customization Guide

### Change Fleet Colors

Edit `fleets/Fleet13/config.yml`:

```yaml
branding:
  primaryColor: '#0047AB'    # Chicago flag blue
  secondaryColor: '#FFFFFF'  # White
  accentColor: '#CE1126'     # Chicago flag red
```

CSS automatically applies these to buttons, links, headers.

### Customize Homepage

Edit `fleets/Fleet13/index.md` - use markdown with HTML allowed.

### Add New Sections

1. Create new directory under `fleets/Fleet13/`
2. Add `.md` files or `.html` files
3. They automatically become pages
4. Link to them in navigation

### Customize Navigation

Edit `.eleventy.js` navigation config:

```javascript
eleventyConfig.addFilter('fleetNav', (fleet) => {
  return [
    { url: `/${fleet}/`, label: 'Home' },
    { url: `/${fleet}/races/`, label: 'Race Results' },
    { url: `/${fleet}/events/`, label: 'Calendar' },
    // Add more as needed
  ];
});
```

## 🔧 Advanced Features

### Member Directory from Regatta Network

The system can pull member data from Regatta Network API and generate directory pages automatically.

### Race Results from External Sources

Import race results from:
- Regatta Network
- Finisterre
- YachtScoring
- Manual CSV upload

### Photo Optimization

All images automatically:
- Get compressed
- Generate responsive sizes
- Create WebP versions
- Generate thumbnail previews

### Search

Full-text search across all content (coming in Phase 2)

## 📱 Responsive Design

All pages are mobile-first responsive:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1400px+)

Test locally and on devices before publishing.

## 🔐 Security & Maintenance

### Backups

GitHub automatically backs up all content. Your edits are version-controlled.

### Updates

Keep Netlify and dependencies updated:
- Check GitHub for security updates
- Update 11ty and packages quarterly
- Test locally before deploying

### Performance

- Pages load in <1s
- Automatic CDN caching
- No database = no security vulnerabilities
- Static HTML files

## 🆘 Troubleshooting

### Build Fails

Check the build log in Netlify:
1. Log into Netlify
2. Go to your site
3. Click "Deploys"
4. Check the latest deploy logs

### Photos Not Showing

- Check file paths (case-sensitive)
- Ensure images are in `images/` directory
- Verify YAML front matter syntax

### Links Broken

- Use relative URLs: `/Fleet13/races/`
- For hub links: `/`

## 📞 Support

- Check the GitHub Wiki
- Open an issue on GitHub
- Email the fleet captain or platform admin

## 📄 License

This project is open-source under the MIT License. Fork it, use it, share it!

---

**Built for the J70 sailing community. Made with ⛵ and ❤️.**
