import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import * as S from './styles'
import { usePurchaseMutation } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { clear, close } from '../../store/reducers/cart'
import { getTotalPrice, parseToBrl } from '../../utils'
import { useNavigate } from 'react-router-dom'

const Checkout = ({ setPayment }: { setPayment: (value: boolean) => void }) => {
  const navigate = useNavigate()
  const [purchase, { data, isSuccess, isLoading, error }] =
    usePurchaseMutation()
  const [userAdress, setUserAdress] = useState(false)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const totalPrice = getTotalPrice(items)

  const form = useFormik({
    initialValues: {
      fullName: '',
      adress: '',
      city: '',
      zipCode: '',
      houseNumber: '',
      complement: '',
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('O campo é obrigatório'),
      adress: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(8, 'O CEP precisa ser válido')
        .max(8, 'O CEP precisa ser válido')
        .required('O campo é obrigatório'),
      houseNumber: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string(),
      cardDisplayName: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(13, 'O cartão precisa ser válido')
        .max(16, 'O cartão precisa ser válido')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'O cartão precisa ser válido')
        .max(3, 'O cartão precisa ser válido')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'O mês precisa ser válido')
        .max(2, 'O mês precisa ser válido')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(2, 'O ano precisa ser válido')
        .max(2, 'O ano precisa ser válido')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      console.log('Submitting:', values) // Adicionado para depuração
      purchase({
        delivery: {
          fullName: values.fullName,
          completeAdress: {
            adress: values.adress,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.houseNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            code: Number(values.cardCode),
            name: values.cardDisplayName,
            number: values.cardNumber,
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const completeOrder = () => {
    navigate('/')
    dispatch(clear())
    dispatch(close())
  }

  const adresIsValid = () => {
    form.setTouched({
      fullName: true,
      adress: true,
      city: true,
      zipCode: true,
      houseNumber: true
    })

    form.validateForm().then((errors) => {
      if (
        !errors.fullName &&
        !errors.adress &&
        !errors.city &&
        !errors.zipCode &&
        !errors.houseNumber
      ) {
        setUserAdress(true)
      } else {
        alert('Complete os dados de entrega')
      }
    })
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <>
      <form onSubmit={form.handleSubmit}>
        {userAdress && !isSuccess && (
          <>
            <S.InputGroup>
              <h3>Pagamento - Valor a pagar {parseToBrl(totalPrice)} </h3>
              <label htmlFor="cardDisplayName">Nome no cartão</label>
              <input
                type="text"
                id="cardDisplayName"
                name="cardDisplayName"
                value={form.values.cardDisplayName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cardDisplayName') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.Row>
              <S.InputGroup maxWidth="228px">
                <label htmlFor="cardNumber">Número do cartão</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardNumber') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup maxWidth="87px">
                <label htmlFor="cardCode">CVV</label>
                <input
                  type="text"
                  id="cardCode"
                  name="cardCode"
                  value={form.values.cardCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardCode') ? 'error' : ''}
                />
              </S.InputGroup>
            </S.Row>
            <S.Row>
              <S.InputGroup>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <input
                  type="text"
                  id="expiresMonth"
                  name="expiresMonth"
                  value={form.values.expiresMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('expiresMonth') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <input
                  type="text"
                  id="expiresYear"
                  name="expiresYear"
                  value={form.values.expiresYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('expiresYear') ? 'error' : ''}
                />
              </S.InputGroup>
            </S.Row>
            <S.Button className="margin-top" type="submit" disabled={isLoading}>
              {isLoading ? 'Finalizando pagamento...' : 'Finalizar Pagamento'}
            </S.Button>
            <S.Button
              type="button"
              onClick={() => setUserAdress(false)}
              disabled={isLoading}
            >
              Voltar para a edição de endereço
            </S.Button>
          </>
        )}
        {!userAdress && !isSuccess && (
          <>
            <S.InputGroup>
              <h3>Entrega</h3>
              <label htmlFor="fullName">Quem irá receber</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={form.values.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('fullName') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="adress">Endereço</label>
              <input
                type="text"
                id="adress"
                name="adress"
                value={form.values.adress}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('adress') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                id="city"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('city') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.Row>
              <S.InputGroup>
                <label htmlFor="zipCode">CEP</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={form.values.zipCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('zipCode') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="houseNumber">Número</label>
                <input
                  type="text"
                  id="houseNumber"
                  name="houseNumber"
                  value={form.values.houseNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('houseNumber') ? 'error' : ''}
                />
              </S.InputGroup>
            </S.Row>
            <S.InputGroup>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                type="text"
                id="complement"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('complement') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.Button
              type="button"
              className="margin-top"
              onClick={() => adresIsValid()}
            >
              Continuar com o pagamento
            </S.Button>
            <S.Button onClick={() => setPayment(false)}>
              Voltar para o carrinho
            </S.Button>
          </>
        )}
      </form>
      {isSuccess && data && userAdress && (
        <S.OrderCompletion>
          <h3>Pedido realizado {data.orderId}</h3>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite
          </p>
          <S.Button className="margin-top" onClick={() => completeOrder()}>
            Concluir
          </S.Button>
        </S.OrderCompletion>
      )}
    </>
  )
}

export default Checkout
