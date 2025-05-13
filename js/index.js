const body = document.querySelector("body");
const foot = document.createElement("footer");

body.appendChild(foot);

const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = "<span>&#169;</span> Stasia Ruschell " + thisYear;

footer.appendChild(copyright);

const skills = ["C#", "Unity", "JavaScript", "HTML", "CSS"];

const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector("ul");

for (let i in skills) {
  const skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.append(skill);
}

const messageForm = document.getElementsByName("leave_message");
messageForm[0].addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);

  const username = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log(username, email, message);

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
