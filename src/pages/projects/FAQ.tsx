import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Head from '../../components/Head';
import Btn from '../../components/ui/Button/Btn';

const data = [
  {
    name: 'What is React?',
    bio: 'React is a JavaScript library for building UIs.',
  },
  {
    name: 'How does React work?',
    bio: 'React uses a virtual DOM to optimize rendering.',
  },
  {
    name: 'What is JSX?',
    bio: 'JSX is a syntax extension for JavaScript that looks like XML/HTML.',
  },
  {
    name: 'What is JSX?',
    bio: 'JSX is a syntax extension for JavaScript that looks like XML/HTML.',
  },
];

export default function FAQ() {
  const [openMultiple, setOpenMultiple] = useState(false);
  const [index, setIndex] = useState<number | null>(null);
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleFAQ = (i: number) => {
    if (openMultiple) {
      setOpenItems((prev) =>
        prev.includes(i) ? prev.filter((item) => item !== i) : [...prev, i],
      );
    } else {
      setIndex((prev) => (prev === i ? null : i));
    }
  };

  return (
    <main>
      <Head text="Accordion (faq)" />
      <Btn
        text={`Toggle openMultiple ${openMultiple}`}
        onClick={() => setOpenMultiple((prev) => !prev)}
        customStyle="mb-6 "
      />
      <section>
        <h2 className="text-2xl font-bold">FAQ</h2>
        <div className="space-y-4 divide-y-2 divide-black dark:divide-white">
          {data.map((d, i) => (
            <div key={i} className="pt-3">
              <div
                onClick={() => toggleFAQ(i)}
                className="group flex items-center justify-between hover:cursor-pointer"
              >
                <button className="font-fontKanit flex-1 text-left text-lg tracking-wide sm:text-2xl">
                  {d.name}
                </button>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    (openMultiple ? openItems.includes(i) : index === i)
                      ? 'rotate-180'
                      : ''
                  }`}
                />
              </div>

              <AnimatePresence>
                {(openMultiple ? openItems.includes(i) : index === i) && (
                  <motion.div
                    className="font-fontPoppins overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      stiffness: 300,
                    }}
                  >
                    <p className="pt-2 text-base sm:text-xl">{d.bio}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
