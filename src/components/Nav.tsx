import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { motion } from 'framer-motion';
import ToggleDarkMode from './ui/Button/ToggleDarkMode';

export default function Nav() {
  const letterVariants = {
    initial: { opacity: 0, y: 50, scale: 0.8 },
    animate: { opacity: 1, y: 0, scale: 1 },
  };
  const text = 'React Projects';
  return (
    <nav className="flex items-center justify-between py-3">
      <Link to={'/'}>
        <motion.h1
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: { staggerChildren: 0.05, delayChildren: 0.1 },
            },
          }}
          className="font-fontMochiy mb-0 cursor-pointer text-xl font-medium tracking-wide text-nowrap uppercase"
        >
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              transition={{
                duration: 0.4,
                ease: 'easeOut',
                delay: index * 0.05, // Staggered entrance
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </Link>
      <div className="flex items-center space-x-3">
        <SearchBar />
        <ToggleDarkMode />
      </div>
    </nav>
  );
}
