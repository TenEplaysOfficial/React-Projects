// Toast
export type ToastProps = 'success' | 'error' | 'info' | 'warning' | 'default';

export interface ToasterProps {
  position?:
    | 'bottom-left'
    | 'bottom-mid'
    | 'bottom-right'
    | 'top-left'
    | 'top-mid'
    | 'top-right';
}
