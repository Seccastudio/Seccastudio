import { useEffect, useRef } from 'react';

const useSlideIn = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => observer.observe(el));

    // Cleanup observer when component unmounts
    return () => observer.disconnect();
  }, []);

  return elementsRef;
};

export default useSlideIn;
