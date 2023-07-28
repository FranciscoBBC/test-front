import React, { useCallback, useRef } from 'react'
import PaymentForm, { FormProps } from '../../../../components/PaymentForm'
import PaymentResume from '../../../../components/PaymentResume'
import useFormStore from '../../../../store/useFormStore'
import useNavigateStore from '../../../../store/useNavigateStore'
import useBagStore from '../../../../store/useBagStore'
import MainContent from '../../../../components/MainContent'

const Payment = () => {
  const addForm = useFormStore((state) => state.addForm)
  const bag = useBagStore((state) => state.bag)
  const navigate = useNavigateStore((state) => state.navigate)
  // prettier-ignore
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmitForm = useCallback((data: FormProps) => {
    addForm(data)
    navigate('Confirmação')
  }, [])

  return (
    <>
      <MainContent title="Cartão de crédito">
        <PaymentForm onSubmit={handleSubmitForm} ref={formRef}></PaymentForm>
      </MainContent>
      <PaymentResume
        onClick={() => {
          formRef.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
        }}
        buttonLable="Finalizar pedido"
        discount={bag.discount}
        itemsQuantity={bag.items.length}
        shippingTotal={bag.shippingTotal}
        subTotal={bag.subTotal}
        total={bag.total}
      />
    </>
  )
}

export default Payment
