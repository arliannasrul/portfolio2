// src/components/PageWrapper.jsx
import { useState } from 'react';
import Intro from '../pages/Intro.jsx';
import Home from '../section/Home.jsx';


const PageWrapper = () => {
  const [showMain, setShowMain] = useState(false);

  return (
    <>
      {!showMain && <Intro onFinish={() => setShowMain(true)} />}
        <div className={`transition-all duration-1000 ease-out${showMain? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}  relative z-10`}>
      {showMain && (
        <>
          <Home show={showMain} />
         
        </>
      )}
      </div>
    </>
  );
};

export default PageWrapper;
