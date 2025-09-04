// "use client";
// import { useEffect, useState } from "react";

// export default function ContactsList() {
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/contacts")
//       .then((res) => res.json())
//       .then((data) => setContacts(data))
//       .catch((err) => console.error("Error fetching contacts:", err));
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Contact Inquiries</h1>
//       <ul>
//         {contacts.map((c) => (
//           <li key={c._id} className="border p-2 mb-2 rounded">
//             <p><strong>Name:</strong> {c.name}</p>
//             <p><strong>Email:</strong> {c.email}</p>
//             <p><strong>Message:</strong> {c.message}</p>
//             <p><small>{new Date(c.createdAt).toLocaleString()}</small></p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
