export default function Display({
  text,
  customStyle,
}: {
  text: string;
  customStyle?: string;
}) {
  return (
    <input
      type="text"
      value={text}
      disabled
      className={`font-fontPoppins dark:bg-zinc-800", size-full rounded-xl bg-gray-200 px-3 py-2 text-2xl font-semibold tracking-wider ring-2 ring-indigo-600 ${
        customStyle
      }`}
    />
  );
}
