import { APIService } from './api-service.js';

export class Controller {
  constructor(view) {
    this.view = view;
    this.view.bindGenerate(this.loadAll.bind(this));
    
    // Load initial data when the app starts
    this.loadAll();
  }

  async loadAll() {
    try {
      const [users, quote, pokemon, about] = await Promise.all([
        APIService.fetchRandomUsers(),
        APIService.fetchKanyeQuote(),
        APIService.fetchRandomPokemon(),
        APIService.fetchBaconIpsum()
      ]);

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
