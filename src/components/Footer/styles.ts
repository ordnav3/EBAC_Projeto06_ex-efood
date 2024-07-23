import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  margin-top: 120px;
  background-color: ${cores.antiqueWhite};
  padding: 40px;
  text-align: center;
  width: 100%;

  .myContainer {
    max-width: 480px;
  }
`

export const SocialList = styled.ul`
  padding-left: 0;
  list-style: none;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    margin-top: 32px;
    margin-bottom: 80px;
    padding: 8px;
  }
`

export const Text = styled.p`
  color: ${cores.salmon};
  font-size: 10px;
  font-weight: 400;
  line-height: 11.72px;
`
