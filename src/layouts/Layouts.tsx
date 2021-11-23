import styled from "styled-components";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export default function Layouts({ children }: LayoutProps) {
  return <MainLayout>{children}</MainLayout>;
}

const MainLayout = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #98c1d9;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  padding: 10px;
  @media (min-width: 766px) {
    flex-direction: column;
  }
`;
