import AllCorners from './AllCorners';

const Footer = () => (
  <footer className="border-t border-gray-200 bg-gray-100 relative mt-12 sm:mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <AllCorners color="gray" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-xs sm:text-sm text-center sm:text-left">© 2025 FaceGen.io. All rights reserved.</p>
        <div className="flex gap-4 sm:gap-8 text-xs sm:text-sm text-gray-600">
          <span className="hover:text-black cursor-pointer transition-colors">Privacy</span>
          <span className="hover:text-black cursor-pointer transition-colors">Terms</span>
          <span className="hover:text-black cursor-pointer transition-colors">Contact</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;