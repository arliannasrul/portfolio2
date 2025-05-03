
import { useEffect, useState } from 'react';

const IntroType = ({onFinish}) => {
    const terminal = "Website/Portfolio>";
  const command = 'npm run dev';
  const [text, setText] = useState('');

  const [phase, setPhase] = useState('typing');  //ganti typing 
  const [fadeOut, setFadeOut] = useState(false); //animasi fade out ke konten HOME

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText((prev) => {
        const nextChar = command.charAt(index);
        index++;
        if (index >= command.length) {
            clearInterval(interval);
  
            setTimeout(() => {
              setPhase('loading');
  
              // ✨ Transisi ke fade out sebelum selesai
              setTimeout(() => {
                setFadeOut(true); // mulai fade
                setTimeout(() => {
                  setPhase('done');
                  onFinish?.(); // trigger Home muncul
                }, 1000); // waktu fade out
              }, 3500); // durasi animasi loading
  
            }, 1000); // delay setelah selesai ngetik
          }
  
          return prev + nextChar;
        });
      }, 150);
  

    return () => clearInterval(interval);
  }, []);

  if (phase === 'done') return null;

  return (
    <div className={`fixed inset-0 z-50 flex flex-col  ${phase == 'loading'? 'items-center ' : 'items-start'} justify-center bg-white  text-xl lg:text-2xl  transition-all duration-1000 ${fadeOut ? 'opacity-0 -translate-y-40' : 'opacity-100 translate-y-0'} `}>
           {phase === 'typing' && (
            <div className='font-mono pl-6'>
              <span className="text-slate-600">{terminal}</span>
              <span className="text-green-400 font-light">
                {text}
                <span className="animate-pulse duration-75">|</span>
              </span>
            </div>
          )}
      {phase === 'loading' && (
        <div className="flex flex-col items-center  gap-2 mt-6 text-white ">
          <p className=" text-lg lg:text-3xl font-poppins text-slate-600">Running Portfolio Website 🚀</p>
          <div className="flex gap-1 pt-2">
            <span className="w-4 h-4 bg-[#6497B1] rounded-full animate-bounce [animation-delay:0.1s]" />
            <span className="w-4 h-4 bg-[#6497B1] rounded-full animate-bounce [animation-delay:0.3s]" />
            <span className="w-4 h-4 bg-[#6497B1] rounded-full animate-bounce [animation-delay:0.5s]" />
            <span className="w-4 h-4 bg-[#6497B1] rounded-full animate-bounce [animation-delay:0.7s]" />
          </div>
        </div>
      )}   
    </div>
  );
};

export default IntroType;
