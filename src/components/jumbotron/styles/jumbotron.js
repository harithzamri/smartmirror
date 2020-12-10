import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${({ image }) => `images/${image}.jpg`});
  align-items: center;
  min-height: 420px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 80px 0 80px;
`;

export const SmallText = styled.h5`
  color: #fff;
  opacity: 0.8;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 4.5rem;
  font-weight: 600;
  margin: 0;
`;
