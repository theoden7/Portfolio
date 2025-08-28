// You can add interactive stuff here later
console.log("Portfolio website loaded!");

const projects = {
  1: {
    title: "Bachelor’s Thesis – Location-Based GPS Game",
    overview: "This project explores how modern technology can be used to counteract sedentary lifestyles by encouraging physical activity and social interaction. The result is a GPS-based mobile game, developed in Unity with Mapbox and Firebase, where players solve a murder mystery by moving between real-world locations in Norrköping, similar to Pokémon GO. The game design, supported by a custom interface and visualized through Figma, requires players to walk to progress, showing the potential of gamified technology to promote movement and engagement",
    images: ["images/Bachelor/registrering.jpg", "images/Bachelor/login.jpg", "images/Bachelor/Arrest.jpg","images/Bachelor/Ledtråd1.1.jpg", "images/Bachelor/Ministaden.jpg", "images/Bachelor/userstats.jpg", "images/Bachelor/bach1.jpg", "images/Bachelor/NotesAndClue.jpg"],
    tech: "C#, Unity, Firebase, Mapbox, Photon",
    links: [
      { label: "GitHub", url: "https://github.com/Theodenlll7/KandidatProjekt_Unity",  },
    ]
  },
  2: {
    title: "Project Two",
    overview: "This is my second project. Even better!",
    images: ["images/Square.webp"],
    tech: "Java, Spring Boot, MySQL",
    links: [
      { label: "GitHub", url: "https://github.com/yourname/project2" }
    ]
  },
  3: {
    title: "Project Three",
    overview: "Another cool project description...",
    images: ["images/Square.webp"],
    tech: "Python, Flask, PostgreSQL",
    links: [] // no links for this one
  }
};


// Modal elements
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalOverview = document.getElementById("modalOverview");
const modalImages = document.getElementById("modalImages");
const modalTech = document.getElementById("modalTech");
const closeBtn = document.querySelector(".close");

// Open modal on project click
const modalLinks = document.getElementById("modalLinks");

document.querySelectorAll(".project").forEach(proj => {
  proj.addEventListener("click", () => {
    const projectId = proj.getAttribute("data-project");
    const project = projects[projectId];

    modalTitle.textContent = project.title;
    modalOverview.textContent = project.overview;
    modalTech.innerHTML = `<strong>Tech stack:</strong> ${project.tech}`;

    // Images
    modalImages.innerHTML = "";
    project.images.forEach(img => {
      const el = document.createElement("img");
      el.src = img;
      el.style.maxWidth = "100%";
      el.style.margin = "10px 0";
      modalImages.appendChild(el);
    });

    // Links
    modalLinks.innerHTML = "";
    if (project.links && project.links.length > 0) {
      project.links.forEach(link => {
        const a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.label;
        a.target = "_blank"; // open in new tab
        a.classList.add("modal-link");
        modalLinks.appendChild(a);
      });
    }

    modal.style.display = "block";
  });
});


// Close modal
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
