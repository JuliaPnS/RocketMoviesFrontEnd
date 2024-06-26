import styled  from 'styled-components';

export const Container = styled.div`
   > .frame { 

    display: flex;
    gap: 16.3rem;

    img {
        width: 100%;
        height: 100vh;

        opacity: 0.3;
    }
 
   
   .loginFrame {

        margin-left: 13.4rem;
        text-align: center;

        width: 34rem;

        h1, a{
            color: ${({ theme }) => theme.COLORS.PINK_SALMON};
        }

        h1 {
            margin-top: 10rem;
            font-size: 4.8rem;
            font-weight: bold;
            text-align: start;
        }

        p {
            color: ${({ theme }) => theme.COLORS.GRAY_WHITE};
            font-size: 1.4rem;
            margin-bottom: 4.8rem;
            text-align: start;
        }
        
 
        .inputs {

            width: 34rem;

            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: .8rem;

            h4 {
                color: ${({ theme }) => theme.COLORS.GRAY_WHITE};
                font-size: 2.4rem;
                font-weight: 500;

                margin-bottom: 4.8rem;

                align-self: start;
            }
        }

        .button {
            margin-top: 2.4rem;
            margin-bottom: 4.2rem;

            padding: 1.6rem 14.5rem;

            cursor: pointer;
        }

        .button:hover {
            background-color: #FF9EB0;
            font-weight: bold;
            transition: 10ms;


        }

        a:hover {
            color: #FF9EB0
        }
        
    }

}

`;