import styled from 'styled-components'
import { cores } from '../../styles'

export const CardContainer = styled.div`
  background-color: ${cores.salmon};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 360px;
  color: ${cores.antiqueWhite};
  padding: 8px;
  margin-bottom: 32px;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin-top: 8px;
`

export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`

export const Button = styled.button`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  border: none;
  padding: 4px;
  width: 100%;
  align-self: flex-end;
  background-color: ${cores.antiqueWhite};
  color: ${cores.salmon};
`
