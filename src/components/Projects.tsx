// import Image from "next/image";

// const data = [
//   { id: 1, title: "Website Design", desc: "A modern website built with best practices.", img: "/assets/node.png", link: "#" },
//   { id: 2, title: "Progcsatriced Piay", desc: "Project eressyséran man", img: "/assets/react.png", link: "#" },
//   { id: 3, title: "Todo-List Web App", desc: "A clean, modern web app", img: "/assets/javascript.png", link: "#" }
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
//       <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {data.map(p => (
//           <article key={p.id} className="rounded-2xl bg-bat-card overflow-hidden shadow-soft hover:translate-y-[-2px] transition">
//             <div className="relative h-44">
//               <Image src={p.img} alt={p.title} fill className="object-cover" />
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-semibold">{p.title}</h3>
//               <p className="mt-1 text-white/70">{p.desc}</p>
//               <a href={p.link} target="_blank" className="mt-3 inline-block text-cyan-400 hover:underline">GitHub</a>
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    title: "Website Design",
    desc: "A modern website built with best practices.",
    img: "/assets/node.png",
    link: "#",
  },
  {
    id: 2,
    title: "Progcsatriced Piay",
    desc: "Project eressyséran man",
    img: "/assets/react.png",
    link: "#",
  },
  {
    id: 3,
    title: "Todo-List Web App",
    desc: "A clean, modern web app",
    img: "/assets/javascript.png",
    link: "#",
  },
];

export default function Projects() {
  return (

    <section
      id="projects"
      // className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 px-6 py-20 flex items-center"
        className="rounded-1xl bg-black/60 backdrop-blur-md p-8 md:p-10 shadow-soft"
    >
      <div className="mx-auto max-w-6xl w-full">
        <h2 className="text-5xl font-bold text-center mb-16 text-cyan-400 drop-shadow-lg">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((p) => (
            <motion.article
              key={p.id}
              whileHover={{ scale: 1.04, y: -6 }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
              className="rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 
                         hover:border-cyan-400 overflow-hidden shadow-lg shadow-black/30 
                         hover:shadow-cyan-500/40 hover:shadow-xl transition-all duration-200"
            >
              <div className="relative h-52">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-white/70">{p.desc}</p>
                <a
                  href={p.link}
                  target="_blank"
                  className="mt-4 inline-block text-cyan-400 hover:underline"
                >
                  GitHub →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
