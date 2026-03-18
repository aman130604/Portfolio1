# Portfolio Website Setup Guide

## ✨ Features Implemented

### 1. **Smooth Scrolling Navigation**
- Fixed navigation bar with smooth scroll behavior
- Active section highlighting
- Gradient effects on hover

### 2. **Hero Section with Profile Image**
- Beautiful animated hero section
- Placeholder for your profile image (see below how to add yours)
- Call-to-action buttons with smooth animations
- Social media links (GitHub, LinkedIn, Email)

### 3. **Download CV Button**
- One-click CV download functionality
- CV text file generated with all your information from your resume
- Button located in navbar and accessible from any section

### 4. **Smooth Animations**
- Fade-in animations on scroll
- Floating effects on profile image
- Gradient background animations
- Hover effects on all interactive elements
- Slide-in animations for sections

### 5. **Fully Responsive Design**
- Mobile-friendly layout
- Tablet optimized views
- Desktop experience

## 📸 How to Add Your Profile Image

### Option 1: Using a Local Image File
1. Place your profile image in `src/assets/` folder
2. Name it `profile.jpeg` or `profile.png`
3. Update the App.jsx file:

Find this section in App.jsx (around line 70):
```jsx
<div className="profile-image-placeholder">
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="35" r="20" fill="#4a69ff"/>
    <path d="M20 80 Q20 60 50 60 Q80 60 80 80" fill="#4a69ff"/>
  </svg>
  <p className="image-text">Add Your Photo</p>
</div>
```

Replace it with:
```jsx
<img src={require('./assets/profile.jpeg')} alt="Aman Verma" className="profile-image" />
```

Or better yet, import at the top:
```jsx
import profileImage from './assets/profile.jpeg'
```

Then use:
```jsx
<img src={profileImage} alt="Aman Verma" className="profile-image" />
```

### Option 2: Using an Online Image URL
```jsx
<img src="https://your-image-url.com/profile.jpg" alt="Aman Verma" className="profile-image" />
```

Add this CSS to App.css for the profile image:
```css
.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 40px rgba(74, 105, 255, 0.3);
  animation: float 3s ease-in-out infinite;
}
```

## 🚀 Running the Project

### First-time Setup:
```bash
cd /Users/amanverma/Desktop/Portfolio/Portfolio\ Web
npm install
npm run dev
```

The website will start at `http://localhost:5173`

### For Production Build:
```bash
npm run build
```

## 📄 CV Download

The CV download is already implemented! Click the "Download CV" button in the navbar to download your CV as a text file. The content includes:
- Personal information
- Skills
- Projects
- Education
- Certifications
- Achievements

## 🎨 Customization Tips

### Colors
Edit the color variables in App.css `:root` section:
```css
:root {
  --primary-color: #4a69ff;
  --secondary-color: #ff6b6b;
  --text-dark: #1a1a2e;
  --text-light: #f5f5f5;
  --bg-dark: #0f0f23;
  --bg-light: #f8f9ff;
  --accent: #ffd700;
}
```

### Social Links
Update your GitHub and LinkedIn URLs in App.jsx:
- Line ~85: GitHub link
- Line ~86: LinkedIn link
- Line ~87: Email link

### Project Links
Each project card has a link pointing to github.com/aman130604. Update these to your actual project URLs.

## 📱 Sections Included

1. **Hero** - Introduction with call-to-action
2. **About** - Personal bio and contact information
3. **Skills** - Programming languages, frameworks, tools
4. **Projects** - Featured projects with descriptions
5. **Education** - Degree, schools, GPA
6. **Achievements** - Notable accomplishments
7. **Footer** - Quick links and copyright

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 💡 Additional Features You Can Add

- Contact form using Formspree or EmailJS
- Blog section with markdown support
- Dark mode toggle
- More project case studies
- Testimonials carousel
- PDF CV instead of text file

## 🤝 Need Help?

All the content from your resume has been integrated into the portfolio. You can:
1. Edit App.jsx to update text content
2. Update App.css for styling changes
3. Modify nav items in the navbar section
4. Add new sections by duplicating existing section components

Enjoy your new portfolio! 🎉
