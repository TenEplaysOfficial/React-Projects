import { useEffect, useState } from 'react';
import Head from '../../components/Head';
import { Trash2 } from 'lucide-react';
import { AnimatePresence, motion, PanInfo, useAnimation } from 'framer-motion';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { toast } from '../../utils/toast';

interface TodoProps {
  id: number;
  title: string;
}

const listItemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 },
};

interface TodoItemProps {
  todo: TodoProps;
  index: number;
  removeTodo: (id: number) => void;
}

function TodoItem({ todo, index, removeTodo }: TodoItemProps) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const handleDragEnd = (info: PanInfo) => {
    if (info.offset.x > 500) {
      removeTodo(todo.id);
    } else {
      controls.start({ x: 0, transition: { type: 'spring' } });
    }
  };

  return (
    <motion.li
      drag="x"
      dragConstraints={{ left: 0, right: 100 }}
      onDragEnd={(_, info) => handleDragEnd(info)}
      variants={listItemVariants}
      initial="hidden"
      animate={controls}
      exit="exit"
      transition={{
        damping: 20,
        stiffness: 400,
      }}
      className="flex justify-between rounded-md border p-4"
    >
      <div className="flex items-center space-x-4">
        <motion.span
          key={index + 1}
          initial={{ y: 20, opacity: 0 }}
          exit={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {index + 1}
        </motion.span>
        <span>{todo.title}</span>
      </div>
      <span>
        <Trash2
          onClick={() => removeTodo(todo.id)}
          className="cursor-pointer hover:text-red-500"
        />
      </span>
    </motion.li>
  );
}

export default function Todo() {
  const [text, setText] = useState('');
  const [data, setData] = useState<TodoProps[]>([]);

  useDocumentTitle('Todo');

  const addTodo = () => {
    const trimmedText = text.trim();
    if (trimmedText === '') {
      toast(`Task cannot be empty!`);
      return;
    }

    const alreadyExist = data.some(
      (todo) => todo.title.toLowerCase() === trimmedText.toLowerCase(),
    );
    if (alreadyExist) {
      toast(`Task already exists!`);
      return;
    }

    setData([...data, { id: Date.now(), title: trimmedText }]);
    toast(`Task '${trimmedText}' has been created!`);
    setText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const removeTodo = (id: number) => {
    const todoToRemove = data.find((todo) => todo.id === id);
    setData(data.filter((todo) => todo.id !== id));
    toast(`Task '${todoToRemove?.title}' has been removed.`);
  };

  return (
    <main>
      <Head text="Todo App" />
      <div className="flex h-14 w-full rounded-lg border">
        <input
          placeholder="Type...."
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent p-2 text-xl outline-none"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={addTodo}
          className="pr-4 text-xl"
        >
          Submit
        </motion.button>
      </div>

      <AnimatePresence>
        <motion.div className="mt-3 flex items-center justify-center">
          <ul className="w-full space-y-6 overflow-hidden">
            {data.map((todo, index) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                index={index}
                removeTodo={removeTodo}
              />
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
