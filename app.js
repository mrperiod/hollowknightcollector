setTimeout(hideSplash, 1000);

function hideSplash() {
  loadImageWithMap('nav.png', 'nav-map');
}

function loadHome() {
  loadImageWithMap('home.png', 'home-map');
}

function loadMainMenu() {
  loadImageWithMap('menu.png', 'menu-map');
}

function loadImageWithMap(img, map) {
  document.querySelector('.container').src = '/gametube/' + img;
  document.querySelector('.container').usemap = '#' + map;
}
