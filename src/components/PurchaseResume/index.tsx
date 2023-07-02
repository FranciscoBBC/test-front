import React from 'react'
import Text from '../Text'
import { ContentWrapper } from './styles'
import useMask from '../../utils/maskUtil'

type purchaseResumeProps = {
  cardNumber: string,
  cardOwner: string,
  expirationDate: string
}

const PurchaseResume = ({ cardNumber, cardOwner, expirationDate }: purchaseResumeProps) => {
  const cardCensored = useMask('cardCensored')

  return (
    <ContentWrapper>
      <Text
        color="black"
        fontSize="xxlarge"
        fontWeight="normal"
        lineHeight="xlarge"
        textAlign="center"
      >
        Compra efetuada com sucesso
      </Text>
      <Text
        color="darkGray"
        fontWeight="normal"
        fontSize="xmedium"
        lineHeight="xmedium"
        textAlign="center"
      >
        {cardCensored(cardNumber)}
      </Text>
      <Text
        color="darkGray"
        fontWeight="normal"
        fontSize="xmedium"
        lineHeight="xmedium"
        textAlign="center"
      >
        {cardOwner}
      </Text>
      <Text
        color="darkGray"
        fontWeight="normal"
        fontSize="xmedium"
        lineHeight="xmedium"
        textAlign="center"
      >
        {expirationDate}
      </Text>
    </ContentWrapper>
  )
}

export default PurchaseResume
