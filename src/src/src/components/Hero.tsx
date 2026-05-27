import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-100">
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-8">
            Timeless Jewelry <br />
            <span className="italic">for Every Moment</span>
          </h1>
          <div className="flex justify-center gap-6">
            <Link to="/shop">
              <button className="bg-amber-600 text-white px-10 py-4 rounded-full font-bold">SHOP NOW</button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
