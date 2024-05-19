import { Container } from './styles';
import { GoArrowLeft } from "react-icons/go";

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';

export function NewMovie() {
    return (
        <Container>
            <Header />
                <div className='frame'>
                    <div className='goBack'>
                        <GoArrowLeft />
                        <p>Voltar</p>
                    </div>

                    <h1>Novo Filme</h1>

                    <div className='inputs'>
                        <div className='firstInput'>
                            <Input placeholder='Título' />
                            <Input placeholder='Sua nota (0 a 5)'/>
                        </div>
                        <Input placeholder='Observações' className='observation'/>

                        <label>Marcadores</label>

                        //*MovieTRag
                    </div>
                </div>
        </Container>
    )
}