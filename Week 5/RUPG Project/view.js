export class View {
  constructor() {
    this.profilePic = document.getElementById('profile-pic');
    this.profileName = document.getElementById('profile-name');
    this.profileLoc = document.getElementById('profile-location');
    this.friendsList = document.getElementById('friends-list');
    this.quoteText = document.getElementById('quote-text');
    this.quoteAuthor = document.getElementById('quote-author');
    this.pokeImg = document.getElementById('pokemon-img');
    this.pokeName = document.getElementById('pokemon-name');
    this.aboutText = document.getElementById('about-text');
    this.generateBtn = document.getElementById('generate-btn');
  }

  renderProfile(user) {
    this.profilePic.src = user.picture.large;
    this.profileName.textContent = `${user.name.first} ${user.name.last}`;
    this.profileLoc.textContent = `${user.location.city}, ${user.location.state}`;
  }

  renderFriends(friends) {
    this.friendsList.innerHTML = '';
    friends.forEach(f => {
      const li = document.createElement('li');
      li.textContent = `${f.name.first} ${f.name.last}`;
      this.friendsList.appendChild(li);
    });
  }

  renderQuote({ text, author }) {
    this.quoteText.textContent   = text;
    this.quoteAuthor.textContent = `— ${author}`;
  }

  renderPokemon({ name, sprite }) {
    this.pokeImg.src  = sprite;
    this.pokeName.textContent = name;
  }

  renderAbout(text) {
    this.aboutText.textContent = text;
  }

  bindGenerate(handler) {
    this.generateBtn.addEventListener('click', handler);
  }
}
