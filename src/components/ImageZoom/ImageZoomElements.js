import styled from "styled-components";

export const DropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0.9;
  overflow-y: hidden;
`;

export const ZoomContainer = styled.div`
  max-width: 1300px;
  max-height: 420px;
  border-radius: 10px;
  z-index: 31;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
  padding: 30px;
`;

export const ZoomHead = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CloseIcon = styled.img`
  cursor: pointer;
`;

export const ZoomImg = styled.img`
  object-fit: cover;
`;
