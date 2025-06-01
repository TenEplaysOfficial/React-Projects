import useDarkMode from '../../../hooks/useDarkMode';

export default function ToggleDarkMode() {
  const { toggleDarkMode, isDarkMode } = useDarkMode();

  return (
    <div
      onClick={toggleDarkMode}
      className="place--center relative h-8 w-14 cursor-pointer rounded-3xl bg-slate-300 dark:bg-zinc-700"
    >
      <div
        className={`absolute top-1 h-6 w-6 rounded-full bg-blue-500 ${isDarkMode ? 'left-1' : 'right-1'}`}
      />
    </div>
  );
}
