import React, { ReactNode } from 'react'
import { ContentWrap, ResumeWrapper } from './styles'
import Button from '../Button'
import Text from '../Text'
import { moneyConvert } from '../../utils/priceUtils'
import theme from '../../theme'

export type paymentResumeProps = {
  itemsQuantity: number,
  total: number,
  shippingTotal: number,
  discount: number,
  subTotal: number,
  buttonLable: string,
  buttonColor?: keyof typeof theme.colors,
  onClick?: () => void
}

const PaymentResume = ({
  discount,
  itemsQuantity,
  shippingTotal,
  subTotal,
  total,
  buttonLable,
  buttonColor,
  onClick
}: paymentResumeProps) => {
  return (
    <ContentWrap>
      <ResumeWrapper>
        <Text
          color="black"
          fontSize="medium"
          fontWeight="normal"
          textalign="left"
          lineheight="medium"
          letterSpacing="0.27px"
        >
          {`Produtos: (${itemsQuantity} items)`}
        </Text>
        <Text
          color="black"
          fontSize="medium"
          fontWeight="normal"
          textalign="right"
          lineheight="medium"
          letterSpacing="0.27px"
        >
          {moneyConvert(total)}
        </Text>
        <Text
          color="black"
          fontSize="medium"
          fontWeight="normal"
          textalign="left"
          lineheight="medium"
          letterSpacing="0.27px"
        >
          Frete:
        </Text>
        <Text
          color="black"
          fontSize="medium"
          fontWeight="normal"
          textalign="right"
          lineheight="medium"
          letterSpacing="0.27px"
        >
          {moneyConvert(shippingTotal)}
        </Text>
        <Text
          color="black"
          fontSize="medium"
          fontWeight="normal"
          textalign="left"
          lineheight="medium"
          letterSpacing="0.27px"
        >
          Desconto:
        </Text>
        <Text
          color="purple"
          fontSize="medium"
          fontWeight="bold"
          textalign="right"
          lineheight="medium"
          letterSpacing="0.27px"
        >
          {moneyConvert(discount)}
        </Text>
        <Text
          color="black"
          fontSize="xmedium"
          fontWeight="bold"
          textalign="left"
          lineheight="medium"
          letterSpacing="0.27px"
        >
          Subtotal
        </Text>
        <Text
          color="black"
          fontSize="xmedium"
          fontWeight="bold"
          textalign="right"
          lineheight="medium"
          letterSpacing="0.27px"
        >
          {moneyConvert(subTotal)}
        </Text>
      </ResumeWrapper>
      <Button onClick={onClick} type="submit" backgroundColor={buttonColor}>
        <Text
          color="white"
          fontSize="large"
          fontWeight="bold"
          textalign="center"
          lineheight="medium"
        >
          {buttonLable}
        </Text>
      </Button>
    </ContentWrap>
  )
}

export default PaymentResume
