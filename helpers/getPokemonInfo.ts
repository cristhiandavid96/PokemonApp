
import { Pokemon } from '../interfaces';
import { PokemonApi } from '../services';


export const getPokemonInfo = async (nameOrId: string) => {

    const { data } = await PokemonApi.get<Pokemon>(`/pokemon/${nameOrId}`);


    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites,
    }


}
