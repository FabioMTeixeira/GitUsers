import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const Brand = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    >h1 {
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    `
export const Search = styled.div`
    display: flex;

    >input {
        padding-inline: 3px;

        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        border-radius: 4px;
    }

    >button {
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        border: none;
        border-radius: 4px;
    }
`

export const Card = styled.main`
    display: flex;
    flex-direction: column;
    gap: 10px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_CARD};
    border-radius: 20px;
    padding: 10px 2px;

    >table,
    th,
    td {
        border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_900};
        border-collapse: collapse;
        padding: 5px;
    }
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
    >img {
        max-width: 200px;
        max-height: 200px;

        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
`