import { Search, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import useWindowSize from '../hooks/useWindowSize';
import useDebounce from '../hooks/useDebounce';

export default function SearchBar() {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const [inputQuery, setInputQuery] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const isMobile = useWindowSize();
  const debouncedValue = useDebounce(inputQuery, 300);

  useEffect(() => {
    if (debouncedValue.trim() === '') {
      navigate(location.pathname);
    } else {
      navigate(`/?search=${encodeURIComponent(debouncedValue)}`);
    }
  }, [debouncedValue, navigate]);

  const handleSearch = (value: string) => {
    setInputQuery(value);
  };

  const handleFocus = () => {
    setInputQuery('');
    navigate(location.pathname);
    inputRef.current?.focus();
  };

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        closePopup();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isPopupOpen) {
      inputRef.current?.focus();
    }
  }, [isPopupOpen]);

  return (
    <>
      {isMobile ? (
        <>
          <Search onClick={openPopup} className="size-6 cursor-pointer" />
          <AnimatePresence>
            {isPopupOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed inset-0 z-10 bg-white/5 backdrop-blur-xs"
              >
                <motion.div
                  ref={popupRef}
                  initial={{ opacity: 0, translateY: 10 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  exit={{ opacity: 0, translateY: 20 }}
                  transition={{ duration: 0.4 }}
                  className="mx-auto mt-10 flex max-w-[90%] items-center rounded-xl bg-slate-100 px-2 text-xl font-medium tracking-wider ring-2 placeholder:opacity-85 focus-within:ring-indigo-500 dark:bg-white/10 dark:ring-zinc-600 dark:focus-within:ring-indigo-600"
                >
                  <input
                    id="search-input"
                    name="search-query"
                    type="search"
                    ref={inputRef}
                    placeholder="Search Projects"
                    onChange={(e) => handleSearch(e.target.value)}
                    value={inputQuery}
                    className="h-14 flex-1 border-none bg-transparent outline-none placeholder:text-black/65 dark:placeholder:text-white/65"
                  />
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inputQuery ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X onClick={handleFocus} className="cursor-pointer" />
                  </motion.span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <div className="hidden items-center rounded-xl bg-slate-100 px-3 py-1 text-xl font-medium tracking-wider ring-2 placeholder:opacity-85 focus-within:ring-indigo-500 sm:flex dark:bg-white/10 dark:ring-zinc-600 dark:focus-within:ring-indigo-600">
          <input
            id="search-input"
            name="search-query"
            type="search"
            ref={inputRef}
            placeholder="Search Projects"
            onChange={(e) => handleSearch(e.target.value)}
            value={inputQuery}
            className="flex-1 border-none bg-transparent outline-none placeholder:text-black/65 dark:placeholder:text-white/65"
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: inputQuery ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <X onClick={handleFocus} className="cursor-pointer" />
          </motion.span>
        </div>
      )}
    </>
  );
}
