import styled from 'styled-components';

export const LoadingWrapper = styled.div`
    #load {
        animation: spin 2s linear infinite;

        @keyframes spin {
            0% {transform: rotate(0deg)};
            100% {transform: rotate(360deg)};
        }
    }
`