import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;


    h3 {
        font-size: 26px;
    }
`

export const InputWrap = styled.div`
    width: 40%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`

export const InputField = styled.input`
    width: ${props => props.wdth};
    height: 30px;
    margin: 0 auto;
    border: none;
    padding: 5px 15px;
    border-radius: 15px;
    margin-bottom: 20px;

    &:focus {
        outline: none;
    }
`

export const Button = styled.button`
    width: 120px;
    margin: 0 auto;
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 15px;
    padding: 5px;
    font-size: 18px;
    color: #fff;
`