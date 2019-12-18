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

    @media(max-width: 1100px) {
        width: 60%;
    }

    @media(max-width: 900px) {
        width: 80%;
    }

    @media(max-width: 600px) {
        width: 95%;
    }

    @media(max-width: 450px) {
        width: 95%;
        flex-direction: column;
    }
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

    @media(max-width: 450px) {
        width: 80%;
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

//  #TODO: wrap for yes/no buttons to flex-direction column @ 400px