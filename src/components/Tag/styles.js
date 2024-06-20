import styled from 'styled-components';

export const Container = styled.div`
height: 3rem;
    

background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.BROWN_TAG1};

padding: 0.62rem 1rem;
border-radius: 0.5rem;

border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.JUST_GRAY}` : "none"};

display: flex;
align-items: center;
gap: 0.5rem;
justify-content: center;

> button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.JUST_WHITE};
}

.button-delete {
    color: ${({ theme }) => theme.COLORS.JUST_WHITE};
}


.button-add {
    color: ${({ theme }) => theme.COLORS.JUST_WHITE};
}


> input {
    border: none;
    background: transparent;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    text-align: center;
    width: 100%;

    color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.JUST_WHITE : theme.COLORS.JUST_WHITE};

    &::placeholder {
        color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.JUST_GRAY: theme.COLORS.JUST_WHITE}
    }
    
}

`;