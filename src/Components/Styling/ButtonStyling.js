import styled from 'styled-components';

export const PinkButton = styled.button`
   display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 12px 12px 12px;
    background: #F5F5F5;
    border-radius: 40px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    border: none;
    font-family: SatoshiMedium;
    text-decoration: none;

    &:hover {
        background: #EB5577;
        color: #FFFFFF;
    }
`;

export const BlueButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 12px 12px 12px;
    background: #F5F5F5;
    border-radius: 40px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    border: none;
    font-family: SatoshiMedium;
    text-decoration: none;

    &:hover {
        background: #0B24F5;
        color: #FFFFFF;
    }
`;
