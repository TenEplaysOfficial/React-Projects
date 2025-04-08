import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function BackBtn({ text = 'Back' }: { text?: string }) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <motion.button
      onClick={handleBack}
      onTap={handleBack}
      whileHover={{ scale: 1.05 }}
      className="cursor-pointer text-lg text-blue-500 underline"
    >
      {text}
    </motion.button>
  );
}
