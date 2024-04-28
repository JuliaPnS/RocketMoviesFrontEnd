import { Container } from './styles';
import { Input } from '../Input';
import Profile from '../../assets/profile.png'

export function Header() {
    return (
        <Container>
            <div>
                <h1>RocketMovies</h1>
            </div>
            <Input placeholder='Pesquisar pelo título'/>
            <div className='profile'>
                <section>
                    <h3>Júlia Penna</h3>
                    <p>sair</p>
                </section>
                <img src={Profile} alt="Foto de Perfil" />
            </div>
        </Container>
    )
}