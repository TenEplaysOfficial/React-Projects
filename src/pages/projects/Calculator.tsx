import { useState } from 'react';
import Display from '../../components/Display';
import Btn from '../../components/ui/Button/Btn';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { calculate } from '../../utils/utils';
import Head from '../../components/Head';

const keys = [
  'AC',
  'C',
  '%',
  '/',
  '7',
  '8',
  '9',
  '*',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
];

const operatorKeys = ['AC', 'C', '%', '/', '*', '-', '+', '='];

const keyStyles: { [key: string]: string | undefined } = {
  '=': 'col-span-2',
};

export default function Calculator() {
  const [value, setValue] = useState('');
  useDocumentTitle('Calculator');

  const handleClick = (key: string) => {
    // console.log(key);
    setValue(calculate(value, key));
  };

  return (
    <main>
      <Head text={'Calculator'} />
      <div className="mx-auto max-w-[90%] lg:w-[50%]">
        <Display
          text={value}
          customStyle="text-right bg-transparent text-4xl rounded-b-none"
        />
        <div className="grid min-h-[480px] grid-cols-4 gap-2 rounded-b-xl p-2 ring-2 ring-indigo-600 sm:h-[550px]">
          {keys.map((key) => {
            const isOperator = operatorKeys.includes(key);
            const Style = isOperator
              ? 'bg-zinc-500 hover:bg-zinc-600 active:bg-zinc-700'
              : 'hover:bg-indigo-600 active:bg-indigo-700';
            return (
              <Btn
                text={key}
                key={key}
                onClick={() => handleClick(key)}
                customStyle={`text-3xl ${keyStyles[key]} ${Style}`}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
