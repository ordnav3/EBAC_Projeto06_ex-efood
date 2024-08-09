import styled from 'styled-components'
import { cores } from '../../styles'
import lixeira from '../../assets/images/lixeira-de-reciclagem.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  cursor: pointer;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.salmon};
  z-index: 1;
  padding: 32px 16px 0 16px;
  max-width: 360px;
  width: 100%;
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px 0px 12px 8px;
  background-color: ${cores.antiqueWhite};
  position: relative;
  color: ${cores.salmon};
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
    font-weight: 400;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const TotalPrice = styled.div`
  color: ${cores.antiqueWhite};
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 700;
  margin-top: 40px;
`

export const CartButton = styled.button`
  margin-top: 16px;
  background-color: ${cores.antiqueWhite};
  color: ${cores.salmon};
  max-width: 100%;
  width: 100%;
  border: none;
  padding: 4px 0;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`
