document.addEventListener("DOMContentLoaded", () => {
    const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

    resumeForm.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

        // Generate resume output
        const resumeOutput = `
            <html>
            <head>
                <title>Resume</title>
                <style>
                    .profile-picture { max-width: 200px; height: auto; }
                </style>
            </head>
            <body>
                <h2>Resume</h2>
                ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profile-picture">` : ''}
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <h3>Education</h3>
                <p>${education}</p>
                <h3>Experience</h3>
                <p>${experience}</p>
                <h3>Skills</h3>
                <p>${skills}</p>
            </body>
            </html>
        `;

        // Create a unique filename
        const username = name.trim().replace(/\s+/g, '_') || 'resume';
        const uniquePath = `resumes/${username}_cv.html`;

        // Create a Blob from the resumeOutput
        const blob = new Blob([resumeOutput], { type: 'text/html;charset=utf-8' });
        const url = URL.createObjectURL(blob);

        // Create a download link and click it
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = uniquePath;
        downloadLink.textContent = "Download your Advanced Resume";
        downloadLink.style.display = 'block'; // Ensure the link is visible

        // Append the download link to the resumeOutput div
        const resumeOutputElement = document.getElementById('resumeOutput') as HTMLDivElement;
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.appendChild(downloadLink);
        resumeOutputElement.style.display = 'block';
    });
});
