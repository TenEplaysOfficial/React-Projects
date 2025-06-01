interface Project {
  title: string;
  description: string;
  url: string;
}

const projectsData: Project[] = [
  {
    title: 'Counter',
    description:
      "The Counter Project is a React app teaching state management and user interaction, allowing users to increment, decrement, and reset a counter. It demonstrates React's component-based structure and state handling with hooks for real-time updates and responsive UIs.",
    url: '/counter',
  },
  {
    title: 'New Year Countdown',
    description:
      'The Countdown To New Year is a React component that displays a live countdown timer to the upcoming New Year. It calculates the time remaining in days, hours, minutes, and seconds, updating every second.',
    url: '/countdown-newyear',
  },
  {
    title: 'Calculator',
    description:
      'The Calculator Project is a React app that performs basic arithmetic operations. It features a responsive UI with a simple design, allowing users to add, subtract, multiply, and divide numbers.',
    url: '/calculator',
  },
  {
    title: 'To-do',
    description:
      'The Todo List component allows users to manage tasks effectively. It features an input field for adding new tasks and a Submit button. Users can view tasks in a list, with a Remove button for each task. Tasks are stored in local storage for persistence, and duplicates are prevented with an alert, ensuring an organized user experience.',
    url: '/todo',
  },
  {
    title: 'Accordion (faq)',
    description:
      'An Accordion (FAQ) Component is a UI element used to display a list of questions (or headings) that can be expanded or collapsed to show or hide the corresponding answers (or content).',
    url: 'accordion-faq',
  },
  {
    title: '@tenedev/toast',
    description:
      '@tenedev/toast is a lightweight, customizable React component library for displaying toast notifications. It enables developers to show alerts, success messages, and other notifications in a smooth, non-intrusive way.',
    url: 'package/toast',
  },
  {
    title: 'Image Slider',
    description: 'A lightweight, customizable, and responsive slideshow component for React.',
    url: 'image-slider',
  },
  {
    title: 'Compound Component',
    description: 'A Compound Component is a design pattern in React where multiple components are designed to work together to form a single, cohesive UI element.',
    url: 'compound-component',
  },
];

export default projectsData;
