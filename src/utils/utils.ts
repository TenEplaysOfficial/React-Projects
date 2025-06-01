export const countDownNextYear = (year: number) => {
  const now = new Date();
  const nextYear = new Date(year, 0, 1);
  const diff = nextYear.getTime() - now.getTime();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  return {
    days: String(days).padStart(2, '0'),
    hrs: String(hrs).padStart(2, '0'),
    mins: String(mins).padStart(2, '0'),
    secs: String(secs).padStart(2, '0'),
  };
};

export const calculate = (value: string, key: string) => {
  switch (key) {
    case 'AC':
      return '';

    case 'C':
      return value === 'Error' ? '' : value.slice(0, -1);

    case '=':
      if (value === '') return;
      try {
        const result = eval(value);
        return result.toString() || '';
      } catch {
        return 'Error';
      }
    default:
      return value + key;
  }
};

export const formatTime = (date: Date) => {
  const hrs = date.getHours();
  const mins = date.getMinutes();
  const secs = date.getSeconds();
  const isPM = hrs >= 12;
  const formattedHrs = hrs % 12 || 12;
  const amPm = isPM ? 'PM' : 'AM';
  return `${String(formattedHrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')} ${amPm}`;
};

export const getFormatedTime = (n: number) => {
  const days = Math.floor(n / (24 * 3600));
  const hours = Math.floor((n % (24 * 3600)) / 3600);
  const minutes = Math.floor((n % 3600) / 60);
  const remainingSeconds = n % 60;

  return `${days}:${hours}:${minutes}:${remainingSeconds}`;
};

export const getCurrentDate = () => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: '2-digit',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  };
  return date.toLocaleDateString(undefined, options);
};
