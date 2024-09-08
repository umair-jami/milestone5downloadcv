document.addEventListener("DOMContentLoaded", function () {
    var resumeForm = document.getElementById('resumeForm');
    var profilePictureInput = document.getElementById('profilePicture');
    resumeForm.addEventListener('submit', function (event) {
        var _a;
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        // Generate resume output
        var resumeOutput = "\n            <html>\n            <head>\n                <title>Resume</title>\n                <style>\n                    .profile-picture { max-width: 200px; height: auto; }\n                </style>\n            </head>\n            <body>\n                <h2>Resume</h2>\n                ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profile-picture\">") : '', "\n                <p><strong>Name:</strong> ").concat(name, "</p>\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Phone:</strong> ").concat(phone, "</p>\n                <h3>Education</h3>\n                <p>").concat(education, "</p>\n                <h3>Experience</h3>\n                <p>").concat(experience, "</p>\n                <h3>Skills</h3>\n                <p>").concat(skills, "</p>\n            </body>\n            </html>\n        ");
        // Create a unique filename
        var username = name.trim().replace(/\s+/g, '_') || 'resume';
        var uniquePath = "resumes/".concat(username, "_cv.html");
        // Create a Blob from the resumeOutput
        var blob = new Blob([resumeOutput], { type: 'text/html;charset=utf-8' });
        var url = URL.createObjectURL(blob);
        // Create a download link and click it
        var downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = uniquePath;
        downloadLink.textContent = "Download your Advanced Resume";
        downloadLink.style.display = 'block'; // Ensure the link is visible
        // Append the download link to the resumeOutput div
        var resumeOutputElement = document.getElementById('resumeOutput');
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.appendChild(downloadLink);
        resumeOutputElement.style.display = 'block';
    });
});
