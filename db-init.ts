import { database, initializeApp } from 'firebase';
import { firebaseConfig } from './src/environments/firebase.config';
import { CategoriasDb } from './db-seed';

const foursquareConfig = {
  api_url   : 'https://api.foursquare.com/v2/venues/search',
  token     : '51LI3TEMLPQVIENBCPZEKGMRCARDEMLPUCTVKCRZCVA3XAEG',
  query_url : '',
  lat       : 38.5374062,
  lng       : -0.147505,
  limit     : 20,
};



console.log('Inicializando plicación...');

const categoriaRef = database().ref('Categorias');
const lugaresRef = database().ref('Lugares');

CategoriasDb.Categorias.forEach(cat => {
  console.log('Agregando categoría...', cat.name);
});
