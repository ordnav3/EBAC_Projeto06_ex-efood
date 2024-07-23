import styled from 'styled-components'
import { cores } from '../../styles'

export const HeroContainer = styled.section`
  width: 100%;
  height: 360px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px;
  text-align: center;
  margin-bottom: 80px;

  .myContainer {
    max-width: 540px;
  }
`

export const Logo = styled.img`
  width: 125px;
  margin-bottom: 140px;
`

export const HeroText = styled.p`
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  color: ${cores.salmon};
`
