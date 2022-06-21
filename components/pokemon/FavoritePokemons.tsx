import { Card, Grid } from '@nextui-org/react'
import { FavoriteCardPokemon } from './'

interface Props {
    pokemons: number[]
}

export const FavoritePokemons: React.FC<Props> = ({ pokemons }) => {

    return (
        <Grid.Container gap={2} direction='row' justify='flex-start'>

            {pokemons.map(pokemon => (
                <FavoriteCardPokemon key={pokemon} pokemonId={pokemon} />                  
            ))
            }
        </Grid.Container>

    )

}
