import Title from './ui/Title';
import BackBtn from './ui/Button/BackBtn';

export default function Head({ text }: { text: string }) {
  return (
    <div className="mb-3 flex items-baseline justify-between">
      <Title text={text} />
      <BackBtn />
    </div>
  );
}
