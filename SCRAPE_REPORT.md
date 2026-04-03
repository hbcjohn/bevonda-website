# Bevonda Website Scrape Report

**Scraped:** April 3, 2026  
**Source:** https://www.drinkbevonda.com/  
**Platform:** Shopify (Theme: Shapes v2.2.5)

---

## 🗺️ Complete Site Map

### Main Pages
| URL | Title | Type |
|-----|-------|------|
| `/` | Bevonda | Homepage |
| `/collections/soda` | Craft Soda – Bevonda | Collection |
| `/products/blood-orange` | Blood Orange – Bevonda | Product |
| `/products/ginger-beer` | Ginger Beer – Bevonda | Product |
| `/products/shirley-temple` | Shirley Temple – Bevonda | Product |
| `/products/test` | Root Beer – Bevonda | Product |
| `/pages/branding` | Branding – Bevonda | Page |
| `/pages/contact` | Contact – Bevonda | Page |
| `/cart` | Your Shopping Cart – Bevonda | Cart |
| `/search` | Search – Bevonda | Search |

### Navigation Structure
```
Header Navigation:
├── Home (/)
├── Soda (Dropdown)
│   ├── Ginger Beer (/products/ginger-beer)
│   ├── Shirley Temple (/products/shirley-temple)
│   └── Root Beer (/products/test)
├── Sparkling Fruit (/products/blood-orange)
├── Contact (/pages/contact)
└── Search (/search)

Footer Navigation:
├── Column 1
│   ├── Home (/)
│   ├── Soda (/collections/soda)
│   ├── Sparkling Fruit (/products/blood-orange)
│   └── Contact (/pages/contact)
├── Column 2
│   ├── Search (/search)
│   └── Branding (/pages/branding)
└── Social Links
    ├── Facebook (https://facebook.com/DrinkBevonda)
    ├── Twitter (https://twitter.com/DrinkBevonda)
    └── Instagram (https://www.instagram.com/drinkbevonda)
```

---

## 🎨 Color Palette

### Primary Color Scheme (data-color-scheme="primary")
| Variable | RGB Value | Hex | Usage |
|----------|-----------|-----|-------|
| `--color-primary-text` | `255, 255, 255` | `#FFFFFF` | Text color |
| `--color-primary-background` | `77, 45, 31` | `#4D2D1F` | Background (brown) |
| `--color-primary-accent-1` | `159, 219, 233` | `#9FDBE9` | Accent (light blue) |
| `--color-primary-accent-2` | `77, 45, 31` | `#4D2D1F` | Accent (brown) |
| `--color-primary-card` | `255, 255, 255` | `#FFFFFF` | Card background |
| `--color-primary-gradient` | `linear-gradient(39deg, rgba(159, 216, 233, 1) 1%, rgba(37, 60, 151, 1) 96%)` | Blue gradient | Gradient backgrounds |

### Secondary Color Scheme (data-color-scheme="secondary")
| Variable | RGB Value | Hex | Usage |
|----------|-----------|-----|-------|
| `--color-secondary-text` | `255, 131, 0` | `#FF8300` | Text (orange) |
| `--color-secondary-background` | `168, 0, 81` | `#A80051` | Background (pink/magenta) |
| `--color-secondary-accent-1` | `255, 79, 97` | `#FF4F61` | Accent (red-pink) |
| `--color-secondary-accent-2` | `255, 255, 255` | `#FFFFFF` | Accent (white) |
| `--color-secondary-card` | `17, 26, 55` | `#111A37` | Card (dark blue) |
| `--color-secondary-gradient` | `linear-gradient(127deg, rgba(255, 131, 0, 1) 11%, rgba(168, 0, 81, 1) 81%)` | Orange-pink gradient | Gradient backgrounds |

### Tertiary Color Scheme (data-color-scheme="tertiary")
| Variable | RGB Value | Hex | Usage |
|----------|-----------|-----|-------|
| `--color-tertiary-text` | `255, 255, 255` | `#FFFFFF` | Text |
| `--color-tertiary-background` | `231, 35, 119` | `#E72377` | Background (pink) |
| `--color-tertiary-accent-1` | `231, 35, 119` | `#E72377` | Accent |
| `--color-tertiary-accent-2` | `243, 181, 205` | `#F3B5CD` | Accent (light pink) |
| `--color-tertiary-card` | `255, 131, 0` | `#FF8300` | Card (orange) |

### Quaternary Color Scheme
| Variable | RGB Value | Hex |
|----------|-----------|-----|
| `--color-quaternary-background` | `245, 242, 20` | `#F5F214` (yellow) |
| `--color-quaternary-accent-2` | `33, 110, 17` | `#216E11` (green) |

---

## 🔤 Fonts

### Primary Font: Jost
| Weight | Style | WOFF2 URL |
|--------|-------|-----------|
| 500 | Normal | `//www.drinkbevonda.com/cdn/fonts/jost/jost_n5.7c8497861ffd15f4e1284cd221f14658b0e95d61.woff2` |
| 700 | Normal | `//www.drinkbevonda.com/cdn/fonts/jost/jost_n7.921dc18c13fa0b0c94c5e2517ffe06139c3615a3.woff2` |
| 500 | Italic | `//www.drinkbevonda.com/cdn/fonts/jost/jost_i5.a6c7dbde35f2b89f8461eacda9350127566e5d51.woff2` |
| 700 | Italic | `//www.drinkbevonda.com/cdn/fonts/jost/jost_i7.d8201b854e41e19d7ed9b1a31fe4fe71deea6d3f.woff2` |

### Font Stack Configuration
```css
--heading-font-stack: Jost, sans-serif;
--heading-font-weight: 700;
--heading-font-style: normal;
--heading-letterspacing: 0.0;
--heading-capitalize: uppercase;

--main-font-stack: Jost, sans-serif;
--main-font-weight: 500;
--main-font-style: normal;
```

---

## 🖼️ Image Assets Downloaded

All images saved to `/home/walt/.openclaw/workspace/projects/bevonda/images/`

| Filename | Original URL | Dimensions | Usage |
|----------|--------------|------------|-------|
| `Bevonda4Can_transparent_web.png` | CDN | 2000x1373 | Hero image (4-pack) |
| `BevondaGingerBeer1.jpg` | CDN | 2000x2000 | Product single |
| `BevondaGingerBeer6Pack.jpg` | CDN | 2000x2000 | Product hover |
| `BevondaShirleyTemple1.jpg` | CDN | 2000x2000 | Product single |
| `BevondaShirleyTemple6Pack2.jpg` | CDN | 2000x2000 | Product hover |
| `BevondaRootBeer1.jpg` | CDN | 2000x2000 | Product single |
| `BevondaRootBeer6Pack.jpg` | CDN | 2000x2000 | Product hover |
| `BevondaBloodOrange1.jpg` | CDN | 2000x2000 | Product single |
| `BevondaBloodOrange6Pack.jpg` | CDN | 2000x2000 | Product hover |
| `BevondaLogo.png` | CDN | 800x300 | Site logo |
| `WhiteCircleSmall.png` | CDN | 120x120 | Decorative sticker |
| `BrownLargeCircle.png` | CDN | 120x120 | Decorative sticker |
| `BrownWhiteSparkle.png` | CDN | 120x120 | Decorative sticker |
| `PinkWhiteSparkle.png` | CDN | 120x120 | Decorative sticker |
| `OrangeWhiteCircles.png` | CDN | 120x120 | Decorative sticker |
| `favicon.jpg` | CDN | 32x32 | Favicon |

---

## 📦 Product Data

### 1. Ginger Beer
- **Handle:** `ginger-beer`
- **Price:** $6.99
- **Description:** A spicy handcrafted Ginger Beer with a satisfying kick. Perfect to Enjoy with Friends!
- **Tags:** Gluten Free, Caffeine Free
- **Ingredients:** PURIFIED WATER, PURE CANE SUGAR, NATURAL FLAVORING, CITRIC ACID, SODIUM BENZOATE, AND POTASSIUM SORBATE (TO PRESERVE FRESHNESS)
- **Nutrition (per 12oz):** 32g Carbs, 26g Sugars (22g Added), 15mg Sodium, 0g Fat

### 2. Shirley Temple
- **Handle:** `shirley-temple`
- **Price:** $6.99
- **Description:** A classically handcrafted soda made with Pure Cane Sugar bursting with bold cherry and lemon-lime flavor.
- **Tags:** Gluten Free, Caffeine Free
- **Ingredients:** PURIFIED WATER, PURE CANE SUGAR, NATURAL FLAVORING, CITRIC ACID, SODIUM BENZOATE, AND POTASSIUM SORBATE (TO PRESERVE FRESHNESS)
- **Nutrition (per 12oz):** 51g Carbs, 50g Sugars (50g Added), 20mg Sodium, 0g Fat
- **Special:** Includes Black Forest Cake recipe

### 3. Root Beer
- **Handle:** `test`
- **Price:** $6.99
- **Description:** A creamy handcrafted Root Beer made with Pure Cane Sugar. Perfect to Enjoy with Friends!
- **Tags:** Gluten Free, Caffeine Free
- **Ingredients:** PURIFIED WATER, PURE CANE SUGAR, NATURAL FLAVORING, CITRIC ACID, SODIUM BENZOATE, AND POTASSIUM SORBATE (TO PRESERVE FRESHNESS)
- **Nutrition (per 12oz):** 35g Carbs, 35g Sugars (35g Added), 15mg Sodium, 0g Fat
- **Special:** Includes Root Beer Tiramisu recipe

### 4. Blood Orange
- **Handle:** `blood-orange`
- **Price:** $6.99
- **Description:** This sparkling fruit beverage is sweet and refreshing with the bold flavor of real blood orange.
- **Tags:** Gluten Free
- **Ingredients:** PURIFIED WATER, BLOOD ORANGE FRUIT PUREE, PURE CANE SUGAR, NATURAL FLAVORING, CITRIC ACID, SODIUM BENZOATE, AND POTASSIUM SORBATE (TO PRESERVE FRESHNESS)
- **Nutrition (per 12oz):** 32g Carbs, 26g Sugars (22g Added), 15mg Sodium, 0g Fat
- **Special:** Includes Blood Orange Crush Cake recipe

---

## 🧭 Navigation Structure

### Header
- **Logo:** Centered, links to home (max-width: 260px)
- **Left Navigation:** Menu button (mobile), Full nav (desktop)
- **Right Navigation:** Search, Cart (0)
- **Style:** Absolute positioned, transparent background, becomes solid on scroll

### Mobile Menu
- Slide-out drawer from left
- Full height with search form
- Navigation links with staggered animation delays

### Desktop Navigation
- Horizontal menu with dropdown for "Soda"
- Dropdown shows product images in grid
- Hover effects with accent color backgrounds

### Footer
- Two-column link layout
- Social media icons (Facebook, Twitter, Instagram)
- Payment icons (PayPal, Venmo) - hidden via CSS
- Copyright notice with Shopify attribution

---

## ✨ Special Features & Functionality

### 1. Parallax Effects
- Multiple "sticker" elements with parallax scrolling
- Rotating decorative elements (circles, sparkles)
- Shape dividers with SVG wave patterns

### 2. Product Slider
- Splide.js carousel for product showcase
- Auto-scrolling with pause on hover
- Center-focused sliding with loop
- Custom arrow navigation

### 3. Interactive Elements
- Predictive search with AJAX
- Cart count updates via Alpine.js
- Modal drawers (left/right) for mobile nav
- Header search overlay

### 4. Visual Effects
- Gradient backgrounds per color scheme
- Shape dividers (SVG waves) between sections
- Push buttons with 3D shadow effects
- Hover image swaps on products
- Media drop shadows

### 5. Animations
- Sticker rotation (constant or scroll-based)
- Fade-in on scroll with parallax
- Menu dropdown transitions
- Search overlay transitions

### 6. Accessibility
- Skip-to-content link
- ARIA labels on interactive elements
- Focus trapping in modals
- Screen reader announcements

---

## 🛠️ Technical Stack

- **Platform:** Shopify
- **Theme:** Shapes (v2.2.5, ID: 163386130709)
- **JavaScript Framework:** Alpine.js
- **Carousel:** Splide.js
- **CSS Framework:** Tailwind CSS (utility classes)
- **Fonts:** Shopify CDN (Jost)
- **Analytics:** Shopify Trekkie, Web Pixels Manager

---

## 📐 Design Specifications

### Layout
- **Max site width:** 1820px
- **Section padding:** 2rem vertical (4rem desktop)
- **Grid gap:** 1.25rem (2.5rem desktop)
- **Header height:** 60px

### Border Radius
- **Buttons:** 0.5rem
- **Cards:** 0.375rem
- **Media:** 0.375rem
- **Inputs:** 0.5rem

### Shadows & Effects
- **Card drop shadow:** 12px
- **Media drop shadow:** 6px
- **Button drop shadow:** 6px
- **Heading shadow spread:** 6px

### Button Styles
- **Border width:** 2px
- **Text transform:** Uppercase
- **Shadow:** Gradient-based
- **Hover effect:** Translate with shadow adjustment

---

## 🔗 External Resources

### Media Kit
- **URL:** https://drive.google.com/file/d/1wJcD_ko_Rg7IULOxowCXso9QFUsIPrC_/view?usp=drive_link
- **Updated:** 7/28/25

### Social Media
- Facebook: https://facebook.com/DrinkBevonda
- Twitter: https://twitter.com/DrinkBevonda
- Instagram: https://www.instagram.com/drinkbevonda

---

*Report generated by Bevonda Site Scraper*
