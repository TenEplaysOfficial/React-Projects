import { useEffect, useRef } from 'react';

export default function useDocumentTitle(setTitle: string) {
  const prevTitleRef = useRef(document.title);
  useEffect(() => {
    const originalTitle = prevTitleRef.current;

    if (document.title !== `${setTitle} | ${originalTitle}`) {
      // console.log("Setup title");
      document.title = `${setTitle} | ${originalTitle}`;
    }
    return () => {
      // console.log("Reset title");
      document.title = originalTitle;
    };
  }, [setTitle]);
}
