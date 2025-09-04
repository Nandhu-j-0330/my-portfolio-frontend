// // export default function Hero() {
// //   return (
// //     <section className="relative overflow-hidden">
// //       <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-600/40 via-cyan-600/30 to-transparent" />
// //       <div className="mx-auto max-w-6xl px-6 py-28 text-center">
// //         <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
// //           Hi, I’m <span className="text-bat-yellow">Nanthakumar.J</span>
// //         </h1>
// //         <p className="mt-3 text-2xl text-white/80">Application Developer (react native)</p>
// //         <a
// //           href="/assets/my-cv.pdf"
// //           download
// //           className="mt-8 inline-block rounded-full border border-white/15 bg-bat.card px-6 py-3 text-white/90 shadow-soft hover:border-white/30 hover:translate-y-[-1px] transition"
// //         >
// //           Download CV
// //         </a>
// //       </div>
// //     </section>
// //   );
// // }

// // components/Hero.js
// // "use client";
// // import { useEffect, useState } from "react";
// // import Image from "next/image";

// // export default function Hero() {
// //   const [showText, setShowText] = useState(false);

// //   useEffect(() => {
// //     setShowText(true);
// //   }, []);

// //   return (
// //     <section className="relative overflow-hidden">
// //       <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-600/40 via-cyan-600/30 to-transparent" />
// //       <div className="mx-auto max-w-6xl px-6 py-28 text-center">
// //         <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
// //           <span className={`animate-text-wave`}>Hi, I’m </span>
// //           <span className="text-bat-yellow">Nanthakumar.J</span>
// //         </h1>
// //         <p className="mt-3 text-2xl text-white/80">Application Developer (react native)</p>
// //         <a
// //           href="/assets/my-cv.pdf"
// //           download
// //           className="mt-8 inline-block rounded-full border border-white/15 bg-bat.card px-6 py-3 text-white/90 shadow-soft hover:border-white/30 hover:translate-y-[-1px] transition"
// //         >
// //           Download CV
// //         </a>
// //       </div>
// //     </section>
// //   );
// // }



// // components/Hero.js
// // components/Hero.js
// // components/Hero.js
// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";

// export default function Hero() {
//   const [showText, setShowText] = useState(false);

//   useEffect(() => {
//     setShowText(true);
//   }, []);

//   const headingText = "Hellow 👋, I’m  Nanthakumar.J";
//   const words = headingText.split(" ");

//   return (
//     <section className="relative overflow-hidden">
//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-600/40 via-cyan-600/30 to-transparent" />
//       <div className="mx-auto max-w-6xl px-6 py-28 text-center">
//         <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
//           {words.map((word, index) => (
//             <span
//               key={index}
//               className={`inline-block ${showText ? 'animate-text-wave' : ''} ${word === 'Nanthakumar.J' ? 'text-bat-yellow' : ''}`}
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               {word}{" "}
//             </span>
//           ))}
//         </h1>
//         <p className="mt-3 text-2xl text-white/80">Application Developer (react native)</p>
//         <a
//           href="/assets/my-cv.pdf"
//           download
//           className="mt-8 inline-block rounded-full border border-white/15 bg-bat.card px-6 py-3 text-white/90 shadow-soft hover:border-white/30 hover:translate-y-[-1px] transition"
//         >
//           Download CV
//         </a>
//       </div>
//     </section>
//   );
// }


// components/Hero.js
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Bat from './Bat'; // Import the Bat component

export default function Hero() {
  const [showBat, setShowBat] = useState(false);
  const [batState, setBatState] = useState('hidden'); // 'hidden', 'flying-in', 'sitting', 'flying-out'

  useEffect(() => {
    // Sequence the bat's animation
    const timeout1 = setTimeout(() => {
      setBatState('flying-in');
    }, 1000); // Bat starts flying in after 1 second

    const timeout2 = setTimeout(() => {
      setBatState('sitting');
    }, 3000); // Bat sits on the name after 3 seconds

    const timeout3 = setTimeout(() => {
      setBatState('flying-out');
    }, 6000); // Bat flies away after 6 seconds

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  const headingText = "Hi, I’m Nanthakumar.J";
  const words = headingText.split(" ");
  const nameIndex = words.findIndex(word => word.includes('Nanthakumar.J'));

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-600/40 via-cyan-600/30 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 py-28 text-center">
        <h1 className="relative text-5xl md:text-7xl font-extrabold tracking-tight">
          {words.map((word, index) => (
            <span
              key={index}
              className={`inline-block ${word === 'Nanthakumar.J' ? 'text-bat-yellow' : ''} ${batState !== 'hidden' ? 'animate-text-wave' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {word}{" "}
            </span>
          ))}

          {/* Bat Component */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              ${batState === 'flying-in' ? 'animate-bat-fly-in' : ''}
              ${batState === 'flying-out' ? 'animate-bat-fly-out' : ''}
              ${batState === 'sitting' ? 'transform scale-100 rotate-0' : ''}
              ${batState === 'hidden' ? 'hidden' : ''}
            `}
          >
 
          </div>
        </h1>
        <p className="mt-3 text-2xl text-white/80">Application Developer (react native)</p>
        <a
          href="/assets/nanthakumar.pdf"
          download
          className="mt-8 inline-block rounded-full border border-white/15 bg-bat.card px-6 py-3 text-white/90 shadow-soft hover:border-white/30 hover:translate-y-[-1px] transition"
        >
          Download CV
        </a>
      </div>
    </section>
   
  );
}

