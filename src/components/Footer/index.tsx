import { Link } from 'react-router-dom'

import * as S from './styles'

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram-round-svgrepo-com.png'
import facebook from '../../assets/images/facebook-round-svgrepo-com.png'
import twitter from '../../assets/images/twitter-2-svgrepo-com.png'

const Footer = () => (
  <S.FooterContainer>
    <Link to={'/'}>
      <img src={logo} alt="efood" />
    </Link>
    <S.SocialList>
      <li>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img src={instagram} alt="facebook" />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/?locale=pt_BR"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="facebook" />
        </a>
      </li>
      <li>
        <a href="https://x.com/?lang=pt-br" target="_blank" rel="noreferrer">
          <img src={twitter} alt="twitter" />
        </a>
      </li>
    </S.SocialList>
    <S.Text className="myContainer">
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Text>
  </S.FooterContainer>
)

export default Footer
