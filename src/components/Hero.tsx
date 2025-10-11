import AllCorners from './AllCorners';

const Hero = () => (
  <div className="mb-12 sm:mb-20 relative text-center px-4">
    <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-gray-100 border border-gray-200 text-gray-600 text-[10px] sm:text-xs mb-6 sm:mb-8 relative">
      <AllCorners color="gray" />
      <span className="relative z-10">VERSION 1.0 • STABLE</span>
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 tracking-tight text-black">
      FaceGen API
    </h2>
    <p className="text-gray-600 text-base sm:text-lg md:text-xl mx-auto max-w-2xl leading-relaxed px-4">
      Generate AI-powered avatars with a simple REST API. Build custom profile pictures, game characters, and more with our powerful endpoint.
    </p>
    <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-lg mx-auto max-w-3xl relative">
      <AllCorners color="blue" />
      <div className="relative z-10">
        <p className="text-blue-900 text-xs sm:text-sm leading-relaxed">
          <span className="font-semibold">🚧 We&apos;re building something awesome!</span> If you don&apos;t see your desired image right away, don&apos;t worry—we&apos;re storing your request and our workers are generating it in the background. We&apos;ll serve it to you in future requests. Thanks for your patience!
        </p>
      </div>
    </div>
  </div>
);

export default Hero;