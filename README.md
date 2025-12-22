# St. Hithib Academy Website

A modern, elegant website for a Catholic secondary school featuring a floating pill navigation and carousel hero section with smooth animations.

## 🎨 Design Philosophy

- **Aesthetic**: Modern Classical Elegance meets Educational Trust
- **Color Scheme**: Blue & White (Catholic school colors) with gold accents
- **Typography**: 
  - Headings: Crimson Text (elegant serif)
  - Body: Montserrat (clean, modern sans-serif)
- **Animations**: Dignified, smooth transitions powered by Framer Motion
- **Catholic Elements**: Subtle cross motifs and light effects suggesting guidance and hope

## 📦 Installation & Setup

### 1. Install Required Dependencies

```bash
npm install framer-motion embla-carousel-react lucide-react clsx tailwind-merge
```

### 2. Project Structure

```
/app
  ├── globals.css          # Custom styles and fonts
  ├── layout.tsx           # Root layout
  ├── page.tsx             # Home page
  └── /fonts (optional)    # Custom font files

/components
  ├── /layout
  │   └── Navbar.tsx       # Floating pill navigation
  └── /sections
      └── HeroSection.tsx  # Carousel hero with animations

/lib
  └── utils.ts             # Utility functions (cn helper)

tailwind.config.ts         # Custom theme configuration
```

## 🚀 Features Implemented

### Navigation (Navbar.tsx)
- ✅ Floating pill-style navigation
- ✅ Centered on desktop, full-width on mobile
- ✅ Smooth scroll effects with backdrop blur
- ✅ Responsive mobile menu with smooth animations
- ✅ Search icon and "Apply Now" CTA
- ✅ Hover effects and active states

### Hero Section (HeroSection.tsx)
- ✅ Auto-playing carousel (6-second intervals)
- ✅ Smooth slide transitions with Framer Motion
- ✅ Multiple slides with unique content
- ✅ Text animations (staggered reveals)
- ✅ Dual CTAs (primary and secondary)
- ✅ Progress indicators with animation
- ✅ Manual navigation (arrows + dots)
- ✅ Animated wave clipper at bottom
- ✅ Subtle cross motif overlay
- ✅ Gradient backgrounds with overlay effects
- ✅ Fully responsive for all screen sizes

## 🎯 Key Components

### Navbar Features
- Logo with school initials
- Navigation links with hover effects
- Search functionality
- Mobile-responsive hamburger menu
- Glassmorphism effect

### Hero Carousel Features
- 3 slides showcasing different aspects
- Auto-rotation with manual controls
- Animated badge (enrollment status)
- Dual-color title styling (white + gold gradient)
- Primary and secondary CTAs
- Progress bar indicators
- Decorative Catholic elements

## 🎨 Color Palette

```css
Primary Blues:
- 50:  #eff6ff (lightest)
- 600: #2563eb (primary)
- 900: #1e3a8a (darkest)

Accent Gold:
- 400: #fbbf24
- 500: #f59e0b

Neutrals:
- 50:  #f9fafb (background)
- 900: #111827 (text)
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1280px

## 🔧 Customization Guide

### Adding New Hero Slides

Edit `/components/sections/HeroSection.tsx`:

```typescript
const heroSlides: HeroSlide[] = [
  {
    id: 4, // Add new slide
    title: "Your Title",
    subtitle: "Your Subtitle",
    description: "Your description...",
    image: "/your-image.jpg",
    primaryCTA: { text: "CTA Text", href: "/link" },
    secondaryCTA: { text: "Secondary", href: "/link" },
  },
];
```

### Updating Navigation Links

Edit `/components/layout/Navbar.tsx`:

```typescript
const navItems = [
  { label: "Your Link", href: "/your-path" },
  // Add more items...
];
```

### Changing Colors

Edit `tailwind.config.ts` and `app/globals.css` to update the color scheme.

## 🎬 Animation Details

- **Page Load**: Staggered reveals with Framer Motion
- **Carousel**: 30ms smooth transitions
- **Nav Scroll**: Dynamic blur and shadow effects
- **Hover States**: Scale transforms and color transitions
- **Wave Clipper**: SVG path animation on load

## 📋 Next Steps

### Recommended Sections to Build:
1. **About Section** - Mission, vision, values
2. **Programs Section** - Academic offerings
3. **Testimonials** - Student/parent reviews
4. **Faculty Section** - Meet the teachers
5. **Admissions** - Application process
6. **Contact Section** - Form and details
7. **Footer** - Links, social media, copyright

### Additional Features to Consider:
- Image gallery/lightbox
- Events calendar
- News/blog section
- Virtual tour integration
- Alumni section
- Sports/activities showcase

## 🛠️ Development Commands

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📝 Notes

- All images are placeholder paths (`/hero-1.jpg`, etc.)
- Replace with actual school images
- Ensure images are optimized (WebP format recommended)
- All components are fully typed with TypeScript
- Code is modular and easily maintainable

## 🤝 Best Practices Followed

✅ Clean, modular component structure
✅ TypeScript for type safety
✅ Responsive design for all devices
✅ Accessibility considerations
✅ Performance optimized animations
✅ Semantic HTML
✅ Consistent naming conventions
✅ Reusable utility functions

---

**Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion**