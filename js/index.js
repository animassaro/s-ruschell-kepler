//Inserts copyright logo, current year, and name in footer of index.html
const body = document.querySelector("body");
const foot = document.createElement("footer");

body.appendChild(foot);

const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = "<span>&#169;</span> Stasia Ruschell " + thisYear;

footer.appendChild(copyright);

//Inserts skills in skills section of index.html
const skills = ["C#", "Unity", "JavaScript", "HTML", "CSS"];

const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector("ul");

//Takes input from user and posts them in message section index.html
for (let i in skills) {
  const skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.append(skill);
}

const messageForm = document.getElementsByName("leave_message");
messageForm[0].addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  newMessage.innerHTML =
    "<a href='mailto:" +
    email +
    "'>" +
    username +
    "</a> <br><span>" +
    message +
    "</span>";

  //Removes messages posted to index.html
  const removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.setAttribute("type", "button");
  removeButton.addEventListener("click", (e) => {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  messageList.append(newMessage);
  newMessage.appendChild(removeButton);

  messageForm[0].reset();
});

//API call to populate projects section of index.html
const projectSection = document.getElementById("Projects");
const projectList = projectSection.querySelector("ul");

fetch("https://api.github.com/users/animassaro/repos")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Mistakes were made.");
    }
    return res.json();
  })
  .then((repositories) => {
    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");
      const projectLink = document.createElement("a");
      projectLink.innerHTML = repositories[i].name;
      projectLink.href = repositories[i].html_url;
      projectLink.target = "_blank";
      project.appendChild(projectLink);
      projectList.append(project);
    }
  })
  .catch((error) => {
    const errorMsg = document.createElement("p");
    errorMsg.innerText = error;
    projectSection.appendChild(errorMsg);
  });
