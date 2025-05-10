import { useRef, useState } from 'react';
import Intro from '../pages/Intro.jsx';
import Home from '../section/Home.jsx';
import { ScrollProgress } from "../components/magicui/scroll-progress.tsx";

const PageWrapper = () => {
  const [showMain, setShowMain] = useState(false);
  const containerRef = useRef(null); // ← ini penting

  return (
    <>
      {!showMain && <Intro onFinish={() => setShowMain(true)} />}

      <div
        ref={containerRef}
        className={`transition-all duration-1000 ease-in-out ${
          showMain ? 'opacity-100' : 'opacity-0'
        } relative z-10 overflow-y-auto h-screen`}
      >
        {showMain && <Home show={showMain} />}
      </div>

      {/* scroll progress dipasang setelah konten muncul */}
      {showMain && <ScrollProgress containerRef={containerRef} />}
    </>
  );
};

export default PageWrapper;
