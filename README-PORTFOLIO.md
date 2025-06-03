# Digital Art Portfolio Website

A minimalist black art portfolio website with interactive features, particles.js background effects, and responsive design using React and Bootstrap.

## Features

### ✨ Core Functionality
- **4 Pages:** Home, About, Portfolio, Contact
- **Interactive Portfolio:** Click on artwork to reveal details in sidebar
- **Contact Form:** Functional email form with validation
- **Social Media Links:** Instagram, Twitter, LinkedIn, Behance
- **Responsive Design:** Optimized for desktop, tablet, and mobile

### 🎨 Design
- **Minimalist Black Theme** with red hover accents
- **Bootstrap 5.3.6** for responsive grid system
- **particles.js** background effects
- **Font Awesome** icons for social media

## Customizing Particles.js

The website includes a default particles.js configuration, but you can easily replace it with your custom JSON configuration:

### Option 1: Replace the Configuration File
1. Edit `/app/frontend/src/particles-config.js`
2. Replace the `particlesConfig` object with your JSON configuration
3. The changes will be applied automatically

### Option 2: Load External JSON File
```javascript
// In your particles-config.js
import { initParticles } from './particles-config';

// Load your custom JSON file
fetch('/path/to/your/particles-config.json')
  .then(response => response.json())
  .then(config => initParticles(config));
```

### Current Default Configuration
The default configuration includes:
- 50 white particles with opacity 0.3
- Connected lines between particles
- Hover repulse effect
- Click to add more particles
- Responsive design

## Customization Guide

### Portfolio Artworks
Edit the `artworks` array in `/app/frontend/src/App.js`:
```javascript
const artworks = [
  {
    id: 1,
    src: 'your-image-url',
    title: 'Your Artwork Title',
    description: 'Your artwork description...'
  },
  // Add more artworks...
];
```

### Social Media Links
Update the social links in the Contact component:
```javascript
<a href="your-instagram-url" className="social-link">
  <i className="fab fa-instagram"></i>
  Instagram
</a>
```

### Artist Information
- Update the hero title and subtitle in the Home component
- Modify the about text in the About component
- Change the navbar brand name

### Color Scheme
The red accent color (#ff0000) can be changed by updating:
- CSS custom properties in App.css
- Hover states throughout the stylesheet

## Development

### Available Scripts
```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

### Tech Stack
- **React 19.0.0**
- **Bootstrap 5.3.6**
- **React Router DOM 7.5.1**
- **particles.js 2.0.0**
- **Font Awesome 6.0.0**

## File Structure
```
frontend/
├── public/
│   └── index.html          # HTML template with particles.js CDN
├── src/
│   ├── App.js              # Main React component with all pages
│   ├── App.css             # Complete styling
│   ├── particles-config.js # Particles.js configuration
│   └── index.js            # React entry point
└── package.json            # Dependencies
```

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Touch-friendly interfaces

## Performance
- Optimized image loading
- Efficient particles rendering
- Responsive grid layouts
- Fast page transitions

---

**Ready to showcase your digital art!** 🎨

Replace the sample artworks with your own creations and customize the particles.js configuration to match your artistic vision.