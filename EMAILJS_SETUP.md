# EmailJS Setup Guide

## Overview
The contact form is now integrated with EmailJS to send emails to `kscreativelab@gmail.com`. Follow these steps to complete the setup.

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email

## Step 2: Get Your Public Key
1. Log in to EmailJS dashboard
2. Go to **Account** → **API Keys**
3. Copy your **Public Key**

## Step 3: Create Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup wizard to connect your email
5. Copy the **Service ID** (format: `service_xxxxx`)

## Step 4: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_email}}
Name: {{from_name}}

Message:
{{message}}
```

4. Copy the **Template ID** (format: `template_xxxxx`)

## Step 5: Update Contact.jsx
Replace the placeholder values in `src/components/Contact.jsx`:

```javascript
// Line 16: Replace YOUR_EMAILJS_PUBLIC_KEY
emailjs.init('YOUR_PUBLIC_KEY_HERE');

// Line 32: Replace YOUR_SERVICE_ID
await emailjs.send(
  'YOUR_SERVICE_ID_HERE',
  'YOUR_TEMPLATE_ID_HERE',
  {
    to_email: 'kscreativelab@gmail.com',
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  }
);
```

## Example Values
- **Public Key**: `abc123def456ghi789`
- **Service ID**: `service_abc123def456`
- **Template ID**: `template_xyz789abc123`

## Testing
1. Run `npm run dev`
2. Fill out the contact form
3. Submit and verify email is received at `kscreativelab@gmail.com`

## Troubleshooting
- **Email not sending**: Check Service ID and Template ID are correct
- **CORS error**: Verify Public Key is correct
- **Template not working**: Ensure template variables match the code

## Free Tier Limits
- EmailJS free tier: 200 emails/month
- Upgrade to Pro for unlimited emails

## Security Note
- Public Key is safe to expose in frontend code
- Never expose Service ID or Template ID in production
- Consider using environment variables for sensitive data

---

**Status**: Ready for configuration

