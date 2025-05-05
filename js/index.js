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
