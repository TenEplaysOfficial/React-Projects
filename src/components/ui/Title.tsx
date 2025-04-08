export default function Title({
  text,
  className,
  size = 'md',
}: {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  return (
    <h1
      className={`font-bold ${className} ${size === 'lg' ? 'text-6xl' : size === 'sm' ? 'text-3xl' : 'text-4xl'}`}
    >
      {text}
    </h1>
  );
}
