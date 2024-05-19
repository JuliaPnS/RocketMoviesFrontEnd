import styled from 'styled-components';

export const Container = styled.div`
    
    color: ${({ theme }) => theme.COLORS.JUST_WHITE};

    > .header {
        background-color: rgba(255,133,155,5%);
        height: 8rem;

        .back {
            display: flex;
            flex-direction: row;
            align-items: center;

            padding-top: 3rem;
            padding-left: 14.6rem;
            gap: 0.3rem;

            color: ${({ theme }) => theme.COLORS.PINK_SALMON};

        }

            svg:hover, p:hover {
                color: #FF9EB0;
                cursor: pointer;
            }

        > .profile {
            img {
                margin-left: 52.8rem;                
                border-radius: 9.3rem;
                border: 0.01px solid #3E3B47;

                height: 13rem;
                width: 13rem;
                cursor: pointer;
            }

            .icon {
                position: relative;

                width: 2.6rem;
                height: 2.6rem;

                margin-left: 63.4rem;
                margin-top: -5rem;
                 
                background-color: ${({ theme }) => theme.COLORS.PINK_SALMON};
                border-radius: 9rem;

                :hover {
                    background-color: #FF9DAF;
                    border-radius: 9rem;
                }

            svg { 
                color: ${({ theme }) => theme.COLORS.BROWN_BACKGROUND};
                width: 2rem;
                height: 2rem;

                top: .3rem;
                right: 0.3rem;
                position: absolute;

                }
                
                svg:hover {
                    transform: scale(1.1);
                    transition: 0.2s;
                }
            }
        }
    }

    > .frame {
        margin: 0 auto;
        margin-top: 12rem;       

        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        width: 34rem;
        height: 5.6rem;

        .login {
            display: flex;
            flex-direction: column;
            gap: .8rem;

        }

        .password {
            display: flex;
            flex-direction: column;
            gap: .8rem;

            margin-bottom: 2.4rem;
        }

        .button {
            justify-content: center;
            opacity: .7;
            cursor: pointer;

         
        }

        .button:hover {
                opacity: 1;
                transition: 3ms;
            }

        
    }

 






    

`