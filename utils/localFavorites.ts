const localFavorites = (id: number) => {
    let favoritos: number[] = JSON.parse( localStorage.getItem('favoritos') || '[]' );
    
    if (favoritos.includes( id )) {
        favoritos = favoritos.filter(pokeId => pokeId !== id)
    } else {
        favoritos.push(id)
    }

    localStorage.setItem('favoritos', JSON.stringify( favoritos ))
}

const existInFavorites = (id: number): boolean => {
    if (typeof window === 'undefined') return false

    const favorites: number[] = JSON.parse( localStorage.getItem('favoritos') || '[]' );

    return favorites.includes(id)
}

const exportedFunctions = {localFavorites, existInFavorites}
export default exportedFunctions
