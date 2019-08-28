window.onresize = handleResize;
forWhoAnimation();
nextSlideAnimation();
pollSlideAnimation();
bankcardAnimation();
editorAnimation();

function handleResize() {
  setForWhoParentWidthAnimation();
}

function forWhoAnimation() {
  prepareAnimation();
  setForWhoParentWidthAnimation();
  anime.timeline({
    easing: 'easeOutQuad',
    duration: 200
  }).add({
    targets: '#for-who-1 span',
    scaleX: [-1, 1],
    opacity: [0, 1],
    delay: function delay(el, i) {
      return i * 100;
    }
  }).add({
    targets: '#for-who-1 span',
    scaleX: [1, -1],
    opacity: [1, 0],
    delay: function delay(el, i) {
      return i * 100;
    }
  }, '+=1600').add({
    targets: '#for-who-2 span',
    scaleX: [-1, 1],
    opacity: [0, 1],
    delay: function delay(el, i) {
      return i * 100;
    }
  }, '-=700').add({
    targets: '#for-who-2 span',
    scaleX: [1, -1],
    opacity: [1, 0],
    delay: function delay(el, i) {
      return i * 100;
    }
  }, '+=1600').add({
    targets: '#for-who-3 span',
    scaleX: [-1, 1],
    opacity: [0, 1],
    delay: function delay(el, i) {
      return i * 100;
    }
  }, '-=700').add({
    targets: '#for-who-3 span',
    scaleX: [1, -1],
    opacity: [1, 0],
    delay: function delay(el, i) {
      return i * 100;
    }
  }, '+=1600').add({
    targets: '#for-who-4 span',
    scaleX: [-1, 1],
    opacity: [0, 1],
    delay: function delay(el, i) {
      return i * 100;
    }
  }, '-=700').add({
    targets: '#for-who-4 span',
    scaleX: [1, -1],
    opacity: [1, 0],
    delay: function delay(el, i) {
      return i * 100;
    }
  }, '+=1600').add({
    targets: '#for-who-5 span',
    scaleX: [-1, 1],
    opacity: [0, 1],
    delay: function delay(el, i) {
      return i * 100;
    }
  }, '-=700').add({
    targets: '#for-who-5 span',
    scaleX: [1, -1],
    opacity: [1, 0],
    delay: function delay(el, i) {
      return i * 100;
    }
  }, '+=1600').add({
    targets: '#for-who-6 span',
    scaleX: [-1, 1],
    opacity: [0, 1],
    delay: function delay(el, i) {
      return i * 100;
    }
  }, '-=700').add({
    targets: '#for-who-6 span',
    scaleX: [1, -1],
    opacity: [1, 0],
    delay: function delay(el, i) {
      return i * 100;
    }
  }, '+=1600').add({
    targets: '#for-who-7 span',
    scaleX: [-1, 1],
    opacity: [0, 1],
    delay: function delay(el, i) {
      return i * 100;
    }
  }, '-=700').add({
    targets: '#for-who-7 span',
    scaleX: [1, -1],
    opacity: [1, 0],
    delay: function delay(el, i) {
      return i * 100;
    }
  }, '+=1600').add({
    targets: '#for-who-8 span',
    scaleX: [-1, 1],
    opacity: [0, 1],
    delay: function delay(el, i) {
      return i * 100;
    }
  }, '-=700');
}

function setForWhoParentWidthAnimation() {
  var container = document.getElementById("for-who-container");
  var letters = 0;
  var width = 0;
  var forWhos = document.getElementsByClassName('for-who');

  for (var i = 0; i < forWhos.length; i++) {
    var who = forWhos[i];

    if (who.childNodes.length > letters) {
      letters = who.childNodes.length;
      width = who.scrollWidth;
    }
  }

  console.log(letters);
  container.style.width = letters * width + "px";
}
/**
 * Changes each character in the tags to separate <span>-elements
 * Required for screenreaders
 * @return {void}
 */


function prepareAnimation() {
  var forWhos = document.getElementsByClassName('for-who');

  for (var i = 0; i < forWhos.length; i++) {
    var who = forWhos[i];
    var text = who.innerHTML;
    who.innerHTML = '';

    for (var j = 0; j < text.length; j++) {
      var letter = document.createElement('span');
      letter.className = 'inline-block';
      letter.innerHTML = text.charAt(j);
      who.appendChild(letter);
    }
  }
}
/**
 * Animates the next slide classroom svg
 * @return {void}
 */


function nextSlideAnimation() {
  anime.timeline({
    loop: true,
    easing: 'easeInOutCubic',
    delay: 700
  }).add({
    targets: '#svg-next-slide circle',
    fill: '#E16E64'
  }).add({
    targets: '#svg-next-slide circle',
    fill: '#2F47DC'
  }).add({
    targets: '#svg-next-slide circle',
    fill: '#ffd170'
  });
}

function pollSlideAnimation() {
  anime.timeline({
    loop: true,
    //delay: 2000,
    easing: 'easeInOutCubic',
    targets: '#svg-poll-slide g'
  }).add({
    opacity: [0, 1],
    translateY: 0,
    delay: 2000
  }).add({
    opacity: [1, 0],
    translateY: [0, -100]
  }, '+=2000');
}

function bankcardAnimation() {
  anime({
    targets: '#svg-bankcard',
    rotate: ['13deg', '0deg', '-13deg', '0deg'],
    easing: 'linear',
    duration: 25000,
    loop: true
  });
}

function editorAnimation() {
  anime.timeline({
    loop: true
  }).add({
    targets: '#svg-editor g *',
    opacity: [0, 1],
    easing: 'linear',
    delay: function delay(el, i) {
      return i * 200;
    }
  }).add({
    targets: '#svg-editor-mouse',
    translateX: [0, -200],
    translateY: [0, -30],
    easing: 'easeOutCirc'
  }).add({
    targets: '#svg-editor-title-slide',
    fill: ['#d94639', '#0c1344'],
    duration: 1000
  }).add({
    targets: '#svg-editor-title-slide-mini',
    fill: ['#d94639', '#0c1344'],
    duration: 1000
  }, '-=1000').add({
    targets: '#svg-editor-mouse',
    translateX: [0, 280],
    easing: 'easeOutCirc'
  }).add({
    targets: '#svg-editor-mouse',
    translateY: [0, 140],
    duration: 2000,
    easing: 'easeOutCirc'
  }).add({
    targets: '#svg-editor-slide-2',
    translateX: [306.63318, 306.63318],
    translateY: [0, 139],
    easing: 'easeOutCirc'
  }, '-=2000').add({
    targets: '#svg-editor-slide-1',
    translateX: [-30.96254, -30.96254],
    translateY: [-48.77782, -184]
  }, '-=1000').add({
    targets: '#svg-editor',
    opacity: 0,
    easing: 'linear'
  }, '+=2000');
}
