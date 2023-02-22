import styled from 'styled-components'

export const PageW = styled.div`
    padding: 108px 85px;
    background: #E5E5E5;
`;

export const Title = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 55px;
    text-align: center;
    letter-spacing: -0.01em;
    color: #1B264F;
    max-width: 675px;
    margin: 0px auto;
    span {
        color: #506BCA;
    }
`;

export const CardsW = styled.div`
    margin-top: 80px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px
`;

export const Card = styled.div`
    display: flex;
    background: #FFFFFF;
    border-radius: 8px;
`;

export const CardImageW = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 3px;
`;

export const CardImage = styled.img``;

export const CardData = styled.div`
    padding: 40px 30px 40px 34px;
    flex: 60%;
`;

export const CardTitle = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #353844;
`;

export const CardDescription = styled.div`
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: #353844;
    margin-top: 12px;
`;

export const OptionList = styled.ul`
    margin-top: 12px;
    list-style: none;
    padding-left: 0px;
`;

export const OptionListItem = styled.li`
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 26px;
    color: #353844;
    &:before {
        content: "•"; 
        color: #D2AD81;
        margin-right: 8px;
    }
`;

export const Button = styled.button`
    width: 315px;
    height: 60px;
    background: #1B264F;
    border-radius: 12px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 60px;

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.2em;
    text-transform: uppercase;

    color: #FFFFFF;
    margin: 80px auto 0px; 
    display: flex;
    justify-content: center;
    cursor: pointer;
`
