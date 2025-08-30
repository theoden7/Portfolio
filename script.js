// You can add interactive stuff here later
console.log("Portfolio website loaded!");

const projects = {
  1: {
    title: "Bachelor’s Thesis – Location-Based GPS Game",
    overview: "This project, created in a team of 5 people, explores how modern technology can be used to counteract sedentary lifestyles by encouraging physical activity and social interaction. The result is a GPS-based mobile game, developed in Unity with Mapbox and Firebase, where players solve a murder mystery by moving between real-world locations in Norrköping, similar to Pokémon GO. The game design, supported by a custom interface and visualized through Figma, requires players to walk to progress, showing the potential of gamified technology to promote movement and engagement",
    Images: ["Images/Bachelor/registrering.jpg", "Images/Bachelor/login.jpg", "Images/Bachelor/Arrest.JPG","Images/Bachelor/Ledtråd1.1.JPG", "Images/Bachelor/Ministaden.JPG", "Images/Bachelor/userstats.jpg", "Images/Bachelor/bach1.JPG", "Images/Bachelor/NotesAndClue.JPG"],
    tech: "C#, Unity, Firebase, Mapbox, Photon",
    links: [
      { label: "GitHub", url: "https://github.com/Theodenlll7/KandidatProjekt_Unity", },
    ]
  },
  2: {
    title: "Master’s Thesis Project: Designing a Casual Exergame",
    overview: "For my master thesis project at Liopep, I created a prototype exergame using Godot and MediaPipe, launched in the web browser, to explore how game design can promote physical activity. The game lets players steer a balloon with their body, using the web camera as input for movement.",
    Images: ["Images/ExWork/Game_Overview.PNG", ,"Images/ExWork/Gates.PNG", ,"Images/ExWork/Landing_Station.PNG", ,"Images/ExWork/Magnet.PNG", ,"Images/ExWork/Map.PNG", ,"Images/ExWork/mediapipe.PNG", ,"Images/ExWork/Shooters.PNG"],
    tech: "GD-Script, Godot, web game development, MediaPipe",
    links: [
      { label: "Download Thesis", url: "Documents/Liu_thesis_theos327.pdf", download: true },
      { label: "Liopep", url: "https://liopep.com/sv/index.html",} ,
    ]
  },
  3: {
    title: "Orbital Deployment",
    overview: "Orbital Deployment is an intense 2D survival shooter built with the power of Godot, where you’ll battle endless waves of enemies and fight for survival in a hostile, ever-changing environment. The game was developed during a course at Linköping University in collaboration with my two classmates.",
    Images: ["Images/OrbitalDeployment/OrbitalDeployment.png"],
    tech: "GD-Script, Godot, Decision Trees, Procedural generation",
    links: [
      { label: "Trailer", url: "https://www.youtube.com/watch?v=OJgwkwWK7mA&list=PPSV&ab_channel=WCpresenterar",} ,
        { label: "Try it out", url: "https://grantallkotten.itch.io/orbital-deployment",}
    ]
  },
    4: {
    title: "Bowling Simulation - Unity",
    overview: "For a school modeling project, I worked in a team of five to create a bowling simulation in Unity, using control technology to design and manage the simulation mechanics. The main challenge was implementing the real-time physics of the bowling stroke in 3D",
    Images: ["Images/Bowling/ResultatEfter.png","Images/Bowling/ResultatFore.png", ],
    tech: "Unity, C#, Control Technology",
    links: [
      { label: "Github", url: "https://github.com/EmilWallberg/TNM085-Modelling-Project",} ,

    ]
  },
    5: {
    title: "Steam Game Recommender- Machine learning",
    overview: "For a school project, I worked in a team of two to build a Steam Game Recommendation System using machine learning concepts such as K-Nearest Neighbors and cosine similarity. The main challenge was to loop, iterate, and handle the large database of over 41 million user recommendations",
    Images: ["Images/MachineLearning/Game_recommender.png","Images/MachineLearning/user_13_900000_Normal.jpg",],
    tech: "Machine Learning, Python",
    links: [
        { label: "Download Project Report", url: "Documents/TNM108_grupp17_Rapport.pdf", download: true },

    ]
  },
    6: {
    title: "Sound Visualization",
    overview: "For a school project, I worked in a team of three to develop a Sound Visualization tool that could process any audio file. The program extracted spectrum data in real time, divided it into eight frequency bands, and visualized each band as a pillar.",
    Images: ["Images/soundvis/soundvis1.png", "Images/soundvis/soundvis2.png", "Images/soundvis/soundvis3.png", ],
    tech: "Unity, C#",
    links: [
        { label: "Github", url: "https://github.com/Theodenlll7/SoundVisualisation",} ,

    ]
  },
    7: {
    title: "Face Recognition",
    overview: "For a school project, I worked in a team of three to develop a face recognition program in MATLAB. The system included steps such as color correction, thresholding, Sobel and skin masks, morphological operations, and feature detection using Viola-Jones and Hough transforms. Faces were then normalized through translation, rotation, scaling, and cropping before applying PCA (Eigenfaces) and Fisher’s Linear Discriminant for recognition.",
    Images: ["Images/faceRec/hybrid.PNG", ],
    tech: "Matlab",
    links: []
  },
    8: {
    title: "AI with decision trees",
    overview: "For a school project, I worked in a team of three to develop a game in Godot with AI-driven agents. We implemented decision trees and behavior trees with a blackboard system, integrated navigation and pathfinding, and designed behavior tree nodes and states to control agent actions, followed by debugging and testing",
    Images: ["Images/AI/agent.png","Images/AI/AI_agent.png", "Images/AI/simple_decision_tree.png","Images/AI/tree_in_code.png",],
    tech: "Godot, GD-Script, AI",
    links: [
        { label: "Try the agents out", url: "https://grantallkotten.itch.io/orbital-deployment",}
    ]
  },

    9: {
    title: "Image Recreation",
    overview: "For a school project, I worked in a team of two to implement an image reproduction algorithm using MATLAB and Python. We built a custom image database by web scraping 701 World of Warcraft mount icons, then used a tile-based approach to reconstruct Images by matching tiles with the closest Images in the database (based on color in the CIELAB space). To optimize performance, we tested two methods: k-means clustering to reduce the dataset and a color-distance-based selection strategy. The results were evaluated with quality metrics such as S-CIELAB, MSE/SNR, and SSIM.",
    Images: ["Images/imdatabase/10_opt2.jpg","Images/imdatabase/700.jpg","Images/imdatabase/cloud_serpent.png","Images/imdatabase/Op1_50_3OlikaBilder.jpg","Images/imdatabase/opt2_50_3OlikaBilder.jpg"],
    tech: "Matlab",
    links: [
      { label: "GitHub", url: "https://github.com/Theodenlll7/TNM097_Projekt_BRP", },
    ]
  },
    10: {
    title: "Hobby Game Project",
    overview: "This is a hobby project I’ve been working on for a few weeks, a 2D survival game built in Godot, where the goal is to last as many days as possible by leveling and building houses which holds different upgrades. The game features state machines for enemy behavior, procedural world generation, and a structured class system tailored for game development.",
    Images: ["Images/mygame/GameProject.mp4","Images/mygame/Game1.png","Images/mygame/Game2.png","Images/mygame/gamestates.png","Images/mygame/GameTalents.png","Images/mygame/gamskill.png",],
    tech: "GD-Script, Godot, State Machines, World Generation",
    links: [ ]
  },

      11: {
    title: "3D Modeling & Procedural Project",
    overview: "As part of a collaborative course project, I worked with a teammate to develop a roguelike game in Unity using C#. We designed and animated 3D characters and enemies in Blender with skeleton rigs and keyframe animation, and implemented simple AI agents through Unity’s built-in tools. The game featured procedurally generated maps created with Perlin noise, while Poisson Disk Sampling was used for natural tree placement. This project was super fun!",
    Images: ["Images/3dgame/3dgame6.png","Images/3dgame/3dgame.png","Images/3dgame/3dgame2.png","Images/3dgame/3dgame3.png","Images/3dgame/3dgame4.png","Images/3dgame/3dgame5.png",],
    tech: "Unity, Blender, C#, World Generation",
    links: [ ]
  },
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
    project.Images.forEach(file => {
    let el;
    if (file.endsWith(".mp4") || file.endsWith(".webm")) {
        el = document.createElement("video");
        el.src = file;
        el.controls = true;        // adds play/pause buttons
        el.style.maxWidth = "100%";
        el.style.margin = "10px 0";
        el.style.borderRadius = "8px";
    } else {
        el = document.createElement("img");
        el.src = file;
        el.style.maxWidth = "100%";
        el.style.margin = "10px 0";
        el.style.borderRadius = "8px";
    }
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
