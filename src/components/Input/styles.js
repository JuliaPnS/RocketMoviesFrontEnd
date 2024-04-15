import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BROWN_TAG1};
    border-radius: 1rem;

    display: flex;
    align-items: center;
    
    > input {
        background: transparent;
        border: none;
        padding: 1.4rem 2.4rem;

        width: 63rem;

        font-size: 1.4rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.JUST_GRAY};

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.JUST_GRAY};
        }
    }
`;