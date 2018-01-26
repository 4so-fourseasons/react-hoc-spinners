import styled from 'styled-components'

const Wrapper = styled.div`
    position: relative;

    margin-top: 50px;
    margin: 0 auto;

    width: ${props => props.size}px;
    height: ${props => props.size}px;

    transform: rotateZ(45deg);
`

export default Wrapper
