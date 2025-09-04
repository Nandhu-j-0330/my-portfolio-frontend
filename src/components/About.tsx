// import Image from "next/image";

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="mx-auto max-w-6xl px-6 py-16 scroll-mt-20"
//     >
//       <div className="rounded-3xl bg-bat-card p-8 md:p-12 shadow-soft">
//       {/* <div className="rounded-3xl bg-gradient-to-r from-gray-900 via-black to-gray-800 p-8 md:p-10 shadow-soft"> */}

//         <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          
//           {/* Profile Image */}
//           <Image
//             src="/assets/node.png"
//             alt="Profile"
//             width={140}
//             height={140}
//             className="rounded-full object-cover border-4 border-white/20 shadow-lg"
//           />
          
//           {/* About Content */}
//           <div className="text-center md:text-left">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            
//             <p className="text-white/80 leading-relaxed max-w-2xl">
//               I’m a passionate <span className="font-semibold text-white">React Native developer</span> with 1 year of hands-on experience building mobile applications that are fast, functional, and user-friendly.  
//               <br /><br />
//               I completed my MCA from <span className="font-semibold text-white">Vels University in 2023</span>, and since then, I’ve been committed to growing as a developer — both through full-time opportunities and freelance projects.
//               <br /><br />
//               Beyond just writing code, I’m driven by a deeper purpose: to prove myself in a system that often overlooks potential. Despite being underestimated or passed over, I’ve continued to push forward, learn rapidly, and deliver real results.
//               <br /><br />
//               <span className="italic">If you’re looking for someone who’s not only skilled but also hungry to grow and make an impact, let’s connect.</span>
//             </p>

//             {/* Skills */}
//             <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
//               {["React Native", "Next.js", "Tailwind CSS", "Firebase", "Node.js"].map((skill) => (
//                 <span
//                   key={skill}
//                   className="rounded-full bg-black/40 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

export default function About() {
  return (

    <section
      id="about"
      // className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 px-6 py-16 scroll-mt-20 flex items-center"
        className="rounded-1xl bg-black/60 backdrop-blur-md p-8 md:p-10 shadow-soft"
    >
      <div className="mx-auto max-w-6xl w-full">
        {/* keep your old container design */}
        <div className="rounded-3xl bg-bat-card p-8 md:p-12 shadow-soft">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            
            {/* Profile Image */}
            <Image
              src="/assets/node.png"
              alt="Profile"
              width={140}
              height={140}
              className="rounded-full object-cover border-4 border-white/20 shadow-lg"
            />
            
            {/* About Content */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                About Me
              </h2>
              
              <p className="text-white/80 leading-relaxed max-w-2xl">
                I’m a passionate <span className="font-semibold text-white">React Native developer</span> with 1 year of hands-on experience building mobile applications that are fast, functional, and user-friendly.  
                <br /><br />
                I completed my MCA from <span className="font-semibold text-white">Vels University in 2023</span>, and since then, I’ve been committed to growing as a developer — both through full-time opportunities and freelance projects.
                <br /><br />
                Beyond just writing code, I’m driven by a deeper purpose: to prove myself in a system that often overlooks potential. Despite being underestimated or passed over, I’ve continued to push forward, learn rapidly, and deliver real results.
                <br /><br />
                <span className="italic text-white/90">If you’re looking for someone who’s not only skilled but also hungry to grow and make an impact, let’s connect.</span>
              </p>

              {/* Skills */}
              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
                {["React Native", "Next.js", "Tailwind CSS", "Firebase", "Node.js"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-black/40 px-4 py-2 text-sm font-semibold text-white/90 hover:border hover:border-cyan-400 hover:text-cyan-400 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
