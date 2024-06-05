import { Container } from './styles';
import { PiX, PiPlus } from "react-icons/pi";

export function Tag({ $isNew, title, ...rest}) {
    return (
        <Container $isNew={$isNew} {...rest}>
            <input 
                type="text"
                readOnly={!$isNew}
            />
                       
           <button
                type='button'
                className={$isNew ? 'button-add' : 'button-delete'}>

                {$isNew ? <PiPlus /> : <PiX />}

            </button>

        </Container>
    )
}