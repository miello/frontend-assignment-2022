import React, { createContext, useCallback, useRef, useState } from 'react'
import { AlertBox, CloseButton } from './styled'
import { AlertType, IAlertContext } from './types'

export const AlertContext = createContext<IAlertContext>({} as IAlertContext)

export function AlertProvider(props: React.PropsWithChildren<{}>) {
  const [message, setMessage] = useState('')
  const [alertType, setAlertType] = useState<AlertType>('error')
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<number>(-1)

  const triggerAlert = useCallback(
    (message: string, type: AlertType) => {
      if (open) {
        return
      }

      setMessage(message)
      setAlertType(type)

      setOpen(true)
      timeoutRef.current = window.setTimeout(() => {
        setOpen(false)
      }, 5000)
    },
    [open]
  )

  const cancelAlert = useCallback(() => {
    window.clearTimeout(timeoutRef.current)
    setOpen(false)
  }, [])

  return (
    <AlertContext.Provider value={{ triggerAlert }}>
      <AlertBox type={alertType} open={open}>
        {message}
        <CloseButton width="20px" onClick={cancelAlert} />
      </AlertBox>
      {props.children}
    </AlertContext.Provider>
  )
}
