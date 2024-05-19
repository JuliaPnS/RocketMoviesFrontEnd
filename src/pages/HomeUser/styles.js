import styled from 'styled-components';

export const Container = styled.div`
    
    color: ${({ theme }) => theme.COLORS.JUST_WHITE};

    .frame {
        padding: 5.8rem 12.3rem;


        .subHeader {
            display: flex;            
        }

        h1 {
            font-weight: 400;
            font-size: 3.2rem;

            margin-right: 55rem;
            margin-bottom: 4.45rem;
            width: 18.4rem;
            white-space: nowrap;

        }



    }

`