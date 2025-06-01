import { useEffect, useState } from 'react';
import { countDownNextYear } from '../../utils/utils';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Head from '../../components/Head';

const year = new Date().getFullYear() + 1;

export default function CountdownNewYear() {
  const [timeLeft, setTimeLeft] = useState(countDownNextYear(year));
  useDocumentTitle(`Countdown To New Year ${year}`);
  useEffect(() => {
    const interval = setInterval(
      () => setTimeLeft(countDownNextYear(year)),
      1000,
    );
    return () => clearInterval(interval);
  }, []);

  const { days, hrs, mins, secs } = timeLeft;

  return (
    <main>
      <Head text={`Countdown To New Year ${year} `} />
      <time className="font-fontKanit flex min-h-[500px] items-center justify-between text-6xl font-bold sm:h-[550px] sm:text-8xl md:text-9xl">
        <Part set={days} text="Day" />
        <span>:</span>
        <Part set={hrs} text="Hr" />
        <span>:</span>
        <Part set={mins} text="Min" />
        <span>:</span>
        <Part set={secs} text="Sec" />
      </time>
    </main>
  );
}

const Part = ({ set, text }: { set: string; text: string }) => {
  return (
    <p>
      <span className="group relative">
        {set}
        <span className="font-fontPoppins absolute -bottom-2 left-4 text-5xl opacity-35 transition-all duration-700 group-hover:opacity-55">
          {text}'s
        </span>
      </span>
    </p>
  );
};
