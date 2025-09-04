// // components/Skills.js
// import React from 'react';
// import Image from 'next/image';

// const skills = [
//   { name: 'React', image: '/assets/react.png' },
//   { name: 'React Native', image: '/assets/react-nativee.png' },
//   { name: 'JavaScript', image: '/assets/javascript.png' },
//   { name: 'HTML', image: '/assets/html.png' },
//   { name: 'CSS', image: '/assets/css.png' },
//   { name: 'Firebase', image: '/assets/firebase.png' },
//   { name: 'Node.js', image: '/assets/node.png' },
//   { name: 'Node.js', image: '/assets/express.png' },
//   { name: 'Node.js', image: '/assets/mongoDB.png' },

// ];

// export default function Skills() {
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>Skills</h1>
//       <div style={styles.grid}>
//         {skills.map((skill) => (
//           <div key={skill.name} style={styles.card}>
//             <Image 
//               src={skill.image} 
//               alt={skill.name} 
//               width={100} 
//               height={100}
//             />
//             {/* <span style={styles.text}>{skill.name}</span> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// const styles: { [key: string]: React.CSSProperties } = {
//   container: {
//     padding: '32px',
//     textAlign: 'center',
//     backgroundColor: '#111',
//     minHeight: '100vh',
//   },
//   heading: {
//     fontSize: '2.5rem',
//     fontWeight: 'bold',
//     marginBottom: '32px',
//     color: '#fff',
//   },
//   grid: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     gap: '24px',
//   },
//   card: {
//     width: '120px',
//     padding: '16px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     backgroundColor: '#222',
//     borderRadius: '12px',
//     transition: 'transform 0.2s, background-color 0.2s',
//     cursor: 'pointer',
//   },
//   text: {
//     color: '#fff',
//     marginTop: '12px',
//     fontSize: '1rem',
//     fontWeight: '500',
//   },
// };

// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const skills = [
//   { id: 1, name: "React", image: "/assets/react.png" },
//   { id: 2, name: "React Native", image: "/assets/react-nativee.png" },
//   { id: 3, name: "JavaScript", image: "/assets/javascript.png" },
//   { id: 4, name: "HTML", image: "/assets/html.png" },
//   { id: 5, name: "CSS", image: "/assets/css.png" },
//   { id: 6, name: "Firebase", image: "/assets/firebase.png" },
//   { id: 7, name: "Node.js", image: "/assets/node.png" },
//   { id: 8, name: "Express.js", image: "/assets/express.png" },
//   { id: 9, name: "MongoDB", image: "/assets/mongoDB.png" },
// ];

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 px-6 py-20"
//         // className="rounded-1xl bg-black/60 backdrop-blur-md p-8 md:p-10 shadow-soft"
//     >
//       <div className="mx-auto max-w-6xl w-full">
//         {/* Section Title */}
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-5xl font-bold text-center mb-16 text-cyan-400 drop-shadow-lg"
//         >
//           My Skills
//         </motion.h2>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
//           {skills.map((skill, i) => (
//             <motion.div
//               key={skill.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: i * 0.1 }}
//               className="flex flex-col items-center p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-cyan-500/30 transition transform hover:-translate-y-1"
//             >
//               {/* Skill Icon */}
//               <div className="relative w-20 h-20 mb-4">
//                 <Image
//                   src={skill.image}
//                   alt={skill.name}
//                   fill
//                   className="object-contain transition group-hover:scale-110"
//                 />
//               </div>
//               {/* Skill Name */}
//               <p className="text-white font-medium text-lg">{skill.name}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { id: 1, name: "React", image: "/assets/react.png" },
  { id: 2, name: "React Native", image: "/assets/react-nativee.png" },
  { id: 3, name: "JavaScript", image: "/assets/javascript.png" },
  { id: 4, name: "HTML", image: "/assets/html.png" },
  { id: 5, name: "CSS", image: "/assets/css.png" },
  { id: 6, name: "Firebase", image: "/assets/firebase.png" },
  { id: 7, name: "Node.js", image: "/assets/node.png" },
  { id: 8, name: "Express.js", image: "/assets/express.png" },
  { id: 9, name: "MongoDB", image: "/assets/mongoDB.png" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 px-6 py-20 flex items-center"
    >
      <div className="mx-auto max-w-6xl w-full">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16 text-cyan-400 drop-shadow-lg"
        >
          My Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center p-6 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 shadow-lg hover:border-cyan-400 hover:shadow-cyan-500/40 transition transform hover:-translate-y-1"
            >
              {/* Skill Icon */}
              <div className="relative w-20 h-20 mb-4">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  fill
                  className="object-contain transition group-hover:scale-110"
                />
              </div>
              {/* Skill Name */}
              <p className="text-white font-medium text-lg">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
