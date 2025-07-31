export class APIService {

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
