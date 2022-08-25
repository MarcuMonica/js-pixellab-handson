const paragraphElement = document.createElement('p');
const userAgentString = navigator.userAgent;
let message = 'Nu stim ce browser folosesti.';

// if (userAgentString.includes('Chrome')) {
//   message = 'Navighezi folosind Chrome';
// } else if (userAgentString.includes('Firefox')) {
//   message = 'Navighezi folosind Firefox';
// } else if (userAgentString.includes('Internet Explorer')) {
//   message = 'Navighezi folosing Internet Explorer'
// }

switch (true) {
  case userAgentString.includes('Chrome'): {
    message = 'Navighezi folosind Chrome';

    break;
  }
  case userAgentString.includes('Firefox'): {
    message = 'Navighezi folosind Firefox';

    break;
  }
  case userAgentString.includes('Internet Explorer'): {
    message = 'Navighezi folosind Internet Explorer';

    break;
  }
}

paragraphElement.innerText = message;

document.body.append(paragraphElement);

//Adauga mesaj pentru Firefox.
//Folosind metoda window.setTimeout() afiseaza dupa 3 secunde un prompt cu mesajul: “nume browser vrea sa
//stie cum te cheama”.
//Cu rezultatul metodei prompt afiseaza un element h1 cu mesajul: “Salut nume utilizator!”.
// Adauga mesaj pentru pentru Internet Explorer.
// Converteste codul rezultat la o instructiune de tip switch.
// Dupa ce apare elementul h1, asteapta inca 3 secunde si elimina
//  paragraful initial din DOM folosind metoda .remove()

const paragraphElement1 = document.createElement('p');

setTimeout(function () {
  const h1Element = document.createElement('h1');

  const numeUtilizator = prompt(
    `${userAgentString} vrea sa stie cum te cheama.`,
  );

  h1Element.innerText = `Salut ${numeUtilizator}!`;

  document.body.append(h1Element);

  setTimeout(() => {
    h1Element.remove();
  }, 3000);
}, 3000);
