import AllCorners from './AllCorners';

const Hero = () => (
  <div className="mb-20 relative text-center">
    <div className="inline-block px-4 py-1.5 bg-gray-100 border border-gray-200 text-gray-600 text-xs mb-8 relative">
      <AllCorners color="gray" />
      <span className="relative z-10">VERSION 2.0 • STABLE</span>
    </div>
    <h2 className="text-6xl font-bold mb-8 tracking-tight text-black">
      API Documentation
    </h2>
    <p className="text-gray-600 text-xl mx-auto max-w-2xl leading-relaxed">
      Generate AI-powered avatars with a simple REST API. Build custom profile pictures, game characters, and more with our powerful endpoint.
    </p>
  </div>
);

export default Hero;