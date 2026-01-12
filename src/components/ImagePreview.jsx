import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ImagePreview({ src, onClose }) {
  return (
    <AnimatePresence>
      {src && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* MODAL CARD */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl 
                       w-full max-w-xl p-4"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-white/80 hover:text-red-400 transition"
            >
              <X size={22} />
            </button>

            {/* IMAGE */}
            <div className="flex items-center justify-center">
              <img
                src={src}
                alt="Package Preview"
                className="max-h-[420px] w-auto rounded-xl object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
