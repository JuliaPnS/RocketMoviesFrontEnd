import styled from 'styled-components';

export const Container = styled.div`

    color: ${({ theme }) => theme.COLORS.JUST_WHITE};
    .frame {
        padding: 12.3rem;
        padding-top: 4rem;
        height: 22.22rem;

        > .name {

            height: 5.2rem;
            display: flex;
            

            h2 {
               margin-right: 1.9rem;
            }

            svg {
                margin-top: .8rem;
                margin-right: .6rem;
                color: ${({ theme }) => theme.COLORS.PINK_SALMON};

            }
        }

        > .tags {
            display: flex;
            gap: .8rem;
            input {
                width: 15rem;
                height: 3rem;

                text-align: center;
                padding-left: 0;
            }
           
        }

        > .profileInfos  {
            display: flex;
            align-items: center;
            gap: .8rem;
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.JUST_WHITE};

            margin-bottom: 2rem;
        
        > h4 {
            font-weight: 300;
        }          

        img {
            border-radius: 6.4rem;
            border: 0.01px solid #3E3B47;

            height: 1.6rem;
            width: 1.6rem;
        }

        .hours {
            display: flex;
            align-items: center;
            gap: .5rem;

            svg {
                color: ${({ theme }) => theme.COLORS.PINK_SALMON};
            }
        }
    }

    > section {
            margin-top: 2.5rem;
            margin-bottom: 4rem;
            text-align: justify;
            p {
                font-weight: 400;
                margin-bottom: 2rem;
            }
        }

}
    
`;