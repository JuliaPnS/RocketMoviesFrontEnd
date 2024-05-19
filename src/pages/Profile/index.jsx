import MediaQuery, { useMediaQuery } from 'react-responsive';

import { Container } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import ProfileImage from '../../assets/profile.png'

import { GoArrowLeft } from "react-icons/go";
import { CiCamera } from "react-icons/ci";
import { GoLock } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { PiUserThin } from "react-icons/pi";





export function Profile() {
    return (
        <Container>
            <div className='header'>
                <div className='back'>
                    <GoArrowLeft />
                    <p>Voltar</p>
                </div>
                
                <div className='profile'>
                    <img src={ProfileImage} alt="Profile Image" />
                        <div className='icon'>
                            <CiCamera />
                        </div>
                </div>

            </div>

            <div className='frame'>
                <div className='login'>
                    <Input placeholder="Júlia Linda" icon={PiUserThin}/>
                    <Input placeholder="julialinda@gmail.com" icon={CiMail}/>
                </div>
                <div className='password'>
                    <Input placeholder="Senha atual" icon={GoLock}/>
                    <Input placeholder="Nova senha"  icon={GoLock}/>
                </div>

                <Button title="Salvar" className='button'/>
            </div>
         


          
           
            
        </Container>
    )
}