

document.getElementById('generateResume')?.addEventListener('click', () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const university = (document.getElementById('university') as HTMLInputElement).value;
    const gradYear = (document.getElementById('grad-year') as HTMLInputElement).value;
    const skills = (document.getElementById('skills-input') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    // Handle the profile picture
    const profilePictureInput = document.getElementById('profile-picture') as HTMLInputElement;
    const profilePicture = profilePictureInput.files?.[0];
    const profilePictureUrl = profilePicture ? URL.createObjectURL(profilePicture) : '';

    const resumeHtml = `
        <div class="resume-container">
            <div class="resume-header">
                ${profilePictureUrl ? `<img src="${profilePictureUrl}" alt="Profile Picture" />` : ''}
                <h1>${name}</h1>
            </div>
            <div class="resume-section">
                <h2>Personal Information</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
            </div>
            <div class="resume-section">
                <h2>Education</h2>
                <p><strong>Degree:</strong> ${degree}</p>
                <p><strong>University:</strong> ${university}</p>
                <p><strong>Graduation Year:</strong> ${gradYear}</p>
            </div>
            <div class="resume-section">
                <h2>Skills</h2>
                <ul class="skills-list">
                    ${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
                </ul>
            </div>
            <div class="resume-section work-experience">
                <h2>Work Experience</h2>
                <h3>${jobTitle} at ${company}</h3>
                <p>${experience}</p>
            </div>
        </div>
    `;

    document.getElementById('resumeDisplay')!.innerHTML = resumeHtml;
});