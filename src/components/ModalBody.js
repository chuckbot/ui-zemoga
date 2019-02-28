import styled from 'styled-components';

const ModalBody = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  z-index: 999;
  color: white;
  background: rgba(51,51,51,0.9);
  padding: 10px 20px;
`;

export default ModalBody;
