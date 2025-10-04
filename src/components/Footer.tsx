import AllCorners from './AllCorners';

const Footer = () => (
  <footer className="border-t border-gray-200 bg-gray-100 relative mt-20">
    <div className="max-w-7xl mx-auto px-6 py-10">
      <AllCorners color="gray" />
      <div className="flex items-center justify-between">
        <p className="text-gray-600 text-sm">© 2025 AI Avatar Generator. All rights reserved.</p>
        <div className="flex gap-8 text-sm text-gray-600">
          <span className="hover:text-black cursor-pointer transition-colors">Privacy</span>
          <span className="hover:text-black cursor-pointer transition-colors">Terms</span>
          <span className="hover:text-black cursor-pointer transition-colors">Contact</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;