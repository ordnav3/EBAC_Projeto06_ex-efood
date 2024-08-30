import styled from 'styled-components'
import { cores } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  h3 {
    font-size: 16px;
    font-weight: 700;
    color: ${cores.antiqueWhite};
    margin-bottom: 16px;
  }

  label {
    font-size: 14px;
    font-weight: 700;
    color: ${cores.antiqueWhite};
    display: block;
    padding-bottom: 8px;
    cursor: pointer;
  }

  input {
    width: 100%;
    height: 32px;
    border: none;
    background-color: ${cores.antiqueWhite};
    padding: 4px;
    margin-bottom: 8px;
  }

  &.error {
    border: 1px solid red;
  }
`

export const Row = styled.div`
  display: flex;
  column-gap: 30px;
`

export const Button = styled.button`
  width: 100%;
  margin-bottom: 8px;
  border: none;
  background-color: ${cores.antiqueWhite};
  color: ${cores.salmon};
  font-weight: 700;
  font-size: 14px;
  height: 24px;
  padding: 4px 0;
  cursor: pointer;

  &.margin-top {
    margin-top: 24px;
  }
`
export const OrderCompletion = styled.div`
  color: ${cores.antiqueWhite};

  h3 {
    font-size: 16px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    padding: 16px 0;
  }
`
