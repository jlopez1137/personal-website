# Personal Website

Personal multi-page website for Assignment 5 (AI-Integrated), showcasing About, Resume, Projects, and Contact with an accessible, responsive layout. Built with semantic HTML, CSS, and vanilla JavaScript to demonstrate modern web development practices.

## Project Overview

This is a static website built for a university assignment that demonstrates proficiency in:
- Semantic HTML5 markup
- Responsive CSS design
- JavaScript form validation
- Web accessibility (WCAG 2.1 AA)
- Modern web development practices

## How to Run

### Local Development
1. Clone or download this repository
2. Open `index.html` in a web browser
3. Navigate through the site using the main navigation

### GitHub Pages Deployment
1. Push the repository to GitHub
2. Go to repository Settings > Pages
3. Select "Deploy from a branch" and choose `main`
4. Your site will be available at `https://jlopez1137.github.io/personal-website`

## Project Structure

```
personal-website/
├── index.html              # Homepage
├── about.html              # About page
├── resume.html             # Resume page
├── projects.html           # Projects portfolio
├── contact.html            # Contact form
├── thankyou.html          # Thank you page
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   └── main.js            # JavaScript functionality
├── images/
│   ├── favicon.svg        # Site favicon
│   ├── me-placeholder.jpg # Professional headshot
│   ├── project1-placeholder.jpg # Project screenshot 1
│   └── project2-placeholder.jpg # Project screenshot 2
├── .prompt/
│   └── dev_notes.md       # AI development notes
├── README.md              # This file
└── .gitignore             # Git ignore rules
```

## Features

### Accessibility
- Semantic HTML landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Skip navigation link
- Proper heading hierarchy (one `<h1>` per page)
- Form labels with `for` and `id` attributes
- ARIA attributes for screen readers
- Keyboard navigation support
- High contrast colors (WCAG AA compliant)

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Responsive typography
- Touch-friendly navigation
- Optimized for all screen sizes

### Form Validation
- HTML5 validation attributes
- JavaScript password confirmation
- Accessible error messages
- Real-time validation feedback

## Validation

### HTML Validation
- [W3C HTML Validator](https://validator.w3.org/)
- Upload each HTML file or validate by URL

### CSS Validation
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- Upload `css/styles.css` or validate by URL

### Accessibility Testing
- [WAVE Web Accessibility Evaluator](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- Keyboard navigation testing
- Screen reader testing

## Content Customization

### TODO Items to Replace
1. **Personal Information**: Update name, email, phone, location in all files
2. **Professional Content**: Replace placeholder bio, resume content, project descriptions
3. **Images**: Replace placeholder images with actual photos and screenshots
4. **Links**: Update GitHub, LinkedIn, and project URLs
5. **Repository URL**: Update footer and about page GitHub links

### Key Files to Customize
- All HTML files: Update personal information and content
- `css/styles.css`: Customize colors, fonts, and styling
- `js/main.js`: Add any additional functionality
- `images/`: Replace with actual photos and project screenshots (portrait and project screenshots go in /images/ replacing placeholders)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images
- Minimal JavaScript
- Efficient CSS
- Fast loading times
- Mobile-optimized

## License

This project is created for educational purposes. Feel free to use as a template for your own personal website.

## Development Notes & AI Iteration Journey

This project underwent extensive iterative development through AI-assisted prompting, evolving from a template-based structure to a personalized, professional portfolio. The following captures the holistic journey of prompts and refinements:

### Initial Transformation Phase
**Goal**: Move from template-y appearance to intentional, personalized design
- **Major Redesign**: Complete personality and content pass to make site feel intentional
- **Home Page Overhaul**: Removed headshot from homepage, strengthened hero copy with personal mission statement
- **Skills Integration**: Added "What I'm good at" strip with specific technologies (Python · SQL · Flask · HTML/CSS · ERD & DB Design · Analytics)
- **CTA Refinement**: Updated primary CTA to "View my work on GitHub" with secondary pointing to contact

### Projects Page Revolution
**Goal**: Transform from image-heavy showcase to GitHub-centric repository view
- **Complete Refactor**: Removed all project images and screenshots
- **Repository Focus**: Created clean, scannable list of highlighted repos with value statements
- **Content Strategy**: Each project shows repo name, problem→outcome statement, tech stack, and focus area
- **Project Curation**: Initially included 4 projects, later refined to 2 key repositories (Corporate Programs Web App, Personal Website)
- **ICS Project Removal**: Eliminated International Competitive Strategy project entirely

### Header Design Evolution
**Goal**: Modernize header while maintaining consistency across themes
- **Name Removal**: Removed "Joaquin Lopez" from header across all pages for cleaner design
- **Structure Preservation**: Maintained original header structure to avoid breaking consistency
- **Theme Integration**: Fixed hardcoded dark backgrounds to use CSS variables for proper light/dark mode support
- **Navigation Centering**: Centered navigation after removing site title

### Styling & Consistency Fixes
**Goal**: Ensure uniform appearance across all pages and themes
- **Button Styling**: Unified primary and secondary buttons to use same blue gradient and font colors
- **Skills Centering**: Fixed skills chips to be properly centered on homepage
- **Theme Consistency**: Resolved light/dark mode inconsistencies, especially in headers
- **Spacing Improvements**: Added proper spacing to resume page summary section

### Technical Refinements
**Goal**: Maintain accessibility and responsive design while improving UX
- **Link Updates**: Corrected GitHub repository links to point to actual repositories
- **Accessibility Preservation**: Maintained all WCAG 2.1 AA compliance throughout changes
- **Responsive Design**: Ensured all modifications worked across mobile and desktop
- **Performance**: Kept minimal JavaScript and efficient CSS structure

### Key Learning Points from AI Iteration
1. **Incremental Changes**: Each major change required multiple iterations to get right
2. **Consistency Challenges**: Maintaining theme consistency across light/dark modes required careful CSS variable management
3. **Content Strategy**: Moving from generic template content to specific, value-driven descriptions
4. **Design Principles**: Balancing modern aesthetics with accessibility and usability
5. **Repository Management**: Properly linking to actual GitHub repositories vs placeholder links

### Final State
The site now represents a professional, intentional portfolio that:
- Showcases actual GitHub work rather than placeholder content
- Maintains consistent styling across all pages and themes
- Provides clear value propositions for each project
- Uses confident, specific microcopy throughout
- Preserves all accessibility and responsive design features

This iterative development process demonstrates the value of AI-assisted refinement in creating polished, professional web experiences.

## Contact

For questions about this project or to report issues, please contact:
- Email: lopejo@iu.edu
- GitHub: [jlopez1137](https://github.com/jlopez1137)
- LinkedIn: [joaquinolopez](https://www.linkedin.com/in/joaquinolopez)

---

**Note**: This website is built as a university assignment demonstrating modern web development practices, accessibility standards, and responsive design principles.
