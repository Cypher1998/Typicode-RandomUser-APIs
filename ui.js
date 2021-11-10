// Handling DOM painting
class UI {
  constructor() {
    // Assigning elements from DOM
    this.image = document.getElementById('image');
    this.name = document.getElementById('my-name');
    this.companyName = document.getElementById('company-name');
    this.companyPhrase = document.getElementById('company-phrase');
    this.email = document.getElementById('email');
    this.username = document.getElementById('username');
    this.location = document.getElementById('location');
    this.website = document.getElementById('website');
    this.phone = document.getElementById('phone');
  }

  // Typicode result (resultOne)
  paintUser1(resultOne) {
    this.companyPhrase.innerText = `"${resultOne.company.catchPhrase}"`;
    this.companyName.innerText = `${resultOne.company.name}`;
    this.email.innerText = `Email: ${resultOne.email}`;

    this.location.innerText = `Location: ${resultOne.address.suite} ${resultOne.address.street}, ${resultOne.address.city}`;
    this.username.innerText = `Username: ${resultOne.username}`;
    this.website.innerText = `Website: ${resultOne.website}`;
    this.phone.innerText = `Phone: ${resultOne.phone}`;
  }

  // RandomUser result(resultTwo)
  paintUser2(resultTwo) {
    this.name.innerText = `${resultTwo.name.first} ${resultTwo.name.last}`;
    this.image.setAttribute('src', resultTwo.picture.large);
  }
}
