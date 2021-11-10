// fetch API's
class Typicode {
  async getUser() {
    const profile = await fetch('https://jsonplaceholder.typicode.com/users');

    const profileResponse = await profile.json();

    return profileResponse;
  }
}

class RandomUser {
  async randomUser() {
    const profile = await fetch('https://randomuser.me/api/');

    const profileResponse = await profile.json();

    return profileResponse.results[0];
  }
}
