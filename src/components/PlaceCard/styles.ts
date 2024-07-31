import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${cores.white};
  margin-bottom: 48px;
  position: relative;
  overflow: hidden;
`
export const TagContainer = styled.div`
  background-color: ${cores.salmon};
  color: ${cores.white};
  font-weight: bold;
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  padding: 6px 4px;
  margin-right: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const imageCard = styled.img`
  width: 472px;
  max-height: 217px;
  vertical-align: middle;
  object-fit: cover;
`

export const InfosContainer = styled.div`
  border: solid 1px ${cores.salmon};
  border-top: none;
  padding: 8px;
  height: 217px;
`

export const TitleContainer = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 700;
  color: ${cores.salmon};
`

export const TextContainer = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${cores.salmon};
  margin: 16px 0;
`

export const Nota = styled.div`
  align-items: center;

  img {
    width: 21px;
    margin-left: 8px;
  }
`

export const BunttonPlace = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  color: ${cores.antiqueWhite};
  background-color: ${cores.salmon};
  padding: 4px;
`
