# Real Estate Website - Technical Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Component Documentation](#component-documentation)
4. [Data Management](#data-management)
5. [Styling & UI](#styling--ui)
6. [Form Handling](#form-handling)
7. [Animations](#animations)
8. [Responsive Design](#responsive-design)
9. [Performance Optimization](#performance-optimization)
10. [Development Guidelines](#development-guidelines)
11. [Deployment](#deployment)
12. [Troubleshooting](#troubleshooting)

## Project Overview

The Real Estate Website is a modern, single-page application built with React 19 and Vite. It showcases properties, company information, customer testimonials, and provides a contact form for potential clients.

### Key Features
- **Property Showcase**: Interactive slider displaying featured properties
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Form Validation**: Client-side validation using React Hook Form
- **Contact Integration**: Web3Forms integration for form submissions
- **Smooth Animations**: Framer Motion for enhanced user experience
- **Toast Notifications**: User feedback for form submissions

## Architecture

### Project Structure
```
src/
├── components/          # React components
│   ├── Header.jsx      # Hero section with navigation
│   ├── Navbar.jsx      # Navigation component
│   ├── About.jsx       # Company information
│   ├── Projects.jsx    # Property showcase
│   ├── Testimonials.jsx # Customer reviews
│   ├── Contact.jsx     # Contact form
│   ├── Footer.jsx      # Footer section
│   └── Button.jsx      # Reusable button component
├── assets/             # Static assets and data
│   ├── assets.js       # Asset imports and data
│   └── *.png/jpg/svg   # Images and icons
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles
```

### Technology Stack
- **Frontend**: React 19 with JSX
- **Build Tool**: Vite 7.0
- **Styling**: Tailwind CSS 4.1
- **Animations**: Framer Motion 12.23
- **Forms**: React Hook Form 7.60
- **Contact**: Web3Forms 1.1
- **Notifications**: React Toastify 11.0
- **Linting**: ESLint 9.29

## Component Documentation

### App.jsx
**Purpose**: Main application component that orchestrates all sections

**Props**: None

**State**: None

**Key Features**:
- Renders all major sections
- Includes ToastContainer for notifications
- Handles overflow for smooth scrolling

```jsx
const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonials/>
      <Contact />
      <Footer />
    </div>
  )
}
```

### Header.jsx
**Purpose**: Hero section with background image and call-to-action buttons

**Props**: None

**State**: None

**Key Features**:
- Full-screen hero section with background image
- Animated content using Framer Motion
- Call-to-action buttons linking to Projects and Contact sections
- Responsive text sizing

**Animation Properties**:
- `initial`: Starts with opacity 0 and y offset 100
- `animate`: Animates to full opacity and original position
- `transition`: 1.5 second duration
- `viewport`: Triggers once when in view

### Projects.jsx
**Purpose**: Interactive property showcase with slider functionality

**Props**: None

**State**:
- `currentIndex`: Current slide position (number)
- `cardsToShow`: Number of cards to display based on screen size (number)

**Key Features**:
- Responsive card display (1 on mobile, 3 on tablet, all on desktop)
- Navigation arrows for manual control
- Smooth transitions between slides
- Hover effects on property cards

**Responsive Logic**:
```javascript
useEffect(() => {
  const updateCardsToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      setCardsToShow(projectsData.length); 
    } else if (screenWidth >= 768) {
      setCardsToShow(3); 
    } else {
      setCardsToShow(1); 
    }
  };
  // ... event listener setup
}, []);
```

**Navigation Functions**:
- `nextProject()`: Advances to next slide with circular navigation
- `prevProject()`: Goes to previous slide with circular navigation

### Contact.jsx
**Purpose**: Contact form with validation and submission handling

**Props**: None

**State**:
- `isSuccess`: Form submission success status (boolean)
- `result`: Form submission result message (string)

**Key Features**:
- Form validation using React Hook Form
- Email format validation
- Web3Forms integration for form submission
- Success/error toast notifications
- Form reset after successful submission

**Form Validation Rules**:
```javascript
{
  name: { required: 'Name is required' },
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Invalid email address',
    },
  },
  message: { required: 'Message is required' }
}
```

**Web3Forms Configuration**:
```javascript
const { submit } = useWeb3Forms({
  access_key: "968f0cd7-3749-43aa-b597-6eaac955a951",
  settings: {
    from_name: "Acme Inc",
    subject: "New Contact Message from your Website",
  },
  onSuccess: (msg, data) => {
    setIsSuccess(true);
    setResult("");
    toast.success(msg);
    reset();
  },
  onError: (msg, data) => {
    setIsSuccess(false);
    setResult("");
    toast.error(msg);
  },
});
```

### Navbar.jsx
**Purpose**: Navigation component with mobile menu functionality

**Props**: None

**State**: Mobile menu open/close state

**Key Features**:
- Responsive navigation
- Mobile hamburger menu
- Smooth transitions
- Logo display

### About.jsx
**Purpose**: Company information and values section

**Props**: None

**State**: None

**Key Features**:
- Company description
- Values and mission statement
- Animated content display

### Testimonials.jsx
**Purpose**: Customer reviews and testimonials display

**Props**: None

**State**: None

**Key Features**:
- Star ratings display
- Customer profile images
- Testimonial text
- Responsive layout

### Footer.jsx
**Purpose**: Footer section with links and company information

**Props**: None

**State**: None

**Key Features**:
- Company links
- Social media links
- Copyright information

### Button.jsx
**Purpose**: Reusable button component

**Props**:
- `label`: Button text (string)
- `type`: Button type (string, optional)
- `className`: Additional CSS classes (string, optional)

**Usage**:
```jsx
<Button 
  label="Send Message" 
  type="submit" 
  className="bg-blue-600 text-white px-6 py-3 rounded" 
/>
```

## Data Management

### Static Data Structure

**Projects Data** (`src/assets/assets.js`):
```javascript
export const projectsData = [
  {
    title: "Skyline Haven",
    price: "$2,50,000",
    location: "California",
    image: project_img_1
  },
  // ... more projects
];
```

**Testimonials Data**:
```javascript
export const testimonialsData = [
  {
    name: "Donald Jackman",
    title: "Marketing Manager",
    image: profile_img_1,
    alt: "Portrait of Donald Jackman",
    rating: 5,
    text: "Testimonial text..."
  },
  // ... more testimonials
];
```

### Asset Management
All images and icons are imported and exported through `src/assets/assets.js`:
```javascript
export const assets = {
  logo,
  logo_dark,
  cross_icon,
  menu_icon,
  star_icon,
  left_arrow,
  right_arrow,
  // ... more assets
};
```

## Styling & UI

### Tailwind CSS Configuration
The project uses Tailwind CSS 4 with the `@tailwindcss/vite` plugin for optimal performance.

**Key Design Patterns**:
- **Color Scheme**: Blue primary (#3B82F6), gray secondary (#6B7280)
- **Typography**: Responsive text sizing with Tailwind's responsive prefixes
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Shadows**: Subtle shadows for depth and elevation

**Responsive Breakpoints**:
- Mobile: `< 768px`
- Tablet: `768px - 1023px`
- Desktop: `≥ 1024px`

### Component Styling Examples

**Header Hero Section**:
```jsx
className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
```

**Project Cards**:
```jsx
className="w-full h-full mb-5 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
```

**Form Inputs**:
```jsx
className="border border-gray-300 rounded py-3 px-4"
```

## Form Handling

### React Hook Form Integration
The contact form uses React Hook Form for validation and state management:

**Form Setup**:
```javascript
const { register, reset, handleSubmit, formState: { errors } } = useForm();
```

**Field Registration**:
```javascript
{...register('name', { required: 'Name is required' })}
```

**Form Submission**:
```javascript
<form onSubmit={handleSubmit(submit)}>
```

### Validation Rules
- **Name**: Required field
- **Email**: Required field with email format validation
- **Message**: Required field

### Error Display
```javascript
{errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
```

## Animations

### Framer Motion Implementation
All animations use Framer Motion for smooth, performant animations.

**Common Animation Patterns**:

**Fade In with Slide**:
```javascript
<motion.div 
  initial={{ opacity: 0, x: -200 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.5 }}
  viewport={{ once: true }}
>
```

**Fade In with Y Offset**:
```javascript
<motion.div 
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5 }}
  viewport={{ once: true }}
>
```

**Hover Effects**:
```javascript
className="transition-transform duration-300 ease-in-out transform hover:scale-105"
```

### Animation Performance
- Uses `viewport={{ once: true }}` to prevent re-triggering
- Hardware-accelerated transforms for smooth performance
- Optimized transition durations (1.5s for major animations)

## Responsive Design

### Mobile-First Approach
The project follows a mobile-first design philosophy with progressive enhancement.

**Responsive Strategies**:

**Text Sizing**:
```jsx
className="text-5xl sm:text-6xl md:text-[82px]"
```

**Grid Layouts**:
```jsx
className="grid md:grid-cols-2 gap-4"
```

**Container Padding**:
```jsx
className="px-6 md:px-20 lg:px-32"
```

### Breakpoint System
- **sm**: 640px and up
- **md**: 768px and up
- **lg**: 1024px and up
- **xl**: 1280px and up

### Component Responsiveness

**Projects Slider**:
- Mobile: 1 card visible
- Tablet: 3 cards visible
- Desktop: All cards visible

**Navigation**:
- Mobile: Hamburger menu
- Desktop: Horizontal navigation

**Form Layout**:
- Mobile: Single column
- Desktop: Two-column grid

## Performance Optimization

### Vite Optimizations
- **Fast HMR**: Hot Module Replacement for development
- **Tree Shaking**: Unused code elimination
- **Code Splitting**: Automatic chunk splitting
- **Asset Optimization**: Image and asset optimization

### React Optimizations
- **Functional Components**: All components use functional syntax
- **Hooks**: Efficient state management with React hooks
- **Memoization**: Strategic use of useEffect for expensive operations

### Image Optimization
- **WebP Support**: Modern image formats
- **Responsive Images**: Different sizes for different screen sizes
- **Lazy Loading**: Images load as needed

### Bundle Optimization
- **Tree Shaking**: Unused dependencies removed
- **Code Splitting**: Automatic chunk generation
- **Minification**: Production builds are minified

## Development Guidelines

### Code Style
- **Functional Components**: Use functional components with hooks
- **JSX**: Use JSX for component structure
- **Props**: Use destructuring for props
- **State**: Use useState and useEffect hooks
- **Naming**: Use PascalCase for components, camelCase for variables

### Component Structure
```jsx
import React from 'react';
import { motion } from 'framer-motion';

const ComponentName = () => {
  // State and effects
  const [state, setState] = useState(initialValue);
  
  useEffect(() => {
    // Side effects
  }, [dependencies]);

  // Event handlers
  const handleEvent = () => {
    // Event logic
  };

  return (
    <motion.div>
      {/* JSX content */}
    </motion.div>
  );
};

export default ComponentName;
```

### File Organization
- **Components**: One component per file
- **Assets**: Centralized in assets folder
- **Data**: Static data in assets.js
- **Styles**: Tailwind classes in components

### Git Workflow
1. Create feature branch
2. Make changes
3. Test functionality
4. Commit with descriptive messages
5. Push and create pull request

## Deployment

### Build Process
```bash
npm run build
```

### Build Output
- **dist/**: Production-ready files
- **index.html**: Entry point
- **assets/**: Optimized assets

### Deployment Options

**Netlify**:
1. Connect repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

**Vercel**:
1. Import repository
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy

**GitHub Pages**:
1. Add to package.json:
```json
{
  "homepage": "https://username.github.io/repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Environment Variables
- **Web3Forms Key**: Configure in Contact component
- **API Endpoints**: Update for production

## Troubleshooting

### Common Issues

**Build Errors**:
- Check Node.js version compatibility
- Clear node_modules and reinstall
- Verify all dependencies are installed

**Form Submission Issues**:
- Verify Web3Forms access key
- Check network connectivity
- Validate form data

**Animation Performance**:
- Reduce animation complexity
- Use `will-change` CSS property
- Optimize image sizes

**Responsive Issues**:
- Test on actual devices
- Check Tailwind breakpoints
- Verify viewport meta tag

### Debug Tools
- **React Developer Tools**: Component inspection
- **Browser DevTools**: Network and performance
- **Lighthouse**: Performance auditing
- **ESLint**: Code quality checks

### Performance Monitoring
- **Bundle Analyzer**: Analyze bundle size
- **Lighthouse**: Performance metrics
- **Core Web Vitals**: User experience metrics

---

This documentation provides a comprehensive guide to understanding, developing, and maintaining the Real Estate website. For additional support, refer to the README.md file or create an issue in the repository. 