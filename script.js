const jobs = [
    {
        title: "Frontend Developer",
        company: "TechSoft",
        location: "Bangalore",
        description: "Build responsive UI using HTML, CSS, JS."
    },
    {
        title: "Backend Developer",
        company: "CodeWorks",
        location: "Hyderabad",
        description: "Work with Node.js, APIs, and databases."
    },
    {
        title: "Data Analyst",
        company: "DataCorp",
        location: "Pune",
        description: "Analyze datasets and create dashboards."
    }
];

function loadJobs(list = jobs) {
    const jobList = document.getElementById("jobList");
    jobList.innerHTML = "";

    list.forEach((job, index) => {
        jobList.innerHTML += `
            <div class="job-card">
                <h3>${job.title}</h3>
                <p><strong>Company:</strong> ${job.company}</p>
                <p><strong>Location:</strong> ${job.location}</p>
                <button onclick="openJob(${index})">View Details</button>
            </div>
        `;
    });
}

function searchJobs() {
    const query = document.getElementById("searchBox").value.toLowerCase();
    const filtered = jobs.filter(job =>
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query)
    );
    loadJobs(filtered);
}

function openJob(index) {
    const job = jobs[index];
    document.getElementById("modalTitle").innerText = job.title;
    document.getElementById("modalCompany").innerText = "Company: " + job.company;
    document.getElementById("modalLocation").innerText = "Location: " + job.location;
    document.getElementById("modalDescription").innerText = job.description;

    document.getElementById("jobModal").style.display = "block";
}

function closeModal() {
    document.getElementById("jobModal").style.display = "none";
}

window.onload = loadJobs;