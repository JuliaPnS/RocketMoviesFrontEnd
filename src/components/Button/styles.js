import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.PINK_SALMON};

    color: ${({ theme }) => theme.COLORS.JUST_BLACK};
    font-size: 1.6rem;

    display: flex;
    align-items: center;
    gap: 2.5rem;

    padding: 1.35rem 3.2rem;

    border-radius: 0.8rem;

    white-space: nowrap;



`;