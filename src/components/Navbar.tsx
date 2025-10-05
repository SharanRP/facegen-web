import AllCorners from './AllCorners';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => (
  <header className={`fixed top-6 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "top-4" : ""}`}>
    <div className="max-w-5xl mx-auto">
      <div className={`backdrop-blur-xl bg-white/80 border border-gray-200 px-6 py-3 relative transition-all duration-500 ${isScrolled ? "shadow-2xl shadow-black/5" : ""}`}>
        <AllCorners color="gray" />
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <img
              src="/android-chrome-192x192.png"
              alt="FaceGen.io Logo"
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-lg font-bold tracking-tight text-black">FaceGen.io</span>
          </div>
          <div className="flex gap-6 text-sm">
            <span className="text-black cursor-pointer hover:text-gray-600 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-px after:bg-black">Docs</span>
            <span className="text-gray-600 cursor-pointer hover:text-black transition-colors">API</span>
            <span className="text-gray-600 cursor-pointer hover:text-black transition-colors">Support</span>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Navbar;