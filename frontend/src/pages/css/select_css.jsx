import styled from 'styled-components'

export const DivBtn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px;

`
export const Button = styled.button`
    background-color: #ffcccc;
    width: 350px;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    margin: 4px;
    color: black;
    border: 2px solid #FFA8A8;
    border-radius: 30px ;
    padding: 0px;

    &:hover {
        background-color: #FF7676;
        border: 2px solid red;
        color: white;
        cursor: pointer;
        box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.3); 

    }
`