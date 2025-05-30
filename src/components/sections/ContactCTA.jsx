import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const ContactCTA = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-gradient-to-br from-indigo-800 via-indigo-700 to-purple-800 px-6 py-14 sm:px-12 lg:px-24 mt-24 shadow-[0_20px_80px_rgba(80,0,200,0.3)]"
    >
      {/* Glass Glow Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/30 rounded-full blur-2xl animate-spin-slow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center justify-center md:justify-start gap-3 drop-shadow-md">
            <Sparkles className="w-8 h-8 text-yellow-400 animate-bounce-slow" />
            Not sure what fits your project?
          </h2>
          <p className="text-white/80 mt-3 text-base sm:text-lg max-w-md leading-relaxed">
            Our experts can help you choose the perfect hardware and finishes that align with your project’s vision.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
          <Button className="bg-gradient-to-r from-yellow-300 to-yellow-400 text-black font-semibold hover:scale-105 transition-transform px-6 py-3 rounded-xl shadow-lg">
            Talk to an Expert
          </Button>
          <Button
            variant="ghost"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3 rounded-xl shadow-md backdrop-blur-md transition"
          >
            Request Consultation
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactCTA;
