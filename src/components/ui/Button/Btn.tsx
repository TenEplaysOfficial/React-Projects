import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Btn({
  validUrl,
  text,
  onClick,
  customStyle,
}: {
  validUrl?: string;
  text: string;
  onClick?: () => void;
  customStyle?: string;
}) {
  const buttonContent = (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`font-fontKanit mx-auto w-full cursor-pointer rounded-lg bg-indigo-500 px-4 py-2 text-center text-lg font-semibold tracking-widest ${
        customStyle
      }`}
    >
      {text}
    </motion.button>
  );

  return validUrl ? <Link to={validUrl}>{buttonContent}</Link> : buttonContent;
}
