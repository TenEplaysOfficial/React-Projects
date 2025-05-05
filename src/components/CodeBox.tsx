import { Copy } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CodeBox({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) {
  return (
    <pre className="flex w-full items-center justify-between gap-x-4 rounded-lg bg-gray-300 p-4 dark:bg-gray-800">
      <code className="m-0 select-none">{title}</code>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        className="cursor-pointer rounded-lg bg-gray-400 p-2 dark:bg-gray-700"
      >
        <Copy size={20} />
      </motion.button>
    </pre>
  );
}
