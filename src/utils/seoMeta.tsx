// "use client";
// import React, { useEffect } from "react";

// interface SeoMetaProps {
//   title: string;
//   description: string;
//   favicon: string;
// }

// const SeoMeta: React.FC<SeoMetaProps> = ({ title, description, favicon }) => {
//   useEffect(() => {
//     document.title = title;
//     document
//       .querySelector('meta[name="description"]')
//       ?.setAttribute("content", description);
//     const link = document.querySelector('link[rel="icon"]');
//     if (link) {
//       link.setAttribute("href", favicon);
//     }
//   }, [title, description, favicon]);

//   return null;
// };

// export default SeoMeta;
