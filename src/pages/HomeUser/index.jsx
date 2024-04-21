import MediaQuery, { useMediaQuery } from 'react-responsive';
import { PiPlusLight } from "react-icons/pi";

import { Container } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { MovieInformation } from '../../components/Information';


export function HomeUser() {
    return (
        <Container>
            <Header />
            <div className='frame'>
                <div className='subHeader'>
                    <h1>Meus Filmes</h1>
                    <Button className='button'
                        title={'Adicionar Filme'}
                        icon={PiPlusLight}
                    />
                </div>
            <div className='subFrame'>
                <MovieInformation></MovieInformation>
            </div>
             
            </div>

          
           
            
        </Container>
    )
}