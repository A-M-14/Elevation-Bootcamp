class APIService {

  static async fetchRandomUsers(count = 7) {
    const res = await fetch(`https://randomuser.me/api/?results=${count}`);

    if (!res.ok)
        throw new Error('Failed to load users');
    const data = await res.json();

    return data.results;
  }

  static async fetchKanyeQuote() {
    const res = await fetch('https://api.kanye.rest');

    if (!res.ok)
        throw new Error('Failed to load quote');

    const { quote } = await res.json();
    return { text: quote, author: 'Kanye West' };
  }

  static async fetchRandomPokemon() {
    const maxId = 1025;
    const rand = Math.ceil(Math.random() * maxId);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${rand}`);

    if (!res.ok)
        throw new Error('Failed to load pokemon');

    const data = await res.json();
    return { name: data.name, sprite: data.sprites.front_default };
  }

  static async fetchBaconIpsum() {
    const res = await fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=2');

    if (!res.ok)
        throw new Error('Failed to load about text');

    const paras = await res.json();
    return paras.join('\n\n');
  }
}

class View {
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

class Controller {
  constructor(view) {
    this.view = view;
    this.view.bindGenerate(this.loadAll.bind(this));
  }

  async loadAll() {
    try {
      const users = await APIService.fetchRandomUsers();
      const quote = await APIService.fetchKanyeQuote();
      const pokemon = await APIService.fetchRandomPokemon();
      const about = await APIService.fetchBaconIpsum();

      this.view.renderProfile(users[0]);
      this.view.renderFriends(users.slice(1));
      this.view.renderQuote(quote);
      this.view.renderPokemon(pokemon);
      this.view.renderAbout(about);

    } catch (err) {
      alert(err.message);
    }
  }
}