import AllCorners from './AllCorners';

interface LiveGenerationProps {
  avatars: string[];
}

const LiveGeneration = ({ avatars }: LiveGenerationProps) => (
  <div className="mt-20">
    <div className="flex items-center justify-between mb-8">
      <h3 className="text-3xl font-bold tracking-tight text-black">Live Generation</h3>
      <div className="flex items-center gap-3 px-4 py-2 border border-gray-200 bg-gray-50 relative">
        <AllCorners color="gray" />
        <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse relative"></div>
        <span className="text-sm text-gray-700 font-semibold">Active</span>
      </div>
    </div>

    <div className="border border-gray-200 bg-gray-50 p-10 relative">
      <AllCorners color="gray" />
      <div className="grid grid-cols-4 gap-6">
        {avatars.map((avatar, i) => (
          <div key={i} className="aspect-square border border-gray-200 bg-white relative overflow-hidden group">
            <AllCorners color="gray" />
            <img
              src={avatar}
              alt={`Avatar ${i + 1}`}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-2 left-2 text-[10px] text-gray-700 font-bold opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 px-2 py-1 border border-gray-200">
              #{i + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default LiveGeneration;