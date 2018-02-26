import styled from 'react-emotion';

export default styled('input')`
    width: 100%;
    margin-bottom: 20px;
    padding: 15px;
    background-color: ${props => props.play ? '#FFFFFF' :  '#000000'};
    color: #20C20E;
    border: ${props => props.play ? '3px solid transparent' :  '1px solid #181919;'};
    outline: none;
    border-radius: 4px;
    box-sizing: border-box;
`;