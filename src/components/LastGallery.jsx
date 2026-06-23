import { motion } from "framer-motion";

import last1 from "../assets/last_page/last_1.jpeg";
import last2 from "../assets/last_page/last_2.jpeg";
import last3 from "../assets/last_page/last_3.jpeg";
import last4 from "../assets/last_page/last_4.jpeg";
import last5 from "../assets/last_page/last_5.jpg";
import last6 from "../assets/last_page/last_6.jpeg";

const finalMemories = [
  { image: last1 },
  { image: last2 },
  { image: last3 },
  { image: last4 },
  { image: last5 },
  { image: last6 },
];

export default function LastGallery() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8f2e8] py-32 px-6">

      {/* SOFT GLOWS */}
      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-orange-200/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-200/30 blur-3xl rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 w-[320px] h-[320px] bg-amber-100/40 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      {/* PAPER TEXTURE */}
      <div className="absolute inset-0 opacity-[0.035] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>

      {/* TITLE */}
      <div className="text-center mb-20 relative z-10">
        <p className="uppercase tracking-[6px] text-[#8a6f5a] text-sm mb-4">
          THE LAST FEW FRAMES
        </p>

        <h2 className="text-5xl md:text-7xl font-serif text-[#3b3026] leading-tight">
          And We Stayed
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-[#6f5b4b] text-lg leading-relaxed">
          Some moments don’t ask to be remembered.  
          They just stay.
        </p>
      </div>

      {/* GRID */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {finalMemories.map((memory, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="
              group
              bg-[#fffaf5]
              rounded-[28px]
              p-4
              shadow-[0_20px_60px_rgba(80,50,20,0.12)]
              border border-[#eadfce]
              transition-all
              duration-500
            "
          >
            {/* IMAGE WRAPPER */}
            <div className="rounded-[20px] overflow-hidden bg-[#f3ebe1] h-[320px] flex items-center justify-center">

              <img
                src={memory.image}
                alt={`memory-${index + 1}`}
                className="
                  w-full
                  h-full
                  object-contain
                  transition-transform
                  duration-700
                  group-hover:scale-[1.03]
                "
              />

            </div>
          </motion.div>
        ))}
      </div>

      {/* BOTTOM TRANSITION */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#f3eadf]"></div>
    </section>
  );
}