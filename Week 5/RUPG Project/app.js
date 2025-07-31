import { View } from './view.js';
import { Controller } from './controller.js';

document.addEventListener('DOMContentLoaded', () => {
  const view = new View();
  new Controller(view);
});