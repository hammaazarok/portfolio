const cardsContainer = document.getElementById('portfolio');

let cards = [
  {
    img: 'work1.png',
    project_title: 'ICST4',
    company: 'Microverse',
    dev_title: 'FrontEndDev',
    date: '2022',
    description:
      'A landing webpage for the fourth International Conference on Science and Technology in awbari city Libya.',
    skills: ['html', 'css', 'Javascript'],
    livelink: 'https://hammaazarok.github.io/icst4/',
    sourcecode: 'https://github.com/hammaazarok/icst4',
  },
  {
    img: 'work2.png',
    project_title: 'AirQuality',
    company: 'Microverse',
    dev_title: 'FrontEndDev',
    date: '2022',
    description:
      'A web app that provides users with air quality rates and pollutant concentration',
    skills: ['React', 'Redux', 'SCSS'],
    livelink: 'https://air-quality-ha.netlify.app/',
    sourcecode: 'https://github.com/hammaazarok/air-quality',
    disabled: false,
  },
  {
    img: 'work3.png',
    project_title: 'AMAZON CLONE',
    company: 'Microverse',
    dev_title: 'FullStackDev',
    date: '2022',
    description:
      ' a web app that provides users with products that they can add to their carts and buy using stripe gateway',
    skills: ['React', 'ContextAPI', 'FireBase', 'Express js'],
    livelink: 'https://amaz-on-clone-ha.web.app/',
    sourcecode: 'https://github.com/hammaazarok/amazon-clone',
  },
  {
    img: 'work4.png',
    project_title: 'RecipeApp',
    company: 'Microverse',
    dev_title: 'FullStackDev',
    date: '2022',
    description: 'app that allows user to manage recipes created by them or the community.',
    skills: ['Ruby', 'Ruby on rails', 'Javascript', 'Tailwind CSS'],
    livelink: 'https://tranquil-crag-64773.herokuapp.com/',
    sourcecode: 'https://github.com/hammaazarok/recipe-app',

  },
];

cards = cards.reverse();
function loadCards(cards) {
  let cardHtml = '';

  for (let cardIndex = 0; cardIndex < cards.length; cardIndex += 1) {
    const html = `<div class="work-card work-card${cardIndex + 1}">
    <div class="card-img">
        <img src="img/works/${cards[cardIndex].img}" alt="work1">
    </div>
    <div class="card-details">
        <h2 class="work-title">${cards[cardIndex].project_title}</h2>
        <div class="work-info">
            <p class="first">${cards[cardIndex].company}</p>
            <p class="second">• ${cards[cardIndex].dev_title}</p>
            <p class="second">• ${cards[cardIndex].date}</p>
        </div>
        <div class="word-desc">
            <p>${cards[cardIndex].description}</p>
        </div>
        <div class="work-lang">
            <ul>
                <li>
                    <p class="lang-text">${cards[cardIndex].skills[0]}</p>
                </li>
                <li>
                    <p class="lang-text">${cards[cardIndex].skills[1]}</p>
                </li>
                <li>
                    <p class="lang-text">${cards[cardIndex].skills[2]}</p>
                </li>
            </ul>
        </div>
        <button type="button" class="work-btn btn">See Project</button>
    </div>
  </div>`;
    cardHtml += html;
  }
  cardsContainer.innerHTML = cardHtml;
}

loadCards(cards);
const trigger = document.querySelectorAll('.work-btn');
const loadModal = function (id, cards) {
  const modelHtml = `
  
  <div class="work-card work-card${id + 1} flex-c work-card-pop">
  <div class="modal-head">
  <div class="title"> <h2 class="work-title">${
  cards[id].project_title
}</h2></div>
    <i class="fas fa-times close-button"></i>
    </div>
    <div class="work-info">
    <p class="first">${cards[id].company}</p>
    <p class="second">• ${cards[id].dev_title}</p>
    <p class="second">• ${cards[id].date}</p>
</div>
  <div class="card-img-model">
      <img src="img/works/${cards[id].img}" alt="work1">
  </div>
  <div class="card-details-pop">
      <div class="word-desc word-desc-pop">
          <p>${cards[id].description}</p>
      </div>
      <div class="work-lang work-lang-pop">
          <ul>
              <li>
                  <p class="lang-text">${cards[id].skills[0]}</p>
              </li>
              <li>
                  <p class="lang-text">${cards[id].skills[1]}</p>
              </li>
              <li>
                  <p class="lang-text">${cards[id].skills[2]}</p>
              </li>
          </ul>
      
      <div class="button-frame">
        <button class="btn" onclick="window.open('${cards[id].livelink}', '_blank');">See Live <i class="fa-regular fa-circle-up"></i></button>${cards[id].disabled ? '<button type="button" class="btn"  disabled>Not Available</button>' : `<button class="btn" onclick="window.open('${cards[id].sourcecode}', '_blank')">See Source <i class="fab fa-github"></i></button>`}
      </div>
      </div>
    </div>
    </div>`;

    

  const bodyContainer = document.getElementById('modal');
  bodyContainer.innerHTML = modelHtml;
  const closeButton = document.querySelector('.close-button');
  closeButton.addEventListener('click', Toggle);
};

const modal = document.querySelector('.modal');

function Toggle() {
  modal.classList.toggle('show-modal');
}

function winOnClick(event) {
  if (event.target === modal) {
    Toggle();
  }
}

trigger.forEach((element, i) => {
  element.addEventListener('click', () => {
    console.log(i);
    Toggle();
    loadModal(i, cards);
  });
});

window.addEventListener('click', winOnClick);
