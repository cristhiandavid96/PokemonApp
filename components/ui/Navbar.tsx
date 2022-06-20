import { useTheme, Text, Spacer, Link} from "@nextui-org/react"
import Image from "next/image"
import NextLink from 'next/link'

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

            <NextLink href="/" passHref>
                <Link>  
                    <Text color='white' h2>P</Text>
                    <Text color='white' h3>okémon</Text>
                </Link>
            </NextLink>
            
            <Spacer css={{ flex: 1 }} />

            <NextLink href="/favorites"  passHref>
                <Link css={{marginRight:'10px'}}>  
                    <Text color='white'>Favoritos</Text>
                </Link>
            </NextLink>


        </div>
    )
}
