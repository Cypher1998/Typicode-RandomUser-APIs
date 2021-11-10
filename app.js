// instantiate new objects
const newUser = new Typicode();
const newUser2 = new RandomUser();
const ui = new UI();

let profile;

// promise from Typicode API
newUser
  .getUser()
  .then((results) => {
    // init generator function
    profile = generateUser(results);
    const profileObject = profile.next().value;
    ui.paintUser1(profileObject);
  })
  .catch((error) => console.log(error));

// promise from RandomUser API
newUser2
  .randomUser()
  .then((results) => {
    ui.paintUser2(results);
  })
  .catch((error) => console.log(error));

// generator function
function* generateUser(array) {
  for (let a = 0; a < array.length; a++) {
    yield array[a];
  }
}

// click event for next profile
document.getElementById('next').addEventListener('click', nextUser);

function nextUser() {
  const profileObject = profile.next().value;
  if (profileObject !== undefined) {
    newUser2
      .randomUser()
      .then((results) => {
        ui.paintUser2(results);
      })
      .catch((error) => console.log(error));

    ui.paintUser1(profileObject);
  } else {
    // reload page if finished
    window.location.reload();
  }
}
