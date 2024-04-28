import { Container } from './styles';
import  { Tag } from '../Tag';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";



export function MovieInformation() {
    return (
        <Container>
            <div className='frame'>
                <section>
                    <h2>Interstellar</h2>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <p>
                    Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. 
                    Cooper, ex-piloto da NASA, tem uma fazenda com sua família. 
                    Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...
                    </p>
                    <div className='tags'>

                    <Tag title="Ficção Científica"/>
                    <Tag  title="Drama"/>
                    <Tag  title="Família"/>
                </div>
                </section>

                

            </div>
        
        </Container>
    )
}