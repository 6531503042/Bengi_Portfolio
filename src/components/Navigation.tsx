import { Moon, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex gap-8">
          <Link to="/" className="text-gray-600 hover:text-black">home</Link>
          <Link to="/projects" className="text-gray-600 hover:text-black">projects</Link>
          <Link to="/blog" className="text-gray-600 hover:text-black">blog</Link>
          <Link to="/contact" className="text-gray-600 hover:text-black">contact</Link>
        </div>
        <div className="flex gap-4">
          <ShoppingBag className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
          <Moon className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;