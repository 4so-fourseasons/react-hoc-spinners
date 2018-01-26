import styled from 'styled-components'

const Cube = styled.div`
  position: relative;
  float: left;

  width: 50%;
  height: 50%;

  transform: scale(1.1) ${props => props.rotateZ ? `rotateZ(${props.rotateZ})` : ''};

  &:before {
    @keyframes foldthecube {
      0%, 10% {
          transform: perspective(140px) rotateX(-180deg);
          opacity: 0;
      }

      25%,
      75% {
          transform: perspective(140px) rotateX(0deg);
          opacity: 1;
      }

      90%,
      100% {
          transform: perspective(140px) rotateY(180deg);
          opacity: 0;
      }
    }

    content: '';

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: ${props => props.color};

    animation: foldthecube 2.4s infinite linear both;
    ${props => props.delay ? `animation-delay: ${props.delay}s;` : ''}
    transform-origin: 100% 100%;
  }
`

export default Cube
