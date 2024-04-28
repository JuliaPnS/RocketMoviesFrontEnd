import { Container } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import Image from '../../assets/imagelogin.png'

import { GoLock } from "react-icons/go";
import { CiMail } from "react-icons/ci";


export function SignIn() {
    return (
        <Container>
            <div className='frame'>    
                <div className='loginFrame'>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                        <div className='inputs'>
                            <h4>Faça seu login</h4>
                            <Input
                                icon={CiMail}
                                placeholder='E-mail'/>
                            <Input 
                                icon={GoLock}
                                placeholder='Senha'
                            />
                        </div>

                        <Button title='Entrar' className='button'/>

                        <a href="#blank">Criar Conta</a>
                </div>
                <img src={Image} alt='Imagem de cadeiras de cinema'/>   
            </div>
        </Container>
    )
}