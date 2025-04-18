// src/components/PageWrapper.jsx
import { useState } from 'react';
import Intro from '../pages/Intro.jsx';
import Home from '../section/Home.jsx';
import { ScrollProgress } from "../components/magicui/scroll-progress.tsx";

const PageWrapper = () => {
  const [showMain, setShowMain] = useState(false);

  return (
    <>
      {!showMain && <Intro onFinish={() => setShowMain(true)} />}
        <div className={`transition-all duration-1000 ease-in-out${showMain? 'opacity-100 ' : 'opacity-0  '}  relative z-10`}>
      {showMain && (
        <>
        <ScrollProgress className=" transition"  />
          <Home show={showMain} />
         
        </>
      )}
      </div>
    </>
  );
};

export default PageWrapper;
