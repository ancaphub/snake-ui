import styled from "styled-components";
import { CircularLoaderProps } from "./CircularLoader";

export const CircularLoaderContainer = styled.div<CircularLoaderProps>`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
  & > svg {
    width: ${(props) => props.size || 72}px;
    height: ${(props) => props.size || 72}px;
    animation: spin 1s linear infinite;
  }
`;
