const projects = [
{title:"Student Portfolio Website", description:"Responsive personal portfolio built with HTML, CSS, JS.", tech:"HTML, CSS, JavaScript", role:"Front-end"},
{title:"UTP Cable Making", description:"Created straight-through and crossover UTP cables with proper testing using LAN tester.", tech:"UTP Cable, RJ45, Crimping Tool", role:"Networking"},
{title:"System Unit Assembly", description:"Assembled and disassembled system unit, identified parts and fixed basic hardware issues.", tech:"Hardware Troubleshooting", role:"Technician"}
];
let html="";
projects.forEach(p=>{
html+=`<div class="box"><h3>${p.title}</h3><p>${p.description}</p><p><b>Tech:</b> ${p.tech}<br><b>Role:</b> ${p.role}</p></div>`;
});
document.getElementById("project-list").innerHTML=html;

fetch("https://api.github.com/users/octocat/repos?sort=updated&per_page=5")
.then(res=>res.json())
.then(repos=>{
let list="";
repos.forEach(r=>{
list+=`<li><a href="${r.html_url}" target="_blank">${r.name}</a> - ${r.language || "No language"}</li>`;
});
document.getElementById("github-repos").innerHTML=list;
});

document.getElementById("contactForm").addEventListener("submit",function(e){
e.preventDefault();
let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let msg=document.getElementById("message").value.trim();
if(!name || !email || !msg || !email.includes("@")){
document.getElementById("formMsg").innerText="Please fill all fields correctly.";
return;
}
document.getElementById("formMsg").innerText="Thank you! Message sent.";
this.reset();
});