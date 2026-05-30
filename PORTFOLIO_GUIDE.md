# Waisalam Portfolio - Setup Guide

## Overview
Your beautiful, modern dark-themed portfolio is ready! It includes Home, About, Work, and Contact pages with smooth animations and a professional design.

## Key Features

### 🎨 Design System
- **Dark Theme**: Professional dark background with purple/blue accent colors
- **Modern Animations**: Fade-in, slide-in, and glow animations throughout
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop
- **Color Palette**: Dark navy background with bright blue primary color and smooth gradients

### 📄 Pages

#### Home Page (`/`)
- Animated hero section with typing effect
- Skills showcase in a modern card layout
- "What I Do" expertise cards
- Call-to-action sections
- Fully editable content

#### About Page (`/about`)
- Personal bio sections
- Experience timeline with visual indicators
- Skills organized by category (Frontend, Backend, Databases, AI & ML, Tools)
- Professional summary

#### Work Page (`/work`)
- Project showcase in a 3-column grid
- Project cards with:
  - **Media Placeholder**: Easy space to add your project images or videos
  - **Description**: Each project has a brief description
  - **Tags**: Technology stack for each project
  - **Hover Effects**: Modern interactive hover states
- 6 sample projects ready to customize
- "More Projects Coming Soon" section

#### Contact Page (`/contact`)
- Contact form with validation
- Social media links (GitHub, LinkedIn, Twitter, Email)
- Contact information section
- Success message on form submission

## How to Customize

### 1. **Edit Project Information**

#### Update Your Name and Links
File: `/components/navigation.tsx`
```tsx
<a href={`https://github.com/waislam`} // Update to your GitHub profile
```

File: `/app/contact/page.tsx`
```tsx
const socialLinks = [
  {
    url: 'https://github.com/waislam', // Update to your GitHub
    // ... update LinkedIn, Twitter URLs
  }
]
```

### 2. **Add Project Images/Videos**

In `/app/work/page.tsx`, replace the media placeholder:

**Before:**
```tsx
media: (
  <div className="w-full h-80 bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center rounded-lg">
    <div className="text-center">
      <div className="text-foreground/40 mb-2">Image or Video</div>
    </div>
  </div>
),
```

**After:**
```tsx
media: (
  <img 
    src="/images/your-project.png" 
    alt="Project name"
    className="w-full h-80 object-cover rounded-lg group-hover:scale-105 transition-transform"
  />
),
// Or for video:
media: (
  <video 
    src="/videos/your-project.mp4"
    className="w-full h-80 object-cover rounded-lg group-hover:scale-105 transition-transform"
    autoPlay
    muted
    loop
  />
),
```

### 3. **Add More Projects**

In `/app/work/page.tsx`, add to the `projects` array:

```tsx
{
  id: 7,
  name: 'Your Project Name',
  description: 'Brief description of what your project does.',
  tags: ['Tech1', 'Tech2', 'Tech3'],
  link: 'https://your-project-link.com',
  media: (
    <img 
      src="/images/project-7.png" 
      alt="Your project"
      className="w-full h-80 object-cover rounded-lg group-hover:scale-105 transition-transform"
    />
  ),
},
```

### 4. **Update Skills**

#### Home Page Skills (`/app/page.tsx`)
```tsx
const skills = [
  'Next.js',
  'React',
  'Python',
  // Add your skills here
]
```

#### About Page Skills (`/app/about/page.tsx`)
```tsx
const skills = {
  'Frontend': ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  'Backend': ['Node.js', 'Prisma', 'Python', 'SQL'],
  // Update skill categories and items
}
```

### 5. **Update Contact Information**

In `/app/contact/page.tsx`:
```tsx
<a href="mailto:hello@waisalam.com" // Update email
```

## Project Structure

```
/app
  /about
    page.tsx         # About page
  /work
    page.tsx         # Projects page
  /contact
    page.tsx         # Contact page
  layout.tsx         # Root layout
  page.tsx           # Home page
  globals.css        # Theme and animations

/components
  navigation.tsx     # Navigation bar (used on all pages)
```

## Customization Tips

### Change Colors
Edit `/app/globals.css` to modify the color scheme:
```css
:root {
  --primary: oklch(0.6 0.2 262);      /* Change hue (262 = blue) */
  --accent: oklch(0.7 0.2 262);
  --background: oklch(0.08 0 0);      /* Darker = higher number */
  --foreground: oklch(0.95 0 0);
}
```

### Modify Animations
Add or update keyframe animations in `/app/globals.css`:
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Update Form Handling
In `/app/contact/page.tsx`, the `handleSubmit` function currently shows a success message. To send emails:
1. Integrate with Vercel's Email service or SendGrid
2. Replace the placeholder logic with your email service

## Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy on every push

### Environment Variables
No environment variables needed for the basic portfolio. If you add email functionality later, you'll need to set those up in Vercel's dashboard.

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Sizes & Performance
- **Optimized for Core Web Vitals**
- **Responsive images** (use next/image for better performance)
- **CSS animations** are GPU-accelerated
- **No external animation libraries** (pure CSS)

## Need Help?

To further customize:
1. Edit the relevant `.tsx` file
2. Update content, links, and styling as needed
3. Add your project images to `/public/images/`
4. The site automatically rebuilds when you save

## Next Steps

1. Replace your name and URLs throughout (search for "waisalam" and "waislam")
2. Add project images to `/public/images/` folder
3. Update project information in `/app/work/page.tsx`
4. Customize about section in `/app/about/page.tsx`
5. Update contact information in `/app/contact/page.tsx`
6. Deploy to Vercel

Good luck! Your portfolio is ready to impress! 🚀
