import { useTheme, Text, Spacer } from "@nextui-org/react"
import Image from "next/image"

export default function Navbar() {

    // const { theme } = useTheme()

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0.5rem 1rem',
            backgroundColor: '#333',
        }}>

            <Image
                src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}
                alt="icon of the app"
                width={40}
                height={40}
            >

            </Image>

            <Text color='white' h2>P</Text>
            <Text color='white' h3>okémon</Text>
            <Spacer css={{ flex: 1 }} />
            <Text color='white'>Favoritos</Text>


        </div>
    )
}
