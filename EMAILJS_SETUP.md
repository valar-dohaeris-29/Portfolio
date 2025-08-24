# EmailJS Integration Guide for Cyberpunk Portfolio

## Overview

This guide will help you integrate your contact form with EmailJS using the cyberpunk-themed template. The integration has been set up to match your portfolio's aesthetic while providing a seamless experience for your visitors.

## Prerequisites

1. An EmailJS account (sign up at [emailjs.com](https://www.emailjs.com/))
2. A configured email service in your EmailJS dashboard
3. An email template created with the provided HTML structure

## Step 1: Create EmailJS Account and Service

1. Go to [emailjs.com](https://www.emailjs.com/) and create an account
2. In your EmailJS dashboard, create a new email service (Gmail, Outlook, etc.)
3. Note down your **Service ID**

## Step 2: Create Email Template

1. In your EmailJS dashboard, go to "Email Templates"
2. Click "Create New Template"
3. Name your template (e.g., "cyberpunk-contact")
4. Open the file `emailjs-template.html` from your project
5. Copy the entire HTML content
6. Paste it into the EmailJS template editor, replacing any default content
7. Use the following HTML structure for your template:

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>A message by {{name}} has been received. Kindly respond at your earliest convenience.</div>
  <div 
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            👤
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{name}}</strong>
          </div>
          <div style="color: #cccccc; font-size: 13px">{{time}}</div>
          <p style="font-size: 16px">{{message}}</p>
          <div style="margin-top: 10px; font-size: 14px; color: #7f8c8d;">
            <strong>Email:</strong> {{email}}<br>
            <strong>Subject:</strong> {{subject}}
          </div>
        </td>
      </tr>
    </table>
  </div>
</div>
```

4. Save the template and note down your **Template ID**

## Step 3: Get Your Public Key

1. In your EmailJS dashboard, go to "Account" → "General"
2. Copy your **Public Key**

## Step 4: Update Your Portfolio Code

1. Open the `emailjs-config.js` file in your project
2. Replace the placeholder values with your actual EmailJS credentials:
   ```javascript
   const EMAILJS_CONFIG = {
       PUBLIC_KEY: "your_public_key_here",
       SERVICE_ID: "your_service_id_here",
       TEMPLATE_ID: "your_template_id_here",
       TO_EMAIL: "your_email@example.com"
   };
   ```
3. Save the file

## Template Variables

The cyberpunk template uses the following variables that are automatically populated from your contact form:

- `{{name}}` - Sender's name
- `{{email}}` - Sender's email address
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{time}}` - Timestamp when the message was sent
- `{{to_email}}` - Your email address (your_email@gmail.com)

## Testing

1. After updating the configuration, test your contact form
2. Check your email inbox for the formatted message
3. Verify that all template variables are populated correctly

## Troubleshooting

- **Form not sending**: Check browser console for errors
- **Template variables not showing**: Ensure variable names match exactly (case-sensitive)
- **Emails not received**: Check spam folder and verify service configuration
- **Rate limiting**: EmailJS has usage limits on free accounts

## Security Notes

- Your public key is safe to expose in client-side code
- Service ID and Template ID are also safe to expose
- Never expose your private key in client-side code
- Consider implementing additional spam protection for production use

## Customization

If you want to further customize the cyberpunk template:

1. Edit the `emailjs-template.html` file
2. Update colors, fonts, or layout as desired
3. Re-upload the modified template to your EmailJS dashboard

## Support

For EmailJS-specific issues, refer to their [documentation](https://www.emailjs.com/docs/) or contact their support team.