// "use client";

// import { useEffect } from "react";

// const RemovePreloader = () => {
//   useEffect(() => {
//     // Задержка 3000 мс (3 секунды) для теста – можно уменьшить после отладки
//     const timer = setTimeout(() => {
//       const preloader = document.getElementById("static-preloader");
//       if (preloader) {
//         preloader.remove();
//       }
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   return null;
// };

// export default RemovePreloader;
