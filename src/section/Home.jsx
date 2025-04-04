import Lanyard from "../components/Lanyard/Lanyard.jsx";
import SplitText from "../components/SplitText/SplitText.jsx";
import RotatingText from "../components/RotatingText/RotatingText.jsx";
import AnimatedContent from "../Animation/AnimatedContent/AnimatedContent.jsx";
import BlurText from "../components/BlurText/BlurText.jsx";
import Magnet from "../components/Magnet/Magnet.jsx";

import AnimatedBeamDemo from "../components/magicui/TechStack.jsx";

export default function Home() {
  return (
    <>
      <div className="">
        <section id="home" className=" flex justify-center ">
          <div className="container">
            <div className="flex flex-wrap ">
              <div className=" w-full self-center px-4 lg:w-1/2 pt-26 lg:pt-0 pb-6">
                <div className="  text-base   gap-2 font-semibold md:text-xl">
                  <div className=" -mb-7 pb-2">
                  <SplitText
                    text="Arlian Nasrul Ramadhani"
                    className=" text-3xl lg:text-5xl font-semibold   text-slate-800 "
                    delay={50}
                    animationFrom={{
                      opacity: 0,
                      transform: "translate3d(0,50px,0)",
                    }}
                    animationTo={{
                      opacity: 1,
                      transform: "translate3d(0,0,0)",
                    }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                  </div>
                  <br></br>
                  <div className="pb-2 ">
                  <SplitText
                    text="Front-End Web Developer"
                    className="text-2xl lg:text-4xl font-bold text-[#6497B1]  "
                    delay={90}
                    animationFrom={{
                      opacity: 0,
                      transform: "translate3d(0,50px,0)",
                    }}
                    animationTo={{
                      opacity: 1,
                      transform: "translate3d(0,0,0)",
                    }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                  </div>
                 <div className="flex  gap-2  ">
               
                 <AnimatedContent
  distance={120}
  direction="vertical"
  reverse={false}
  config={{ tension: 30, friction: 10 }}
  initialOpacity={0.2}
  animateOpacity
  scale={1.0}
  threshold={0.2}
>

                 <h1 className=" text-lg lg:text-xl text-slate-600 transition-all"> I'm a</h1>
                 </AnimatedContent>
                 
                 <AnimatedContent
  distance={110}
  direction="horizontal"
  reverse={false}
  config={{ tension: 30, friction: 10 }}
  initialOpacity={0.2}
  animateOpacity
  scale={1.0}
  threshold={0.2}
>

                   
                    <RotatingText
                      texts={[
                        "College Student",
                        "Web Developer",
                        "Tech Enthusiast",
                        "Gamer",
                      ]}
                      mainClassName=" min-w-[205px] max-w-[205px]  text-slate-500 overflow-hidden  flex text-center justify-center rounded-lg text-lg lg:text-xl text-bold inline-block transition-all"
                      staggerFrom={"last"}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "-120%", opacity: 0 }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 "
                      transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 400,
                        duration: 0.5
                      }}
                      elementLevelClassName=""
                      rotationInterval={2500}
                    />
                    
                  
</AnimatedContent>
                  
                 </div>


                </div>
                

<AnimatedContent
  distance={150}
  direction="vertical"
  reverse={false}
  config={{ tension: 80, friction: 20 }}
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
>
<a  className="flex mt-4 lg:mt-6 " href="https://docs.google.com/document/d/12aV7gNu7xec1ggA0ST0ZuRgXP4l-YyqYmqT4q6fcEIM/export?format=pdf">


<Magnet padding={50} disabled={false} magnetStrength={2}>
  <button className="active:scale-80 transition-all"><h3 className="bg-[#6497B1]  p-3 rounded-3xl text-white font-semibold" >Download CV</h3>
  </button>
</Magnet>
</a>
</AnimatedContent>
                
              </div>
              <div className="w-full h-[95vh] lg:h-full self-end -top-6 lg:w-1/2 relative z-0 ">
                <Lanyard position={[0, 0, 23]} gravity={[0, -40, 0]} />
              </div>
            </div>
          </div>
        </section>



        <section id="about" className="pb-20 flex px-4">
          <div className="  ">
            <div className="flex flex-wrap justify-between items-center lg:px-36 ">
              <div className="w-full  mb-10 lg:w-[75%] ">
                <div className="pb-2 ">
                <SplitText
  text="ABOUT ME"
  className="text-2xl text-[#6497B1] font-semibold text-center  "
  delay={90}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  easing="easeOutCubic"
  threshold={0.2}
  rootMargin="-50px"
 
/>
</div>
                <BlurText
                  text="Halo perkenalkan aku Nasrul, seorang mahasiswa aktif semester 4 di perguruan tinggi swasta di Malang. Di kampus ini aku mengambil program studi S1 Sistem Infomasi. Selain mengoding, aku juga hobi bermain game, mendengarkan musik dan menjelajahi alam. Aku memilih program studi Sistem Informasi ini dikarenakan aku suka dengan hal-hal yang berbau dengan teknologi dan aku yakin jurusan IT atau teknologi sangat dibutuhkan di masa depan."
                  delay={50}
                  animateBy="words"
                  direction="top"
                  className="text-lg mb-8  "
                />
              </div>
          
              <div className="w-full  mb-12 lg:w-[25%]  ">
              <SplitText
  text="Get In Touch!"
  className="text-2xl text-[#6497B1] lg:px-7  font-semibold text-center "
  delay={90}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  easing="easeOutCubic"
  threshold={0.2}
  rootMargin="-50px"
 
/>
<AnimatedContent
  distance={150}
  direction="vertical"
  reverse={false}
  config={{ tension: 80, friction: 20 }}
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
>


<div className="lg:pl-6  lg:border-l-2 border-[#6497B1]">
                  <p className="font-poppins  pt-5 pb-6 max-w-xl">
                    Mari berteman denganku.
                  </p>
                  
                  <div className="flex items-center">
                  <a
                      href="https://www.linkedin.com/in/arlian-nasrul-ramadhani-66139a2a5/"
                      target="_blank"
                      className="w-9 h-9 mr-2 rounded-full flex justify-center item-center border border-slate-300 hover:border-[#B3CDE0] hover:bg-[#6497B1] hover:text-white"
                    >
<svg xmlns="http://www.w3.org/2000/svg" width="20" role="img" viewBox="1 4 40 40"> <tittle>Linkedln</tittle>
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" className="fill-current"></path>
</svg>
                    </a>
                    <a
                      href="https://www.instagram.com/arliannasrul/ "
                      target="_blank"
                      className="w-9 h-9 mr-3 rounded-full flex justify-center item-center border border-slate-300 hover:border-[#B3CDE0] hover:bg-[#6497B1] hover:text-white"
                    >
                      <svg
                        role="img"
                        width="20"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Instagram</title>
                        <path
                          d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"
                          className="fill-current"
                        ></path>
                      </svg>
                    </a>
                   
  
 
                    <a
                      href="https://www.tiktok.com/@arliannasrul "
                      target="_blank"
                      className="w-9 h-9 mr-3 rounded-full flex justify-center item-center border border-slate-300 hover:border-[#B3CDE0] hover:bg-[#6497B1] hover:text-white"
                    >
                      <svg
                        role="img"
                        width="20"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>TikTok</title>
                        <path
                          d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                          className="fill-current"
                        ></path>
                      </svg>
                    </a>

                    <a
                      href="https://github.com/arliannasrul"
                      target="_blank"
                      class="w-9 h-9 mr-3 rounded-full flex justify-center item-center border border-slate-300 hover:border-[#B3CDE0] hover:bg-[#6497B1] hover:text-white"
                    >
                      <svg
                        role="img"
                        width="20"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>GitHub</title>
                        <path
                          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                          className="fill-current"
                        ></path>
                      </svg>
                    </a>

                    <a
                      href="https://discord.gg/zQnVmAeEK2"
                      target="_blank"
                      className="w-9 h-9 mr-3 rounded-full flex justify-center item-center border border-slate-300 hover:border-[#B3CDE0] hover:bg-[#6497B1] hover:text-white"
                    >
                      <svg
                        role="img"
                        width="20"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Discord</title>
                        <path
                          d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
                          className="fill-current"
                        ></path>
                      </svg>
                    </a>

                    <a
                      href="https://www.facebook.com/arlian.n.ramadhani/"
                      target="_blank"
                      className="w-9 h-9 mr-2 rounded-full flex justify-center item-center border border-slate-300 hover:border-[#B3CDE0] hover:bg-[#6497B1] hover:text-white"
                    >
                      <svg
                        role="img"
                        width="20"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Facebook</title>
                        <path
                          d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
                          className="fill-current"
                        ></path>
                      </svg>
                    </a>

                  
                  </div>
              </div>
            
</AnimatedContent>
</div>


              
            </div>
          </div>
        </section >

        <section id="techstack">
          <AnimatedBeamDemo />
        </section>
      </div>
    </>
  );
}
