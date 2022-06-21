import { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { FavoritePokemons } from '../../components/pokemon'
import { NoFavorites } from '../../components/ui'
import { LocalFavorites } from '../../helpers'


function FavoritesPage() {

  const [favoritesPokemons, setFavoritesPokemon] = useState<number[]>([])


  useEffect(() => {
    setFavoritesPokemon(LocalFavorites.pokemons())
  }, [])

  return (
    <Layout title="Pokémons - Favoritos">

      {favoritesPokemons.length === 0 ? (<NoFavorites />) :
        (
          <FavoritePokemons pokemons={favoritesPokemons} />
        )
      }
    </Layout>
  )
}

export default FavoritesPage