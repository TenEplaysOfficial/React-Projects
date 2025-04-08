import { ToastProps } from '../types';

let addToast: (message: string, type: ToastProps) => void = () => {};

const toast = (message: string) => {
  addToast(message, 'default');
};

toast.success = (message: string) => addToast(message, 'success');
toast.error = (message: string) => addToast(message, 'error');
toast.info = (message: string) => addToast(message, 'info');
toast.warning = (message: string) => addToast(message, 'warning');

const setAddToast = (fn: (message: string, type: ToastProps) => void) => {
  addToast = fn;
};

export { toast, setAddToast };
