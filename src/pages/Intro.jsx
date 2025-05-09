import { useEffect, useState } from 'react';

const IntroType = ({ onFinish }) => {
  const [phase, setPhase] = useState('loading');
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Langsung mulai dari fase loading
    const loadingTimeout = setTimeout(() => {
      setFadeOut(true);
      const doneTimeout = setTimeout(() => {
        setPhase('done');
        onFinish?.();
      }, 1000); // durasi fade out

      return () => clearTimeout(doneTimeout);
    }, 3500); // durasi loading

    return () => clearTimeout(loadingTimeout);
  }, []);

  if (phase === 'done') return null;

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-slate-900 text-xl lg:text-2xl transition-all duration-1000 ${fadeOut ? 'opacity-0 -translate-y-40' : 'opacity-100 translate-y-0'}`}>
      <div className="flex flex-col items-center gap-2 mt-6">
        <p className="text-lg lg:text-3xl font-poppins text-slate-600 dark:text-slate-300">Running Portfolio Website 🚀</p>
        <div className="flex gap-1 pt-2">
          <span className="w-4 h-4 bg-[#6497B1] rounded-full animate-bounce [animation-delay:0.1s]" />
          <span className="w-4 h-4 bg-[#6497B1] rounded-full animate-bounce [animation-delay:0.3s]" />
          <span className="w-4 h-4 bg-[#6497B1] rounded-full animate-bounce [animation-delay:0.5s]" />
          <span className="w-4 h-4 bg-[#6497B1] rounded-full animate-bounce [animation-delay:0.7s]" />
        </div>
      </div>
    </div>
  );
};

export default IntroType;
