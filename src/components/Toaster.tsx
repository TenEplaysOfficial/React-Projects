import { useState, useEffect, useCallback } from 'react';
import { setAddToast } from '../utils/toast';
import { ToasterProps, ToastProps } from '../types';
import { AnimatePresence, motion } from 'framer-motion';

interface Toast {
  id: string;
  message: string;
  type: ToastProps;
}

const AddToast = ({
  message,
  type,
  position,
}: {
  message: string;
  type: ToastProps;
  position: string;
}) => {
  let bgColor = 'bg-gray-800';

  switch (type) {
    case 'success':
      bgColor = 'bg-green-500';
      break;
    case 'error':
      bgColor = 'bg-red-500';
      break;
    case 'info':
      bgColor = 'bg-blue-500';
      break;
    case 'warning':
      bgColor = 'bg-yellow-500';
      break;
    default:
      break;
  }

  const toastVariants = {
    'top-left': {
      hidden: { opacity: 0, y: -20, x: -20 },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: { type: 'spring', stiffness: 150 },
      },
      exit: { opacity: 0, y: -20, x: -20, transition: { duration: 0.3 } },
    },
    'top-right': {
      hidden: { opacity: 0, y: -20, x: 20 },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: { type: 'spring', stiffness: 150 },
      },
      exit: { opacity: 0, y: -20, x: 20, transition: { duration: 0.3 } },
    },
    'top-mid': {
      hidden: { opacity: 0, y: -20, scale: 0.9 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: 'spring', stiffness: 150 },
      },
      exit: { opacity: 0, y: -20, scale: 0.9, transition: { duration: 0.3 } },
    },
    'bottom-left': {
      hidden: { opacity: 0, y: 20, x: -20 },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: { type: 'spring', stiffness: 150 },
      },
      exit: { opacity: 0, y: 20, x: -20, transition: { duration: 0.3 } },
    },
    'bottom-right': {
      hidden: { opacity: 0, y: 20, x: 20 },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: { type: 'spring', stiffness: 150 },
      },
      exit: { opacity: 0, y: 20, x: 20, transition: { duration: 0.3 } },
    },
    'bottom-mid': {
      hidden: { opacity: 0, y: 20, scale: 0.9 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: 'spring', stiffness: 150 },
      },
      exit: { opacity: 0, y: 20, scale: 0.9, transition: { duration: 0.3 } },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={toastVariants[position as keyof typeof toastVariants]}
        className={`toast mb-2 w-[356px] rounded p-4 text-white ${bgColor}`}
      >
        <p>{message}</p>
      </motion.div>
    </AnimatePresence>
  );
};

const Toaster = ({ position = 'bottom-right' }: ToasterProps) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback(
    (message: string, type: ToastProps = 'default') => {
      const id = crypto.randomUUID();
      setToasts((prevToasts) => [...prevToasts, { id, message, type }]);

      setTimeout(() => {
        setToasts((prevToasts) =>
          prevToasts.filter((toast) => toast.id !== id),
        );
      }, 4000);
    },
    [],
  );

  useEffect(() => {
    setAddToast(addToast);
  }, [addToast]);

  const positionStyles = {
    'top-left': 'top-2 left-2',
    'top-mid': 'top-2 left-1/2 -translate-x-1/2',
    'top-right': 'top-2 right-2',
    'bottom-left': 'bottom-2 left-4',
    'bottom-mid': 'bottom-2 left-1/2 -translate-x-1/2',
    'bottom-right': 'bottom-2 right-2',
  };

  return (
    <div className={`fixed z-[1000] space-y-2 ${positionStyles[position]}`}>
      {(position.startsWith('top') ? toasts.reverse() : toasts).map((toast) => (
        <div key={toast.id}>
          <AddToast
            message={toast.message}
            type={toast.type}
            position={position}
          />
        </div>
      ))}
    </div>
  );
};

export default Toaster;
