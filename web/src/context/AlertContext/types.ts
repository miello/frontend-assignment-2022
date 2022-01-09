export type AlertType = 'success' | 'error'
export interface IAlertContext {
  triggerAlert(message: string, type: AlertType): void
}
