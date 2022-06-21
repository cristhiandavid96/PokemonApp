

const toggleFavorite = (id: number) => {

    
    let listFavorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (listFavorites.includes(id)) {
        listFavorites = listFavorites.filter(item => item !== id);
    } else {
        listFavorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(listFavorites));
}

const existInFavorites = (id: number): boolean => {

    if(typeof window === 'undefined') return false

    let listFavorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return listFavorites.includes(id);
}

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
}

const localFavorites = {
    toggleFavorite,
    existInFavorites,
    pokemons,
}
export default localFavorites