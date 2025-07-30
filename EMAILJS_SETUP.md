# EmailJS Setup Guide

This guide will help you set up EmailJS to send contact form submissions directly to your Gmail account.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Connect Your Gmail Account

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Select "Gmail"
4. Click "Connect Account" and authorize EmailJS to access your Gmail
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Project Inquiry from {{from_name}}

Hello,

You have received a new project inquiry from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Project Type: {{project_type}}
Budget Range: {{budget_range}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to "Account" → "General" in your EmailJS dashboard
2. Find your **Public Key** (e.g., `user_abc123xyz`)

## Step 5: Update Environment Variables

1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Test the Form

1. Restart your development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your Gmail inbox for the test email

## Template Variables Available

The following variables are sent from your contact form:

- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{project_type}}` - Selected project type
- `{{budget_range}}` - Selected budget range
- `{{message}}` - Visitor's message
- `{{to_email}}` - Your email (rashydavids@gmail.com)

## Troubleshooting

- **Form not sending**: Check browser console for errors
- **Environment variables not working**: Restart your dev server after updating `.env.local`
- **Emails not received**: Check Gmail spam folder
- **Template errors**: Ensure all variable names match exactly (case-sensitive)

## Security Notes

- Never commit your `.env.local` file to version control
- The `.env.local` file is already in `.gitignore`
- EmailJS public key is safe to use in frontend code
- EmailJS has rate limiting to prevent abuse

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- EmailJS branding in emails
- Basic support

For higher volume, consider upgrading to a paid plan.
