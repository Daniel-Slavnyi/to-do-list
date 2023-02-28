import styled from '@emotion/styled/macro';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 20px;
  width: 260px;
  background-color: #ffffff;
  border-radius: 25px;
  border: 1px solid #24cca7;
`;
