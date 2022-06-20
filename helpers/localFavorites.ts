

const toggleFavorite = (id:number) => {

    console.log('toggleFavorite');    
    let listFavorites:number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if( listFavorites.includes(id) ){
        listFavorites = listFavorites.filter(item => item !== id);
    }else{
        listFavorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(listFavorites));
}

export default {
    toggleFavorite,
}