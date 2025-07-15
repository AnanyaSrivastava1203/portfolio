"use client";
import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import NET from "vanta/dist/vanta.net.min";

export default function GalaxyBackground() {

   
  const vantaRef = useRef(null);
//   const [vantaEffect, setVantaEffect] = useState(null);

//   useEffect(() => {
//     if (!vantaEffect && typeof window !== "undefined" && vantaRef.current) {
//       const effect = NET({
//         el: vantaRef.current,
//         THREE: THREE,
//         mouseControls: true,
//         touchControls: true,
//         minHeight: 200.0,
//         minWidth: 200.0,
//         scale: 1.0,
//         scaleMobile: 1.0,
//         color: 0xb388eb,
//         backgroundColor: 0x0e0e2c,
//       });
//       setVantaEffect(effect);
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, [vantaEffect]);

//   return (
//     <div
//       ref={vantaRef}
//       className="fixed top-0 left-0 w-full h-full -z-10"
//     />
//   );
// just to see if it's rendering
// return (
//     <div
//       ref={vantaRef}
//       className="fixed top-0 left-0 w-full h-full -z-10 bg-purple-800 text-white flex justify-center items-center"
//     >
//       Galaxy Background is rendering!
//     </div>
//   );
}
