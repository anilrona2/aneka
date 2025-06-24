# Aneka NGO Website

A modern, responsive website for Aneka NGO, dedicated to promoting arts, education, and cultural heritage through various programs and initiatives.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Mobile navigation, smooth scrolling, form validation
- **Gallery**: Image gallery with lightbox functionality
- **Contact Forms**: Functional contact and newsletter subscription forms
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📁 Project Structure

```
Aneka/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
├── logo.jpeg           # Organization logo
├── bharatnatya.jpeg    # Bharatnatyam performance image
├── teaching.jpeg       # Teaching session image
├── prize.jpeg          # Award ceremony image
└── prathibha_latest.jpeg # Cultural event image
```

## 🚀 Quick Start

1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **Customize** the content, images, and styling as needed

## 🎨 Customization

### Content Updates
- Edit `index.html` to update text content, contact information, and program details
- Replace images in the root directory with your own images
- Update the organization name, mission, and values

### Styling Changes
- Modify `styles.css` to change colors, fonts, and layout
- The website uses a modern color scheme with:
  - Primary: `#e74c3c` (Red)
  - Secondary: `#667eea` to `#764ba2` (Gradient)
  - Text: `#2c3e50` (Dark Blue-Gray)

### Functionality
- Edit `script.js` to modify animations, form handling, or add new features
- The website includes form validation and notification systems

## 🌐 GitHub Pages Deployment

### Method 1: Automatic Deployment (Recommended)

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/aneka-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "GitHub Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Your site will be available at**: `https://yourusername.github.io/aneka-website`

### Method 2: Using GitHub Desktop

1. **Install GitHub Desktop** from [desktop.github.com](https://desktop.github.com)
2. **Clone the repository** to your local machine
3. **Add your website files** to the repository folder
4. **Commit and push** the changes
5. **Enable GitHub Pages** as described in Method 1

### Method 3: Manual Upload

1. **Create a new repository** on GitHub
2. **Upload all files** using the web interface
3. **Enable GitHub Pages** in repository settings

## 📱 Mobile Optimization

The website is fully responsive and includes:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized images and layouts
- Fast loading times

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Contact Form Setup

The contact form is currently set up for demonstration. To make it functional:

### Option 1: Formspree (Free)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Replace the form action in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option 2: Netlify Forms
1. Deploy to Netlify
2. Add `netlify` attribute to the form:
   ```html
   <form netlify>
   ```

### Option 3: Custom Backend
Implement your own backend service to handle form submissions.

## 🎯 SEO Optimization

The website includes:
- Proper meta tags
- Semantic HTML structure
- Alt text for images
- Open Graph tags (can be added)
- Structured data (can be enhanced)

## 🚀 Performance Tips

1. **Optimize Images**: Compress images before uploading
2. **Minify CSS/JS**: Use tools like CSS Minifier and JS Minifier
3. **Enable Compression**: Configure server-side compression
4. **Use CDN**: Consider using a CDN for faster loading

## 🔒 Security Considerations

- Forms include client-side validation
- No sensitive data is stored in the code
- HTTPS is recommended for production
- Regular updates to dependencies

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support:
- Create an issue on GitHub
- Contact: info@aneka.org (update with actual contact)

---

**Built with ❤️ for community development**

*Last updated: December 2024* 