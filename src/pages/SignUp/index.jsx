import { Container } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import Image from '../../assets/imagelogin.png'

import { GoLock } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { PiUserThin } from "react-icons/pi";
import { GoArrowLeft } from "react-icons/go";



export function SignUp() {
    return (
        <Container>
            <div className='frame'>    
                <div className='loginFrame'>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                        <div className='inputs'>
                            <h4>Crie sua Conta</h4>
                            <Input icon={PiUserThin} placeholder='Nome'/>
                            <Input icon={CiMail} placeholder='E-mail'/>
                            <Input icon={GoLock} placeholder='Senha'/>
                            
                        </div>

                        <Button title='Cadastrar' className='button'/>

                        <div className='link'><GoArrowLeft /> <a href="#blank">Voltar para o login</a></div>
                </div>
                <img src={Image} alt='Imagem de cadeiras de cinema'/>   
            </div>
        </Container>
    )
}