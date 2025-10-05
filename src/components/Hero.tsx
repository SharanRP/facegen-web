import AllCorners from './AllCorners';

const Hero = () => (
  <div className="mb-20 relative text-center">
    <div className="inline-block px-4 py-1.5 bg-gray-100 border border-gray-200 text-gray-600 text-xs mb-8 relative">
      <AllCorners color="gray" />
      <span className="relative z-10">VERSION 1.0 • STABLE</span>
    </div>
    <h2 className="text-6xl font-bold mb-8 tracking-tight text-black">
      FaceGen API
    </h2>
    <p className="text-gray-600 text-xl mx-auto max-w-2xl leading-relaxed">
      Generate AI-powered avatars with a simple REST API. Build custom profile pictures, game characters, and more with our powerful endpoint.
    </p>
    <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg mx-auto max-w-3xl relative">
      <AllCorners color="blue" />
      <div className="relative z-10">
        <p className="text-blue-900 text-sm leading-relaxed">
          <span className="font-semibold">🚧 We&apos;re building something awesome!</span> If you don&apos;t see your desired image right away, don&apos;t worry—we&apos;re storing your request and our workers are generating it in the background. We&apos;ll serve it to you in future requests. Thanks for your patience!
        </p>
      </div>
    </div>
  </div>
);

export default Hero;