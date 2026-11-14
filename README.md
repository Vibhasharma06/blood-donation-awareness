# RedHope — Blood Donation Awareness Website

A responsive student awareness project built with **Next.js, React, TypeScript and CSS**.

## Features
- Responsive landing page with awareness sections
- Volunteer / awareness message form
- Backend API route at `POST /api/volunteer`
- Basic server-side validation
- No personal data is stored by this demo

## Run locally
1. Install Node.js (LTS) from https://nodejs.org/
2. Open this folder in Google Antigravity or another IDE.
3. Open the terminal in the project folder and run:

   ```bash
   npm install
   npm run dev
   ```

4. Visit http://localhost:3000

## Backend note
The API validates the form and returns a success response. It intentionally does not save names, email addresses or messages. For a real public website, add a database (for example, Supabase) and suitable privacy/security protections before collecting personal information.

## Push to GitHub
Create an empty repository on GitHub. Then run these commands in the project terminal (replace the URL with your own repository URL):

```bash
git init
git add .
git commit -m "Create RedHope blood donation awareness website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

## Deploy on Vercel
1. Sign in at https://vercel.com/ using GitHub.
2. Choose **Add New → Project**.
3. Import your `blood-donation-awareness` GitHub repository.
4. Keep the detected Next.js framework and default build settings.
5. Select **Deploy**.
6. When deployment finishes, open the provided `.vercel.app` URL.

Every push to the connected GitHub main branch can trigger a new deployment.

## Open in Google Antigravity
1. Install and open Google Antigravity.
2. Choose **Open Folder** and select this extracted project folder.
3. Open the integrated terminal and run the local commands above.
4. Ask its coding assistant to explain or modify files. Review changes before accepting them.

## Suggested project presentation
- Project title: RedHope — Blood Donation Awareness
- Aim: To spread accurate awareness about the importance of blood donation and encourage community participation.
- Tools: Next.js, React, TypeScript, CSS, Node.js API route, GitHub and Vercel.
- Note: This is an educational awareness website, not a medical service or blood-donor matching platform.

## Health and accuracy note
This site gives general awareness information only. It does not determine donor eligibility or provide medical advice. People should consult an authorized blood bank or healthcare professional. Do not publish unverified medical claims or collect sensitive health details.
