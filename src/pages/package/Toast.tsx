import { toast, Toaster } from '@tenedev/toast';
import Head from '../../components/Head';
import Title from '../../components/ui/Title';
import CodeBox from '../../components/CodeBox';
import Btn from '../../components/ui/Button/Btn';

export default function Toast() {
  const copy = (text: string) => {
    toast.success('Copied to clipboard');
    navigator.clipboard.writeText(text);
  };
  return (
    <main>
      <Toaster gap={10} />
      <Head text="@tenedev/toast" />
      <section className="mx-auto space-y-12 sm:max-w-[90%]">
        <Title text="Install via npm or yarn" size="sm" />
        <div className="my-4 flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <CodeBox
            title="npm install @tenedev/toast"
            onClick={() => copy('npm install @tenedev/toast')}
          />
          <CodeBox
            title="yarn add @tenedev/toast"
            onClick={() => copy('yarn add @tenedev/toast')}
          />
        </div>

        <p className="text-xl">
          @tenedev/toast is a lightweight, customizable React component library
          for displaying toast notifications. It enables developers to show
          alerts, success messages, and other notifications in a smooth,
          non-intrusive way.
          <a
            href="https://github.com/TenEplaysOfficial/toast"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sky-500 underline"
          >
            Star us on GitHub
          </a>
        </p>
        <Title size="sm" text="Render a Toast" />
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
          <Btn
            customStyle="bg-white text-black border-3"
            text="Default"
            onClick={() => toast('Default toast')}
          />
          <Btn
            customStyle="bg-green-500"
            text="Success"
            onClick={() => toast('Success toast')}
          />
          <Btn
            customStyle="bg-yellow-500"
            text="Warning"
            onClick={() => toast('Warning toast')}
          />
          <Btn
            customStyle="bg-red-500"
            text="Error"
            onClick={() => toast('Error toast')}
          />
          <Btn
            customStyle="bg-sky-500"
            text="Info"
            onClick={() => toast('Info toast')}
          />
        </div>
      </section>
    </main>
  );
}
