import styled from "styled-components";

export const Container = styled.div`
    .frame {
        background-color: rgba(255,133,155,5%);
        border-radius: 1.6rem;

        padding: 3.2rem;
        height: 22.22rem;

        > section {

            height: 5.2rem;

            p {
                font-size: 1.6rem;
                color: ${({ theme }) => theme.COLORS.GRAY_DESCRIPTION};

                margin-top: 1rem;
                margin-bottom: 1rem;
            }

            svg {
                margin-top: .8rem;
                margin-right: .6rem;
                color: ${({ theme }) => theme.COLORS.PINK_SALMON};

            }

            .tags {
                display: flex;
                align-items: center;
                gap: .8rem;

                .tagsInformation {
                    height: 2.4rem;
                    width: 100%;

                    padding-left: 0;

                    text-align: center;
                }
            }
        }  
    }
   
`