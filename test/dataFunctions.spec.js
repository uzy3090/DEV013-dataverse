import { filtrarPelicula } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

console.log(fakeData);

describe('filtrarPelicula', () => {

  it('returns comedy movies', () => {
    expect(filtrarPelicula(fakeData,"generoDePelicula","Comedia")).toContain();
  });
});

/* describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); */
