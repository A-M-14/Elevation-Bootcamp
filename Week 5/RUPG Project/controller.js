import { APIService } from './api-service.js';

export class Controller {
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
