import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BROWN_TAG1};
    border-radius: 1rem;

    display: flex;
    align-items: center;

    svg {
        width: 3rem;
        height: 3rem;

        margin-left: 1.6rem;
        margin-right: 1.6rem;

        color: ${({ theme }) => theme.COLORS.JUST_GRAY};

    }

    
    > input {
        background: transparent;
        border: none;

        width: 63rem;

        padding-top: 1.7rem;
        padding-bottom: 1.7rem;
        padding-left: 2.4rem;

        font-size: 1.4rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.JUST_GRAY};

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.JUST_GRAY};
        }

    }
`;