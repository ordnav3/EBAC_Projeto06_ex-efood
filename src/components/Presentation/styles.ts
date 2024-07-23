import styled from 'styled-components'
import { cores } from '../../styles'

export const Presentation = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 24px 170px 32px;
  margin-bottom: 56px;
`

export const PresentationContainer = styled.div`
  color: ${cores.white};
`

export const Category = styled.h3`
  font-size: 32px;
  font-weight: 100;
  margin-bottom: 150px;
`

export const PlaceName = styled.h2`
  font-size: 32px;
  font-weight: 900;
`
