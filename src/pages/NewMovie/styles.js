import styled from "styled-components";

export const Container = styled.div`

    > .frame {
        padding: 4.4rem 12.3rem;
        width: 114rem;

        svg, p {
            color: ${({ theme }) => theme.COLORS.PINK_SALMON};
        }

        h1 {
            color: ${({ theme }) => theme.COLORS.JUST_WHITE} ;
            margin-bottom: 4rem;
        }

        > .goBack {
            display: flex;
            align-items: center;
            gap: .8rem;

            font-size: 1.6rem;

            margin-bottom: 2.4rem;
        }

        > .inputs {
            
            .observation {
                height: 27.4rem;
                padding-bottom: 19rem;
        }

        > .firstInput {
                display: flex;
                gap: 4rem;

                justify-content: center;

                margin-bottom: 4rem;

                input {
                    width: 42.7rem;
                }
        }

        label {
            color: ${({ theme }) => theme.COLORS.GRAY_DESCRIPTION};
            font-size: 1.6rem;

    
        }

        > .tagInfos {
            background-color: ${({ theme }) => theme.COLORS.BLACK_FIELD};

            height: 5rem;
            padding: 1.6rem;
            border-radius: .8rem;

            display: flex;
            align-items: center;
            gap: 2.4rem;

            margin-top: 1.4rem;

        }


    }

   
}


`;