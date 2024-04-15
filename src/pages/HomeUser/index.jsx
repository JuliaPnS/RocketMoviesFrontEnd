import MediaQuery, { useMediaQuery } from 'react-responsive';


import { Container } from './styles';
import { Header } from '../../components/Header';


export function HomeUser() {
    return (
        <Container>
            <Header />
            <div className='frame'>
                <h1>Meus Filmes</h1>
            </div>
            
        </Container>
    )
}