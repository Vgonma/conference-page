// ----------------------- Champions Data -----------------------

const champs = [
  {
    champName: 'Keanu Reeves',
    game: 'CyberPunk 2077',
    description: `This year ${this.champName} will be presenting ${this.game}.`,
    photo: './images/champ-keanuReeves.jpg',
  },

  {
    champName: 'Anjali Bhimani',
    game: 'Overwatch',
    description: `This year ${this.champName} will be participating in ${this.game} showcase and pannel.`,
    photo: 'images/champ-anjaliBhimani.jpg',
  },

  {
    champName: 'Robin Williams',
    game: 'The legend of Zelda: Skyward sword',
    description: `This year ${this.champName} will be presenting ${this.game}.`,
    photo: './images/champ-robinWilliams.jpg',
  },

  {
    champName: 'James Cameron',
    game: 'Avatar: The Game',
    description: `This year ${this.champName} will be presenting ${this.game}.`,
    photo: './images/champ-jamesCameron.jpg',
  },

  {
    champName: 'Todd Howard',
    game: 'Elder Scrolls Online',
    description: `This year ${this.champName} will be presenting ${this.game}.`,
    photo: './images/champ-toddHoward.jpg',
  },

  {
    champName: 'Snoop Dogg',
    game: 'Call of Duty Modern Warefare II',
    description: `This year ${this.champName} will be presenting ${this.game}.`,
    photo: './images/champ-snoopDogg.jpg',
  },
];

// ----------------------- Champ population -----------------------

function addChamp(num) {
  const champCard = document.createElement('div');
  champCard.classList.add('champ-card');
  champCard.innerHTML = `
  <div class="champ-left">
  <img class="checkers" src="./images/bg-checker.jpg" alt="">
  <img class="avatar-img" src="${champs[num].photo}" alt="${champs[num].champName}">
  </div>
  <div class="champ-right">
  <h2 class="champ-name">${champs[num].champName}</h2>
  <h4 class="champ-job">${champs[num].game}</h4>
  <hr class="champ-divider">
  <p class="champ-description">${champs[num].description}</p>
  </div>`;

  return champCard;
}

function populateChamps(start, end) {
  const champGrid = document.querySelector('.champ-grid');
  if (!champGrid) return;

  champGrid.innerHTML = '';
  for (let i = start; i < end; i += 1) {
    champGrid.appendChild(addChamp(i));
  }
}

populateChamps(0, 2);
if (window.innerWidth >= 768) {
  populateChamps(0, 6);
}

const moreChamps = document.querySelector('.champions-more');
if (moreChamps) {
  moreChamps.addEventListener('click', () => {
    moreChamps.classList.toggle('is-active');
    moreChamps.innerHTML = `MORE
      <img class="up-arrow" src="./images/up-arrow.png" alt="Show more champs">`;
    populateChamps(0, 2);
    if (moreChamps.classList.contains('is-active')) {
      moreChamps.innerHTML = `HIDE
      <img class="up-arrow" src="./images/up-arrow.png" alt="Show more champs">`;
      populateChamps(0, 6);
    }
  });

  window.addEventListener('resize', () => {
    populateChamps(0, 2);
    if (window.innerWidth >= 768 || moreChamps.classList.contains('is-active')) {
      populateChamps(0, 6);
    }
  });
}
// ----------------------- Nav Menu Mobile Controls -----------------------

const navMenu = document.createElement('section');
navMenu.classList.add('nav-menu-mobile');
navMenu.innerHTML = `<ul class="nav-menu-ul">
<li class="nav-menu-li"><a href="./index.html">Home</a></li>
<li class="nav-menu-li"><a href="./about.html">About</a></li>
<li class="nav-menu-li"><a href="#">Program</a></li>
<li class="nav-menu-li"><a href="#">Join</a></li>
<li class="nav-menu-li"><a href="#">Sponsor</a></li>
<li class="nav-menu-li"><a href="#">News</a></li>
</ul>`;
const body = document.querySelector('body');
body.appendChild(navMenu);

const hamburgerMenu = document.querySelector('.hamburger');
hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('is-active');
  navMenu.classList.toggle('is-active');
});