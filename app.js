setTimeout(hideSplash, 3000);

function hideSplash() {
  loadImageWithMap('start.png', 'start-map');
}

function loadHome() {
  loadImageWithMap('home.png', 'home-map');
}

function loadMainMenu() {
  loadImageWithMap('menu.png', 'menu-map');
}

function loadImageWithMap(img, map) {
  document.querySelector('.container').src = '/hollowknightcollector/' + img;
  document.querySelector('.container').useMap = '#' + map;
}
