import { styled } from 'styled-components'
import { cores } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
  list-style: none;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${cores.white};

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;
  background-color: ${cores.salmon};
  padding: 32px;
  display: flex;
`

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const ModalInfos = styled.div`
  margin-left: 24px;

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 16px;

    span {
      display: block;
      margin-top: 22px;
    }
  }
`

export const AddCart = styled.button`
  margin-top: 16px;
  padding: 4px 7px;
  display: block;
  background-color: ${cores.antiqueWhite};
  color: ${cores.salmon};
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
`

export const CloseButton = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  cursor: pointer;
`
