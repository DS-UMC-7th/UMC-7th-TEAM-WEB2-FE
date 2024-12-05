import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Dots = styled.div`
  display: flex;
  gap: 8px;

  & > div {
    width: 15px;
    height: 15px;
    background-color: ${({ theme }) => theme.colors.main};
    border-radius: 50%;
    animation: ${bounce} 1.4s infinite ease-in-out both;
  }

  & > div:nth-child(1) {
    animation-delay: -0.32s;
  }
  & > div:nth-child(2) {
    animation-delay: -0.16s;
  }
  & > div:nth-child(3) {
    animation-delay: 0s;
  }
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <Dots>
        <div></div>
        <div></div>
        <div></div>
      </Dots>
    </LoadingContainer>
  );
};

export default Loading;
