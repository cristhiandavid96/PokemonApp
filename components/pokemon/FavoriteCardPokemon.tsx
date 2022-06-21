import * as React from 'react'
import { useRouter } from "next/router"
import { Card, Grid } from "@nextui-org/react"

interface Props {
    pokemonId: number
}

export const FavoriteCardPokemon: React.FC<Props> = ({ pokemonId }) => {

    const router = useRouter()

    const onFavoriteClicked = () =>  router.push(`/pokemon/${pokemonId}`)
    

    return (
        <Grid xs={12} sm={6} md={4} lg={3} key={pokemonId}  onClick={onFavoriteClicked}>
            <Card isHoverable isPressable css={{ padding: 10 }}>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                    width={'100%'}
                    height={140}
                   
                />
            </Card>
        </Grid>
    )
}

