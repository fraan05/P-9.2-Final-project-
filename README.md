# Francisco Alexandru Babei & Rodrigo Rico Gomez

# LuxeDrive - Premium Car Showcase Website

A modern, responsive web application showcasing luxury vehicles with an elegant user interface and interactive features. Built with React, TypeScript, and Tailwind CSS.

---

## 📋 Objectives

The primary goals of this project are:

- **Showcase Premium Vehicles**: Display a curated collection of luxury cars with detailed information
- **Provide User-Friendly Interface**: Create an intuitive navigation system for browsing and filtering vehicles
- **Enable Customer Engagement**: Allow users to view detailed specifications, features, and customer reviews
- **Demonstrate Modern Web Development**: Utilize cutting-edge technologies and best practices in React development
- **Deliver Exceptional UX**: Implement smooth animations and responsive design across all devices

---

## ✨ Features

### 1. **Home Page**
- Eye-catching hero section with animated car imagery
- Premium company statistics (vehicles delivered, experience, exclusive brands, customer satisfaction)
- Featured showcase of selected vehicles
- Call-to-action buttons linking to catalog and about pages
- Smooth animations with Framer Motion

### 2. **Vehicle Catalog**
- Display all luxury vehicles in a grid layout
- **Search Functionality**: Filter vehicles by brand and model
- **Category Filtering**: Filter by vehicle type (Sports, Luxury, Electric, SUV, Sedan)
- **Vehicle Cards**: Show key information with images and pricing
- **Interactive Modal**: Click on vehicles to view detailed specifications
- **Google Search Integration**: Quick access to search for vehicle deals online

### 3. **Vehicle Details Modal**
- Full vehicle specifications (brand, model, year, price)
- Detailed description and features list
- **Customer Reviews System**: View and submit reviews with ratings
- **Review Management**: Add new reviews with user ratings and comments

### 4. **About Page**
- Company mission and vision statement
- Founder information and background
- Core values highlighted (Quality Certification, Elite Experience, Pure Passion)
- Professional imagery and engaging copy
- Brand storytelling with animations

### 5. **Contact Page**
- Contact information (address, phone, email)
- Interactive contact form
- Map preview with link to interactive maps
- Location and accessibility information
- Form validation and success feedback

### 6. **Navigation & Layout**
- Fixed floating navigation bar with glass morphism effect
- Responsive design (desktop and mobile menus)
- Active route highlighting
- Smooth transitions between pages

---

## 🛠️ Technologies Used

### Frontend Framework
- **React** (^19.2.0) - UI library for building interactive components
- **TypeScript** (~5.9.3) - Type-safe JavaScript for better code quality

### Styling & Design
- **Tailwind CSS** (^4.2.1) - Utility-first CSS framework
- **Tailwind CSS Vite Plugin** (^4.2.1) - Optimized integration with Vite

### Routing & Navigation
- **React Router DOM** (^7.13.1) - Client-side routing and navigation

### Animation & Effects
- **Framer Motion** (^12.34.3) - Smooth animations and transitions
- **Lucide React** (^0.575.0) - Beautiful SVG icons library

### Build Tools & Development
- **Vite** (^7.3.1) - Next-generation frontend tooling
- **Vite React Plugin** (^5.1.1) - Fast React HMR support
- **PostCSS** (^8.5.6) - CSS transformation
- **Autoprefixer** (^10.4.24) - Automatic vendor prefixes

### Code Quality
- **ESLint** (^9.39.1) - JavaScript linting
- **ESLint TypeScript Plugin** (^8.48.0) - TypeScript linting
- **ESLint React Hooks Plugin** (^7.0.1) - React hooks best practices

---

## 📦 Installation Instructions

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager

### Setup Steps

1. **Clone the repository** (if using git)
   ```bash
   git clone <repository-url>
   cd car-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. **Open in browser**
   - The application will be available at `http://localhost:5173`
   - Changes will hot-reload automatically

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

### Run Linting

```bash
npm run lint
```

Check for code quality issues and best practices.

---

## 🎯 Usage Guide

### Navigating the Application

1. **Home Page** (`/`)
   - Click "Ver Catálogo" to browse all vehicles
   - Click "Conócenos" to learn about the company
   - Explore company statistics

2. **Catalog Page** (`/catalog`)
   - Use the search bar to find vehicles by brand or model
   - Filter by category using the dropdown menu
   - Click on any vehicle card to see detailed information
   - Click the external link icon to search for deals on Google
   - View and leave reviews in the detailed modal

3. **About Page** (`/about`)
   - Learn about LuxeDrive's mission and values
   - Explore company achievements and experience

4. **Contact Page** (`/contact`)
   - Find location and contact information
   - Submit the contact form for inquiries
   - Access interactive map

### Key Interactions

- **Search**: Type brand or model name to filter vehicles in real-time
- **Category Filter**: Select from Sports, Luxury, Electric, SUV, or Sedan
- **View Details**: Click any vehicle card to open a detailed modal
- **Add Review**: Submit a review with a rating (1-5 stars) and comment
- **External Search**: Click the external link icon to search vehicle deals on Google
- **Mobile Menu**: On mobile devices, click the menu icon to toggle navigation
- **Smooth Scroll**: Most sections auto-scroll on navigation

---

## 🔌 API Documentation

This application uses a **mock API service** with simulated backend responses for development and demonstration purposes.

### Service Files
- **Location**: `src/services/api.ts`
- **Type Definitions**: `src/types/index.ts`

### Car Service (`carService`)

#### Get All Cars
```typescript
carService.getCars(): Promise<Car[]>
```
- **Returns**: Promise resolving to array of all available vehicles
- **Response Time**: ~800ms (simulated delay)
- **Example Response**:
  ```json
  [
    {
      "id": "1",
      "brand": "Porsche",
      "model": "911 Carrera",
      "year": 2024,
      "price": 120000,
      "description": "The definitive sports car...",
      "image": "https://...",
      "category": "Sports",
      "features": ["Flat-six engine", "RWD", "PDK Transmission"]
    }
  ]
  ```

#### Get Car by ID
```typescript
carService.getCarById(id: string): Promise<Car | undefined>
```
- **Parameters**: 
  - `id`: Unique vehicle identifier (string)
- **Returns**: Promise resolving to specific car or undefined if not found
- **Response Time**: ~400ms (simulated delay)

### Review Service (`reviewService`)

#### Get Reviews by Car ID
```typescript
reviewService.getReviewsByCarId(carId: string): Promise<Review[]>
```
- **Parameters**: 
  - `carId`: Vehicle identifier to fetch reviews for
- **Returns**: Promise resolving to array of reviews for specified vehicle

#### Add Review
```typescript
reviewService.addReview(review: Omit<Review, 'id' | 'date'>): Promise<Review>
```
- **Parameters**:
  - `review.carId`: Vehicle ID receiving the review
  - `review.userName`: Reviewer's name
  - `review.rating`: Rating (1-5)
  - `review.comment`: Review comment text
- **Returns**: Promise resolving to created review with auto-generated id and timestamp
- **Auto-Generated Fields**:
  - `id`: UUID-like identifier
  - `date`: ISO timestamp

### Data Models

#### Car Interface
```typescript
interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  description: string;
  image: string;
  category: 'Sedan' | 'SUV' | 'Sports' | 'Luxury' | 'Electric';
  features: string[];
}
```

#### Review Interface
```typescript
interface Review {
  id: string;
  carId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}
```

---

## 🏗️ Implementation Notes

### Project Structure

```
src/
├── components/
│   ├── CarModal.tsx          # Detailed vehicle view with reviews
│   └── Layout.tsx            # Navigation and page layout
├── pages/
│   ├── Home.tsx              # Landing page with hero section
│   ├── Catalog.tsx           # Vehicle listing and filtering
│   ├── About.tsx             # Company information
│   └── Contact.tsx           # Contact form and information
├── services/
│   └── api.ts                # Mock API with vehicle and review data
├── types/
│   └── index.ts              # TypeScript interfaces
├── App.tsx                   # Main app component with routing
├── App.css                   # Global styles
├── main.tsx                  # Entry point
└── index.css                 # Base styles
```

### Components Overview

#### **Layout Component** (`src/components/Layout.tsx`)
- **Purpose**: Wraps all pages with consistent navigation and header
- **Features**:
  - Fixed floating navbar with glass morphism
  - Responsive mobile/desktop navigation
  - Active route highlighting with animated underline
  - Brand logo with icon
  - Navigation links: Home, Catalog, About, Contact
- **Props**: 
  - `children`: Page content to render

#### **CarModal Component** (`src/components/CarModal.tsx`)
- **Purpose**: Displays detailed vehicle information in a modal
- **Features**:
  - Large vehicle image
  - Technical specifications
  - Price and features list
  - Customer reviews section
  - Add review form with validation
  - Loading and submission states
- **Props**:
  - `car`: Selected Car object to display (or null)
  - `onClose`: Callback function to close modal

### Routes Overview

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | `Home.tsx` | Landing page with hero section and featured vehicles |
| `/catalog` | `Catalog.tsx` | Browse all vehicles with search and filter |
| `/about` | `About.tsx` | Company information and values |
| `/contact` | `Contact.tsx` | Contact form and location information |

### Key Features Implementation

#### **Search & Filter (Catalog Page)**
- Uses React hooks (`useState`, `useEffect`) for state management
- Real-time filtering on brand and model names
- Category filtering with dropdown select
- Combined filters work together (AND logic)
- Responsive grid layout for vehicle cards

#### **Reviews System (CarModal)**
- Stores reviews in local state (in-memory)
- Reviews persist during session
- Form validation for required fields
- Star rating selection (1-5 stars)
- Timestamps and user identification
- Review list with newest first

#### **Animations**
- Uses Framer Motion for smooth transitions
- Entry animations on page load
- Hover effects on interactive elements
- Smooth navigation transitions
- Loading spinner on data fetch
- Modal entrance/exit animations

#### **Responsive Design**
- Mobile-first approach with Tailwind CSS
- Breakpoints: mobile, tablet (md), desktop (lg), large (xl)
- Flexible grid layouts
- Touch-friendly UI on mobile
- Collapsible navigation menu on mobile

### Styling Architecture

- **Tailwind CSS** for utility-first styling
- **Custom CSS** for complex animations and effects
- **Glass Morphism** effect on navigation bar
- **Gradient Text** effect on headings
- **Custom Colors**: Primary, Secondary (blue), Accent, Surface, Border
- **Responsive Typography**: Scale from mobile to desktop

### Performance Optimizations

- **Lazy Component Loading**: Comments suggest lazy loading potential
- **Simulated API Delays**: Realistic network simulation for testing
- **Image Optimization**: Using Unsplash CDN for images
- **CSS Purging**: Tailwind automatically removes unused styles in production
- **Code Splitting**: Vite handles automatic code splitting

### Browser Compatibility

- Modern browsers supporting ES2020+
- CSS Grid and Flexbox for layout
- CSS Backdrop Filter for glass morphism
- Framer Motion requires React 16.8+


