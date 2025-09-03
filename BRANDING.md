# OFFEO Brand Guidelines

*Design system inspired by premium product aesthetics and modern web design*

---

## 🎨 Color Palette

### Primary Colors
```css
/* Background */
--bg-primary: #FFFDF9;     /* Warm white background */
--text-primary: #111111;    /* Deep black text */

/* Accent Colors */
--accent-coral: #FFC4BC;    /* Soft coral/peach */
--accent-blue: #A6D8FF;     /* Light sky blue */
--accent-warm: #F5F1EA;     /* Warm beige/cream */
```

### Color Usage
- **Background**: Always use `#FFFDF9` for main backgrounds
- **Text**: Primary text should be `#111111` for maximum readability
- **Interactive Elements**: Black (`#000000`) for primary actions
- **Subtle Elements**: `#F5F1EA` for cards, secondary backgrounds
- **Gradients**: Combine coral and blue for premium effects

---

## ✏️ Typography

### Font Family
```css
font-family: 'Inter', sans-serif;
```

### Font Weights & Usage
- **Light (300)**: Subtle text, captions
- **Regular (400)**: Body text, descriptions
- **Medium (500)**: Navigation, secondary headings
- **Semi-Bold (600)**: Important text, labels
- **Bold (700)**: Primary headings, emphasis

### Typography Scale
```css
/* Headings */
--text-6xl: 3.75rem;    /* Hero titles */
--text-5xl: 3rem;       /* Main headings */
--text-2xl: 1.5rem;     /* Section titles */
--text-lg: 1.125rem;    /* Large text */

/* Body */
--text-base: 1rem;      /* Regular text */
--text-sm: 0.875rem;    /* Small text */
--text-xs: 0.75rem;     /* Captions */
```

### Typography Guidelines
- Headlines should use `font-medium` with `tracking-tight`
- Body text uses `text-lg` with `text-gray-600` for secondary content
- Line height: `leading-[1.1]` for headlines, default for body
- All text maintains excellent contrast ratios

---

## 🎯 Visual Effects

### Gradients
```css
/* Premium blur effect */
background: linear-gradient(to right, #FFC4BC, #A6D8FF);
opacity: 30%;
blur: 48px;

/* Subtle card backgrounds */
background: #F5F1EA;
```

### Shadows & Depth
```css
/* Card shadows */
box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Blur backgrounds */
backdrop-filter: blur(12px);
```

---

## 🔘 Interactive Elements

### Buttons

#### Primary Button
```css
background: #000000;
color: #FFFFFF;
padding: 12px 24px;
border-radius: 9999px; /* fully rounded */
font-weight: 500;
font-size: 0.875rem;
transition: all 0.2s;

/* Hover state */
background: rgba(0, 0, 0, 0.9);
```

#### Secondary Button
```css
background: #F5F1EA;
color: #000000;
padding: 12px 24px;
border-radius: 9999px;
font-weight: 500;
font-size: 0.875rem;
transition: all 0.2s;

/* Hover state */
background: #E5E7EB;
```

### Navigation
- Clean, minimal navigation with generous spacing
- Medium font weight (`font-medium`)
- Subtle hover transitions (`hover:text-gray-600`)

---

## 🖼️ Layout Principles

### Spacing Scale
```css
/* Consistent spacing using Tailwind scale */
--spacing-2: 0.5rem;    /* 8px */
--spacing-4: 1rem;      /* 16px */
--spacing-6: 1.5rem;    /* 24px */
--spacing-8: 2rem;      /* 32px */
--spacing-12: 3rem;     /* 48px */
--spacing-24: 6rem;     /* 96px */
```

### Container & Grid
- Max width: `max-w-6xl` (1152px) for main content
- Responsive grid: `grid md:grid-cols-2`
- Generous padding: `px-6 py-8` for sections

---

## 💫 Premium Elements

### Cards
```css
background: #F5F1EA;
border-radius: 1rem; /* 16px */
overflow: hidden;
box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

### Badges/Labels
```css
background: #000000;
color: #FFFFFF;
padding: 4px 12px;
font-size: 0.75rem;
border-radius: 9999px;
```

### Avatar Groups
```css
/* Overlapping avatars */
margin-left: -0.5rem;
border: 2px solid #FFFFFF;
border-radius: 50%;
width: 2rem;
height: 2rem;
```

---

## 🎭 Animation & Transitions

### Standard Transitions
```css
transition-property: all;
transition-duration: 0.2s;
transition-timing-function: ease-out;
```

### Hover Effects
- Buttons: Slight opacity change (`hover:bg-opacity-90`)
- Cards: Subtle scale (`hover:scale-[1.02]`)
- Links: Color transitions (`hover:text-gray-600`)

---

## 📐 Design Principles

### 1. **Premium Minimalism**
- Clean, uncluttered layouts
- Generous white space
- Focus on essential elements

### 2. **Warm Professionalism**
- Warm color palette with cream/beige tones
- Soft gradients and subtle effects
- Professional typography

### 3. **Subtle Sophistication**
- Gentle curves (rounded corners)
- Soft shadows and blurs
- Refined color combinations

### 4. **Accessibility First**
- High contrast ratios
- Clear hierarchy
- Touch-friendly interactive elements

---

## 🚀 Implementation Notes

### CSS Custom Properties
```css
:root {
  --bg-primary: #FFFDF9;
  --text-primary: #111111;
  --accent-coral: #FFC4BC;
  --accent-blue: #A6D8FF;
  --accent-warm: #F5F1EA;
  
  --font-family: 'Inter', sans-serif;
  --border-radius: 1rem;
  --shadow-premium: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
```

### Tailwind Configuration
- Import Inter font from Google Fonts
- Extend color palette with custom colors
- Use consistent spacing and sizing scales

---

*This brand guide ensures consistency across all OFFEO pages and components. Always refer to these guidelines when creating new sections or features.*