import styled, { css } from "styled-components";

export default styled.button`
    height: 35px;
    border: none;
    padding: 0 16px;
    background: ${({ theme }) => theme.colors.success.main};
    font-size: 14px;
    font-weight: bold;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.background};
    margin-top: 16px;
    transition: background 0.2s ease-in;

    &+&{
        margin-left: 8px;
    }

    &:hover{
        background: ${({ theme }) => theme.colors.success.light};
    }

    &:active{
        background: ${({ theme }) => theme.colors.success.dark};
    }

    ${({ theme, attentionButton }) => attentionButton && css`
        background: ${theme.colors.warning.main};

      &:hover{
        background: ${theme.colors.warning.light};
      }

      &:active{
        background: ${theme.colors.warning.dark};
      }
    `}

    ${({ theme, dangerButton }) => dangerButton && css`
        background: ${theme.colors.danger.main};

      &:hover{
        background: ${theme.colors.danger.light};
      }

      &:active{
        background: ${theme.colors.danger.dark};
      }
    `}

    ${({ theme, primaryButton }) => primaryButton && css`
        background: ${theme.colors.primary.main};

      &:hover{
        background: ${theme.colors.primary.light};
      }

      &:active{
        background: ${theme.colors.primary.dark};
      }
    `}
`;
