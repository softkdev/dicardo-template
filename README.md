# Dicardo - Modern Web Application

A modern, responsive web application built with HTML, SCSS, Bootstrap, and Gulp. This project follows best practices for front-end development with a clean, scalable architecture and efficient build system.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Bootstrap 5.3.2
- **Modern SCSS Architecture**: Organized with variables, mixins, and components
- **Gulp Build System**: Automated compilation, optimization, and live reload
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels
- **Performance Optimized**: Minified assets, lazy loading, and optimized images
- **Cross-browser Compatible**: Works on all modern browsers
- **SEO Optimized**: Meta tags, structured data, and semantic markup

## 📁 Project Structure

```
dicardo-test/
├── src/                          # Source files
│   ├── html/                     # HTML templates
│   │   ├── index.html           # Homepage
│   │   └── about.html           # About page
│   ├── scss/                    # SCSS source files
│   │   ├── main.scss            # Main SCSS entry point
│   │   ├── _variables.scss      # Design system variables
│   │   ├── _mixins.scss         # Reusable mixins
│   │   ├── _bootstrap-override.scss # Bootstrap customizations
│   │   ├── _responsive.scss     # Responsive utilities
│   │   ├── _utilities.scss      # Utility classes
│   │   └── components/           # Component styles
│   │       ├── _buttons.scss    # Button components
│   │       ├── _cards.scss      # Card components
│   │       ├── _hero.scss       # Hero sections
│   │       ├── _navigation.scss # Navigation components
│   │       ├── _footer.scss     # Footer components
│   │       └── _forms.scss      # Form components
│   ├── js/                      # JavaScript files
│   │   └── main.js              # Main JavaScript file
│   └── images/                  # Image assets
├── dist/                        # Compiled output
├── gulpfile.js                  # Gulp configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **SCSS**: Advanced CSS with variables, mixins, and nesting
- **Bootstrap 5.3.2**: Responsive framework and components
- **Gulp 4**: Task runner for build automation
- **JavaScript ES6+**: Modern JavaScript features
- **Bootstrap Icons**: Icon library for UI elements

## 📦 Dependencies

### Development Dependencies
- `gulp`: Task runner
- `gulp-sass`: SCSS compilation
- `gulp-autoprefixer`: CSS vendor prefixes
- `gulp-clean-css`: CSS minification
- `gulp-concat`: File concatenation
- `gulp-uglify`: JavaScript minification
- `gulp-imagemin`: Image optimization
- `gulp-browser-sync`: Live reload server
- `gulp-sourcemaps`: Source map generation
- `gulp-rename`: File renaming
- `gulp-clean`: File cleaning
- `sass`: SCSS compiler

### Production Dependencies
- `bootstrap`: CSS framework

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dicardo-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server with live reload
- `npm run build` - Build production assets
- `npm run watch` - Watch files for changes (development)

## 🏗️ Build System

The project uses Gulp for automated build processes:

### Development Tasks
- **SCSS Compilation**: Converts SCSS to CSS with source maps
- **JavaScript Processing**: Concatenates and processes JS files
- **Image Optimization**: Compresses images for web
- **Live Reload**: Automatically refreshes browser on file changes
- **Browser Sync**: Synchronizes browser behavior across devices

### Production Tasks
- **CSS Minification**: Minifies CSS for production
- **JavaScript Minification**: Minifies JS files
- **Image Optimization**: Advanced image compression
- **Asset Concatenation**: Combines files for better performance

## 🎨 Design System

### Color Palette
- **Primary**: #007bff (Blue)
- **Secondary**: #6c757d (Gray)
- **Success**: #28a745 (Green)
- **Warning**: #ffc107 (Yellow)
- **Danger**: #dc3545 (Red)
- **Info**: #17a2b8 (Cyan)

### Typography
- **Font Family**: Inter, system fonts
- **Font Sizes**: 12px to 60px (responsive)
- **Font Weights**: 300 to 800
- **Line Heights**: 1.25 to 2.0

### Spacing Scale
- **Base Unit**: 4px (0.25rem)
- **Scale**: 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32
- **Responsive**: Scales with screen size

## 📱 Responsive Breakpoints

- **xs**: 0px (Mobile)
- **sm**: 576px (Large Mobile)
- **md**: 768px (Tablet)
- **lg**: 992px (Desktop)
- **xl**: 1200px (Large Desktop)
- **xxl**: 1400px (Extra Large Desktop)

## 🧩 Components

### Navigation
- Fixed header with scroll effects
- Mobile-responsive hamburger menu
- Dropdown navigation
- Active link highlighting

### Hero Sections
- Full-screen and half-screen variants
- Background image/video support
- Call-to-action buttons
- Feature highlights
- Statistics display

### Cards
- Multiple variants (basic, elevated, outlined, filled)
- Product, blog, testimonial, and stats cards
- Responsive grid layouts
- Hover effects and animations

### Forms
- Custom form components
- Real-time validation
- Error handling
- Accessibility features
- Multiple input types

### Buttons
- Primary, secondary, outline, and ghost variants
- Multiple sizes (sm, md, lg, xl)
- Loading states
- Icon support
- Button groups

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant
- **Screen Reader Support**: Skip links and descriptions

## 🚀 Performance Optimizations

- **Lazy Loading**: Images load as needed
- **Minification**: CSS and JS minified for production
- **Image Optimization**: Compressed images
- **Critical CSS**: Above-the-fold styles prioritized
- **Source Maps**: Easy debugging in development
- **Caching**: Optimized for browser caching

## 🔧 Customization

### Adding New Components

1. Create SCSS file in `src/scss/components/`
2. Import in `main.scss`
3. Add HTML structure
4. Test across breakpoints

### Modifying Colors

Update variables in `src/scss/_variables.scss`:
```scss
$primary-color: #your-color;
$secondary-color: #your-color;
```

### Adding New Pages

1. Create HTML file in `src/html/`
2. Follow existing structure
3. Update navigation links
4. Test accessibility

## 📊 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Safari**: 14+
- **Chrome Mobile**: 90+

## 🐛 Troubleshooting

### Common Issues

1. **SCSS not compiling**
   - Check Gulp is running
   - Verify file paths in imports
   - Check for syntax errors

2. **Images not loading**
   - Verify image paths
   - Check file permissions
   - Ensure images are in `src/images/`

3. **JavaScript errors**
   - Check browser console
   - Verify file paths
   - Check for syntax errors

### Development Tips

- Use browser dev tools for debugging
- Check console for errors
- Validate HTML markup
- Test on multiple devices
- Use accessibility tools

## 📝 Code Style

### HTML
- Use semantic elements
- Include ARIA attributes
- Maintain proper indentation
- Add comments for complex sections

### SCSS
- Use BEM naming convention
- Organize imports logically
- Comment complex styles
- Use variables for consistency

### JavaScript
- Use ES6+ features
- Follow naming conventions
- Add error handling
- Comment complex logic

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Check the documentation
- Review the code comments

## 🔄 Updates

### Version 1.0.0
- Initial release
- Complete build system
- Responsive design
- Accessibility features
- Performance optimizations

---

**Built with ❤️ by the Dicardo Team**
