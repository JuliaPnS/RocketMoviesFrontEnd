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

        h1, a {
            color: ${({ theme }) => theme.COLORS.PINK_SALMON};
        }

        h1 {
            margin-top: 5rem;
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

        a {
            font-size: 1.6rem;
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
            margin-bottom: 3rem;

            padding: 1.68rem 12.7rem 1.5rem 12.6rem;

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

        .link {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.25rem;

            svg {
                width: 1.6rem;
                height: 1.6rem;

                color: ${({ theme }) => theme.COLORS.PINK_SALMON};

            }
        }
        
    }

}

`;