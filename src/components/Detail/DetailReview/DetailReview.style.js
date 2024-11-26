import styled from "styled-components";

const ReviewContainer = styled.div`
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  margin-top: 4vw;
  padding: 50px 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  box-sizing: border-box;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.black};
  display: block;
  margin-bottom: 13px;
  font-family: "Elice DX Neolli";
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 124.9%;
`;

const Icon = styled.img`
  width: 9px;
  height: 10.145px;
  margin-right: 13px;
`;

const Count = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-family: "Elice DX Neolli";
  font-size: ${(props) => props.fontSize};
  font-style: normal;
  font-weight: 500;
  margin: 15px 0;
`;

const ReviewButton = styled.button`
  border-radius: 20px;
  border: 1px solid #e55f00;
  background: #fff6eb;
  font-family: "Elice DX Neolli";
  font-weight: 500;
  font-size: 17px;

  width: 12vw;
  height: 3vw;

  box-shadow: 2px 3px 7px 1px rgba(0, 0, 0, 0.25);

  &:hover {
    background: #fdead9;
  }
`;

export { ReviewContainer, Section, Label, Icon, Count, ReviewButton };
