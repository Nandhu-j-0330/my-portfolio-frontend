// // components/Bat.js
// import Image from "next/image";

// const Bat = ({ className, size = 60 }) => {
//   return (
//     <div className={`bat-container ${className}`}>
//       <Image
//         src="/assets/bat.svg" // Replace with the path to your bat SVG
//         alt="A flying bat"
//         width={size}
//         height={size}
//         className="bat-image"
//       />
//     </div>
//   );
// };

// export default Bat;

// components/Bat.js
// components/Bat.js
// import Image from "next/image";

// const Bat = ({ className, size = 60 }) => {
//   return (
//     <div className={`bat-container ${className}`}>
//       <Image
//         src="/assets/bat.svg" // Use your professional SVG file
//         alt="A flying bat icon"
//         width={size}
//         height={size}
//         className="bat-image filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
//       />
//     </div>
//   );
// };

// export default Bat;

// components/Bat.js
import Image from "next/image";

type BatProps = {
  className?: string;
  size?: number;
};

const Bat: React.FC<BatProps> = ({ className = "", size = 60 }) => {
  return (
    <div className={`bat-container ${className}`}>
      <Image
        src="/assets/bat.svg"
        alt="A flying bat with flapping wings"
        width={size}
        height={size}
        className="bat-image filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
      />
    </div>
  );
};

export default Bat;
