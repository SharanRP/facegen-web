import AllCorners from './AllCorners';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => (
  <header className={`fixed top-6 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "top-4" : ""}`}>
    <div className="max-w-5xl mx-auto">
      <div className={`backdrop-blur-xl bg-white/80 border border-gray-200 px-6 py-3 relative transition-all duration-500 ${isScrolled ? "shadow-2xl shadow-black/5" : ""}`}>
        <AllCorners color="gray" />
        <div className="flex items-center gap-8 w-full">
          <div className="flex items-center gap-3">
            <img
              src="/android-chrome-192x192.png"
              alt="FaceGen.io Logo"
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-lg font-bold tracking-tight text-black">FaceGen</span>
          </div>

          <div className="flex gap-6 text-sm">
            <span className="text-black cursor-pointer hover:text-gray-600 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-px after:bg-black">Docs</span>
            {/* <span className="text-gray-600 cursor-pointer hover:text-black transition-colors">API</span> */}
            {/* <span className="text-gray-600 cursor-pointer hover:text-black transition-colors">Support</span> */}
          </div>

          <div className="ml-auto">
            <a
              href="https://github.com/SharanRP/avatar-api" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              className="inline-flex items-center gap-2 px-3 py-1 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 rounded transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.02c0 4.426 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.296 2.75-1.026 2.75-1.026.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.943.36.31.682.92.682 1.855 0 1.338-.012 2.418-.012 2.747 0 .269.18.58.688.482C19.138 20.196 22 16.444 22 12.02 22 6.484 17.523 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Navbar;