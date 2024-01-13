import { heroes } from '../data/heroes';

export const getHeroesById = (publisher) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if ( !validPublisher.includes( publisher ) ) {
        throw new Error (`${publisher} no reconocido`); 
    } 

    return heroes.filter( heroe => heroe.publisher === publisher );
    
}