// var p = document.createElement('p');
// p.innerText = 'Textul care trebuie sa apara in paragraf';
// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.body.appendChild(p);

const $p = $('<p>', {
  text: 'Textul care trebuie sa apara in paragraf',
  id: 'myParagraphy',
  class: 'clase de css',
});
const $msg = $('<p>', {
  id: 'message',
  text: 'Parola trebuie sa fie mai mica de 5 caractere',
});

const $container = $('.container');
$p.appendTo($container);

$container.append($msg);

setTimeout(function () {
  $msg.addClass('error');
}, 5000);

// $(document.body).append($p);

$('<span>', {
  id: 'example',
  text: 'ParolaMea',
}).appendTo($msg);

$('<h2>', {
  text: 'Mesaje',
}).prependTo($container);

// $('<div>', {
//   class: 'navigation',
//   text: 'x'
// }).after($container)
// ^wrong

$container.after(
  $('<div>', {
    class: 'navigation',
    text: 'x',
  }),
);

$('.navigation').append(
  $('<a>', {
    text: ' Primul Link',
    href: '/',
    title: 'Test',
    class: 'nav-link',
  }),
);

// $('<h2>', {
//   text: 'Navigatie',
// }).before('.navigation .nav-link');

$('.navigation .nav-link')
  .before(
    $('<h2>', {
      text: ' Navigatie',
    }),
  )
  .prepend(
    $('<sup>', {
      text: 1,
    }),
  );

$container.before(
  $('<h1>', {
    text: 'Invat jQuery',
  }),
);

const $docs = $('<p>', {
  text: 'Documentatia jQuery poate fi gasita ',
});
$docs
  .append(
    $('<a>', {
      href: 'https://api.jquery.com',
      target: '_blank',
      rel: 'noopener noreferrer',
      text: 'aici',
    }),
  )
  .append(
    $('<span>', {
      text: '.',
    }),
  )
  .insertAfter($('.navigation'));
