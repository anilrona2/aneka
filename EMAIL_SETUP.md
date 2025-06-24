# Email Setup Instructions

## Current Email Functionality

The contact form is currently set up to send emails to **anilrona2@gmail.com** when someone fills out and submits the form.

## Setup Required

To make the email functionality work, you need to:

### Option 1: Web3Forms (Recommended - Free)

1. Go to [web3forms.com](https://web3forms.com)
2. Click "Get Access Key"
3. Enter your email: `anilrona2@gmail.com`
4. Copy the access key provided
5. Replace `YOUR_WEB3FORMS_KEY` in `script.js` line 230 with your actual access key

### Option 2: Formspree (Alternative - Free tier available)

1. Go to [formspree.io](https://formspree.io)
2. Sign up with your email: `anilrona2@gmail.com`
3. Create a new form
4. Get the form endpoint URL
5. Update the form action in `index.html`

### Option 3: EmailJS (Alternative - Free tier available)

1. Go to [emailjs.com](https://emailjs.com)
2. Sign up and create an account
3. Set up an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Get your public key, service ID, and template ID
6. Update the JavaScript code accordingly

## Current Implementation

The form currently uses Web3Forms API. Once you get your access key:

1. Open `script.js`
2. Find line 230: `access_key: 'YOUR_WEB3FORMS_KEY'`
3. Replace `YOUR_WEB3FORMS_KEY` with your actual key
4. Save the file and push to GitHub

## Email Format

When someone submits the form, you'll receive an email with:
- **Subject**: "Aneka Trust Contact Form: [User's Subject]"
- **Content**: 
  - Name
  - Email
  - Phone
  - Subject
  - Message

## Testing

After setup:
1. Fill out the contact form on your website
2. Submit the form
3. Check your email (anilrona2@gmail.com) for the message
4. You should receive a formatted email with all the form details

## Troubleshooting

If emails are not being received:
1. Check your spam folder
2. Verify the access key is correct
3. Check browser console for any JavaScript errors
4. Ensure the website is accessible via HTTPS (required for most email services) 