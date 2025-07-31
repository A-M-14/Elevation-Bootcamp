# Random User Profile Generator

A modern web application that generates random user profiles with friends, quotes, Pokemon, and about sections using multiple APIs.

## Features

- **Random User Profiles**: Generated using the RandomUser.me API
- **Friends List**: Display 6 random friends for each user
- **Favorite Quotes**: Kanye West quotes from the Kanye.rest API
- **Random Pokemon**: Fetches random Pokemon sprites from PokeAPI
- **About Section**: Generated text using Bacon Ipsum API
- **Responsive Design**: Clean, modern UI with flexbox layout
- **Parallel API Loading**: Optimized performance with concurrent requests

## APIs Used

- [RandomUser.me](https://randomuser.me/) - User profiles and friends
- [Kanye.rest](https://kanye.rest/) - Kanye West quotes
- [PokeAPI](https://pokeapi.co/) - Pokemon data and sprites
- [Bacon Ipsum](https://baconipsum.com/) - Lorem ipsum text generator

## Architecture

The project follows MVC (Model-View-Controller) pattern with ES6 modules:

- `api-service.js` - Handles all API interactions
- `view.js` - Manages DOM manipulation and rendering
- `controller.js` - Coordinates between view and data
- `app.js` - Application initialization
- `styles.css` - Modern CSS with flexbox layout

## How to Run

1. Clone the repository
2. Open `index.html` in a modern web browser
3. The app will automatically load a random user profile
4. Click "Generate User" to get a new random profile

## Technologies

- Vanilla JavaScript (ES6+)
- CSS3 with Flexbox
- HTML5
- Fetch API for HTTP requests
- ES6 Modules for code organization

## Performance Features

- Parallel API fetching using `Promise.all()`
- Loading states for better UX
- Error handling for failed requests
- Responsive design for all screen sizes