# Portfolio Website Documentation

## Project Structure

The portfolio website follows a simple and organized structure:

```
Portfolio Website/
├── index.html          # Main HTML file containing all sections
├── css/
│   └── styles.css      # Main stylesheet with all styling
├── js/
│   └── script.js       # JavaScript for interactivity
├── images/             # Directory for image assets
├── assets/             # Directory for other assets
├── README.md           # Project overview and setup instructions
└── documentation.md    # This documentation file
```

## Technologies Used

### Core Technologies

- **HTML5**: Used for structuring the content of the website.
- **CSS3**: Used for styling the website, including:
  - CSS Variables for consistent theming
  - Flexbox and Grid for layout
  - Media queries for responsive design
  - Transitions and animations for interactivity
- **JavaScript**: Used for dynamic functionality, including:
  - Mobile navigation toggle
  - Smooth scrolling
  - Form validation
  - Intersection Observer for animations
  - Active section highlighting

### External Resources

- **Font Awesome (6.4.0)**: Provides icons used throughout the website.
- **Google Fonts (Poppins)**: Provides the typography for the website.

## Implementation Details

### HTML Structure

The website is built as a single-page application with the following sections:

1. **Header**: Contains the logo and navigation menu.
2. **Hero Section**: Introduces Pratik with a headline, brief description, and call-to-action buttons.
3. **About Section**: Provides detailed information about Pratik's background and experience.
4. **Skills Section**: Showcases Pratik's technical skills organized by category.
5. **Projects Section**: Displays Pratik's portfolio projects with descriptions and links.
6. **Contact Section**: Includes contact information and a form for visitors to reach out.
7. **Footer**: Contains copyright information and additional navigation links.

### CSS Architecture

The CSS follows a logical organization:

1. **Reset & Base Styles**: Normalizes browser defaults and sets up base styling.
2. **Variables**: Defines color scheme, spacing, and other reusable values.
3. **Typography**: Sets up font styles and sizes.
4. **Layout Components**: Styles for containers, grids, and section layouts.
5. **UI Components**: Styles for buttons, cards, forms, and other UI elements.
6. **Section-Specific Styles**: Dedicated styling for each section of the website.
7. **Responsive Design**: Media queries for different screen sizes.

### JavaScript Functionality

The JavaScript provides the following functionality:

1. **Mobile Navigation**: Toggles the mobile menu on small screens.
2. **Sticky Header**: Changes header styling on scroll.
3. **Active Navigation**: Highlights the current section in the navigation menu.
4. **Smooth Scrolling**: Provides smooth transitions when clicking navigation links.
5. **Form Validation**: Validates the contact form before submission.
6. **Animations**: Adds subtle animations to enhance user experience.
7. **Back to Top Button**: Shows/hides a button to scroll back to the top of the page.

## Responsive Design

The website is fully responsive and optimized for the following breakpoints:

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: 767px and below

Responsive features include:

- Flexible layouts using CSS Grid and Flexbox
- Collapsible navigation menu on smaller screens
- Adjusted font sizes and spacing for readability
- Reorganized content for optimal viewing on each device

## Performance Optimization

The website is optimized for performance through:

1. **Minified CSS and JavaScript**: Reduces file sizes for faster loading.
2. **Optimized Images**: Properly sized and compressed images.
3. **Lazy Loading**: Images load only when they come into view.
4. **Efficient Selectors**: CSS selectors are kept simple for faster rendering.
5. **Limited Dependencies**: Minimal use of external libraries.

## Accessibility

Accessibility features include:

1. **Semantic HTML**: Proper use of HTML5 semantic elements.
2. **ARIA Attributes**: Where appropriate to enhance screen reader compatibility.
3. **Keyboard Navigation**: All interactive elements are accessible via keyboard.
4. **Color Contrast**: Sufficient contrast ratios for text readability.
5. **Alt Text**: All images have descriptive alternative text.

## Deployment Process

To deploy the website:

1. **Prepare for Deployment**:
   - Ensure all links are working correctly
   - Optimize all assets for production
   - Test the website on multiple devices and browsers

2. **Deployment Options**:

   a. **GitHub Pages**:
   - Push the code to a GitHub repository
   - Go to repository settings
   - Enable GitHub Pages from the main branch
   - The site will be available at `https://[username].github.io/[repository-name]`

   b. **Netlify**:
   - Create an account on Netlify
   - Connect your GitHub repository
   - Configure build settings (not needed for this static site)
   - Deploy the site
   - Optionally, configure a custom domain

   c. **Vercel**:
   - Create an account on Vercel
   - Import your GitHub repository
   - Configure project settings
   - Deploy the site
   - Optionally, configure a custom domain

3. **Post-Deployment**:
   - Test the live site thoroughly
   - Check for any broken links or missing assets
   - Verify that the contact form works correctly
   - Test performance using tools like Google Lighthouse

## Maintenance and Updates

To maintain and update the website:

1. **Content Updates**:
   - Edit the HTML files to update text content
   - Replace images in the images directory
   - Update project information as new projects are completed

2. **Style Updates**:
   - Modify the CSS variables to change the color scheme
   - Edit specific CSS rules to adjust layouts or styling

3. **Functionality Updates**:
   - Modify the JavaScript file to add or change interactive features
   - Test thoroughly after any changes

## Troubleshooting

Common issues and solutions:

1. **Images Not Loading**:
   - Check file paths and ensure they are correct
   - Verify that image files exist in the specified location
   - Check for case sensitivity in file names

2. **Contact Form Not Working**:
   - Ensure JavaScript is enabled in the browser
   - Check for console errors
   - Verify that the form fields have the correct IDs

3. **Responsive Issues**:
   - Test on actual devices, not just browser resizing
   - Check for overflow issues that might cause horizontal scrolling
   - Verify media queries are targeting the correct breakpoints