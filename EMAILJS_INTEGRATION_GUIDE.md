# EmailJS Integration Setup Guide

Your contact form is already fully integrated with EmailJS and ready to use the professional email template! Follow these steps to complete the setup:

## 🚀 Quick Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Set Up Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** (you'll need this later)

### 3. Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. **Copy the entire HTML content** from `emailjs-template.html` (lines 4-139)
4. Paste it into the **HTML Content** section
5. **Copy the plain text version** from the same file (lines 143-171)
6. Paste it into the **Text Content** section
7. Save the template and **copy the Template ID**

### 4. Configure Your Credentials
Update the `emailjs-config.js` file with your actual credentials:

```javascript
const EMAILJS_CONFIG = {
    // Your EmailJS Public Key (found in Account > General)
    PUBLIC_KEY: "your_actual_public_key_here",
    
    // Your EmailJS Service ID (from step 2)
    SERVICE_ID: "your_service_id_here",
    
    // Your EmailJS Template ID (from step 3)
    TEMPLATE_ID: "your_template_id_here",
    
    // Your email address where messages will be sent
    TO_EMAIL: "your_email@gmail.com"
};
```

### 5. Find Your Public Key
1. In EmailJS dashboard, go to **Account** > **General**
2. Copy your **Public Key**
3. Replace `"YOUR_PUBLIC_KEY"` in the config file

## ✅ Template Variables

Your professional email template uses these variables (already configured in the form):
- `{{name}}` - Visitor's name
- `{{email}}` - Visitor's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{time}}` - Timestamp when form was submitted

## 🎨 Template Features

The professional template includes:
- **Clean Design**: Navy blue (#2c5aa0) and white color scheme
- **Professional Layout**: Structured sections with clear hierarchy
- **Visitor-Focused Messaging**: "New Portfolio Inquiry" with engaging copy
- **Contact Details**: Organized visitor information display
- **Responsive Design**: Works across all email clients
- **Plain Text Fallback**: For email clients that don't support HTML

## 🧪 Testing Your Setup

1. **Test the Form**: Fill out your contact form and submit it
2. **Check Your Email**: You should receive a professionally formatted email
3. **Verify Template**: Ensure all variables are populated correctly
4. **Test Different Devices**: Check email rendering on mobile and desktop

## 🔧 Troubleshooting

### Common Issues:

**"YOUR_SERVICE_ID" Error**
- Make sure you've updated `emailjs-config.js` with real credentials
- Check that your Service ID is correct

**Email Not Received**
- Check your spam folder
- Verify your email service is properly configured in EmailJS
- Ensure your template ID is correct

**Template Not Formatting**
- Make sure you copied the entire HTML content from `emailjs-template.html`
- Check that all template variables are included

### Need Help?
- Check the [EmailJS Documentation](https://www.emailjs.com/docs/)
- Test your setup using EmailJS's test feature
- Verify your email service connection in the EmailJS dashboard

## 📧 Email Preview

Once configured, visitors will receive emails with:
- Professional header: "New Portfolio Inquiry"
- Visitor details section with contact information
- Clean message display with proper formatting
- Your branding and contact information in the footer

---

**Your contact form is ready to go! Just update the configuration file with your EmailJS credentials and start receiving professional portfolio inquiries.**