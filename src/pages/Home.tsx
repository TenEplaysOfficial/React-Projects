import { useSearchParams } from 'react-router-dom';
import ProjectCards from '../components/ProjectCards';
import Title from '../components/ui/Title';

export default function Home() {
  const [searchParams] = useSearchParams();

  const search = searchParams.get('search') || '';

  return (
    <main>
      <Title text="List of projects" className="mb-5 text-center" />
      <ProjectCards search={search} />
    </main>
  );
}
