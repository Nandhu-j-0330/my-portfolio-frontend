import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Modern portfolio"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// import type { Metadata } from "next";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "Portfolio",
//   description: "Modern portfolio",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
//         {/* You can also wrap with a container if needed */}
//         <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
//       </body>
//     </html>
//   );
// }
