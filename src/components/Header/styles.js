import styled from 'styled-components';

export const Container = styled.div`
    top: 0;

    display: flex;
    align-items: center;
    gap: 6.4rem;

    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.BROWN_BACKGROUND};

    border-bottom: 0.01px solid #3E3B47;

    padding: 4.2rem;

    h1 {
        color: ${({ theme }) => theme.COLORS.PINK_SALMON};
        font-size: 2.4rem;
    }

    > .profile {
        display: flex;
        align-items: center;
        gap: 0.9rem;

        font-size: 1.4rem;

        section {
            width: 12.4rem;
            text-align: end;
            cursor: pointer;

            p {
                color: ${({ theme }) => theme.COLORS.JUST_GRAY};
            }

            p:hover {
                color: #837F87;
            }
        }

        img {
            border-radius: 6.4rem;
            border: 0.01px solid #3E3B47;

            height: 6.4rem;
            width: 6.4rem;
            cursor: pointer;
        }

    }

 

`;