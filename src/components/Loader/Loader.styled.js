import styled from 'styled-components';

export const StyledLoader = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;

  width: 100%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background: rgba(255, 255, 255, 0.8);
`;
