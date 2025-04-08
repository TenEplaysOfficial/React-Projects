import { useMemo } from 'react';
import projectsData from '../data/projects';
import Btn from './ui/Button/Btn';
import { motion } from 'framer-motion';

export default function ProjectCards({ search }: { search: string }) {
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) =>
      project.title.trim().toLowerCase().includes(search.trim().toLowerCase()),
    );
  }, [search]);

  if (filteredProjects.length === 0) {
    return (
      <p className="text-center text-2xl font-bold uppercase">
        No projects available
      </p>
    );
  }

  return (
    <div className="grid gap-4 pb-6 md:grid-cols-2 lg:grid-cols-3">
      {/* <div className="md:columns-2 lg:columns-3 py-6 space-y-10"> */}
      {filteredProjects
        .slice()
        .reverse()
        .map((project) => {
          const { title, description, url } = project;
          const validUrl = url || '#';

          return (
            <motion.div
              whileHover={{ translateY: '-10px' }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              key={url}
              className="mt-6 flex min-h-[300px] flex-col justify-evenly space-y-3 rounded-xl bg-slate-300 px-4 py-2 shadow-lg backdrop-blur-lg dark:bg-zinc-800"
            >
              <h2 className="font-fontMochiy text-2xl tracking-wider">
                {title}
              </h2>
              <p className="font-fontPoppins text-xl leading-relaxed text-slate-700 sm:line-clamp-8 dark:text-slate-300/75">
                {description}
              </p>
              <Btn
                validUrl={validUrl}
                text={'View'}
                customStyle="bg-indigo-600"
              />
            </motion.div>
          );
        })}
    </div>
  );
}
