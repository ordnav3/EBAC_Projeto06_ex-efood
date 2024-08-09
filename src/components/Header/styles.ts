import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'

export const Header = styled.header`
  width: 100%;
  height: 160px;
  background-repeat: no-repeat;
  background-size: cover;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding-top: 60px;
`

export const Logo = styled(Link)`
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

export const Links = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.salmon};
  text-decoration: none;
`

export const CartButton = styled.button`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.salmon};
  border: none;
  background-color: transparent;
  cursor: pointer;
`
