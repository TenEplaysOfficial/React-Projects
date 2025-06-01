import useCounter from '../../hooks/useCounter';
import Title from '../../components/ui/Title';
import Btn from '../../components/ui/Button/Btn';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Head from '../../components/Head';

export default function Counter() {
  const { increment, decrement, reset, count } = useCounter();

  useDocumentTitle('Counter');

  return (
    <main>
      <Head text="Counter" />
      <Title
        text={`Count is ${count}`}
        className="mb-10 text-center text-2xl uppercase"
      />
      <div className="flex flex-col justify-center space-y-4 md:flex-row md:gap-x-4 md:space-y-0">
        <Btn
          customStyle="bg-green-500"
          text="Increment"
          onClick={() => increment()}
        />
        <Btn customStyle="bg-red-500" text="Reset" onClick={() => reset()} />
        <Btn
          customStyle="bg-yellow-500"
          text="Decrement"
          onClick={() => decrement()}
        />
      </div>
    </main>
  );
}
