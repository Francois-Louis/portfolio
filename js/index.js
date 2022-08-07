const profileBtn = document.getElementById('profileBtn');
const projectBtn = document.getElementById('projectBtn');
const profile = document.getElementById('profile');
const projects = document.getElementById('projects');
const project1 = document.getElementById('p1');
const project2 = document.getElementById('p2');
const pInfos = document.querySelectorAll('.project__infos');
const pTechnos = document.querySelectorAll('.project__technos');
const pDescription = document.querySelectorAll('.project__description');
const pLink = document.querySelectorAll('.project__link');

profileBtn.addEventListener('click', handleProfileBtnClick);
projectBtn.addEventListener('click', handleProjectBtnClick);
project1.addEventListener('click', handleProject1Click);
project2.addEventListener('click', handleProject2Click);

function handleProfileBtnClick() {
  profileBtn.classList.toggle('hidden');
  projectBtn.classList.toggle('hidden');
  profile.style.display = 'flex'
  projects.style.display = 'none';
}

function handleProjectBtnClick() {
  profileBtn.classList.toggle('hidden');
  projectBtn.classList.toggle('hidden');
  profile.style.display = 'none';
  projects.style.display = 'flex';
}

function handleProject1Click() {
  project2.classList.toggle('hidden');
  pInfos[0].classList.toggle('hidden');
  pTechnos[0].classList.toggle('hidden');
  pDescription[0].classList.toggle('hidden');
  pLink[0].classList.toggle('hidden');
}

function handleProject2Click() {
  project1.classList.toggle('hidden');
  pInfos[1].classList.toggle('hidden');
  pTechnos[1].classList.toggle('hidden');
  pDescription[1].classList.toggle('hidden');
  pLink[1].classList.toggle('hidden');
}
