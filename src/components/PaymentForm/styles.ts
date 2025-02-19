import styled, { css } from 'styled-components'

export const Form = styled.form`
  ${({ theme }) => css`
    justify-content: center;
    grid-gap: ${theme.spacings.medium};
    display: grid;
    width: 100%;
    grid-column-end: 3;
    grid-column-start: 1;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
  `}
`

const inputWrapper = css`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`

export const Input =
  styled.input <
  { error: boolean } >
  `
  ${({ theme, error }) => css`
    width: 100%;
    height: 44px;
    background: ${theme.colors.white};
    border: ${theme.border.size} solid ${error ? theme.colors.red : theme.colors.gray};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.medium};
    margin: 4px 0 0 0;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};
    ::placeholder {
      color: ${theme.colors.gray};
    }
  `}
`

export const InputFullWidth = styled.div`
  ${inputWrapper}
  grid-column-start: 1;
  grid-column-end: 3;
`

type inputProps = {
  position: 'left' | 'right'
}

const inputModifiers = {
  right: () => css`
    grid-column-start: 1;
    grid-column-end: 2;
  `,
  left: () => css`
    grid-column-start: 2;
    grid-column-end: 3;
  `
}

export const InputHalfWidth =
  styled.div <
  inputProps >
  `
  ${({ position }) => css`
    ${inputWrapper}
    ${inputModifiers[position]()}
  `}
`
