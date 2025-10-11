import React, { useState } from "react";
import Image from "next/image";
import AllCorners from "./AllCorners";

const LiveGeneration = ({
  avatars,
  onCustomDescription,
}: {
  avatars: string[];
  onCustomDescription: (desc: string) => void;
}) => {
  const [editing, setEditing] = useState(false);
  const [inputValue, _setInputValue] = useState("");
  const [displayAvatars, _setDisplayAvatars] = useState<string[]>(() => avatars.slice());
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const fallbackDescriptions = [
    "cowboy",
    "wizard",
    "magician",
    "professional doctor",
    "astronaut",
    "scientist boy",
    "surgeon",
    "playful boy",
    "rogue adventurer",
    "teacher",
  ];

  const extractDescription = (url?: string, idx?: number) => {
    const safeIdx = (idx ?? 0) % fallbackDescriptions.length;
    if (!url) return fallbackDescriptions[safeIdx];
    try {
      const q = url.split("?")[1];
      if (!q) return fallbackDescriptions[safeIdx];
      const params = new URLSearchParams(q);
      const desc = params.get("description");
      return desc ? decodeURIComponent(desc) : fallbackDescriptions[safeIdx];
    } catch {
      return fallbackDescriptions[safeIdx];
    }
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onCustomDescription?.(inputValue.trim());
    }
    setEditing(false);
  };

  return (
    <div className="mt-12 sm:mt-20">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
          Live Generation
        </h3>
        <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-200 bg-gray-50 relative">
          <AllCorners color="gray" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full animate-pulse relative"></div>
          <span className="text-xs sm:text-sm text-gray-700 font-semibold">
            Active
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4">
        <div className="lg:col-span-4 border border-gray-200 bg-white p-5 sm:p-6 relative min-h-[280px] flex flex-col">
          <AllCorners color="gray" />
          <div className="flex-1 space-y-4">
            <div className="flex items-start justify-between mb-4">
              <div className="text-xs font-bold text-gray-400 tracking-wider">
                MESSAGING
              </div>
              <div className="text-[10px] px-2 py-1 bg-gray-100 text-gray-600 font-semibold border border-gray-200 relative">
                <AllCorners color="gray" />
                Live
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 border border-gray-200 bg-gray-50 relative">
              <AllCorners color="blue" />
              <div className="w-14 h-14 rounded-full border-2 border-blue-500 overflow-hidden relative flex-shrink-0 ring-2 ring-blue-100 bg-gray-100">
                <Image
                  src={displayAvatars[1] || "/android-chrome-192x192.png"}
                  alt="Chat avatar"
                  className="w-full h-full object-cover"
                  width={56}
                  height={56}
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <div className="font-bold text-sm text-gray-900">
                  Alex Thompson
                </div>
                <div className="text-xs text-gray-500">Product Designer</div>
                <div className="text-xs text-green-600 flex items-center gap-1 mt-1">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  Active now
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full border border-gray-200 overflow-hidden relative flex-shrink-0 bg-gray-100">
                  <Image
                    src={displayAvatars[0] || "/android-chrome-192x192.png"}
                    alt="msg"
                    className="w-full h-full object-contain"
                    width={32}
                    height={32}
                    unoptimized
                  />
                </div>
                <div className="flex-1 bg-gray-100 border border-gray-200 px-3 py-2 relative max-w-[80%]">
                  <AllCorners color="gray" />
                  <div className="text-xs text-gray-700">
                    Hey! The new avatars look amazing 🎨
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 justify-end">
                <div className="flex-1 bg-blue-500 text-white px-3 py-2 relative max-w-[80%] ml-auto">
                  <AllCorners color="blue" />
                  <div className="text-xs">
                    Thanks! Generated in real-time ⚡
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-blue-500 overflow-hidden relative flex-shrink-0">
                  {displayAvatars[1] && (
                    <Image
                      src={displayAvatars[1]}
                      alt="you"
                      className="w-full h-full object-cover"
                      width={32}
                      height={32}
                      unoptimized
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="text-[10px] text-gray-400 mt-4 pt-3 border-t border-gray-200">
            Chat interface integration
          </div>
        </div>

        <div className="lg:col-span-8 border border-gray-200 bg-gray-50 p-5 sm:p-6 relative min-h-[280px]">
          <AllCorners color="blue" />
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-sm font-bold text-gray-900 mb-0.5">
                Live Avatar Stream
              </div>
              <div className="text-xs text-gray-500">
                Real-time generation • {displayAvatars.length} avatars
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 relative">
              <AllCorners color="gray" />
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-semibold text-gray-700">
                STREAMING
              </span>
            </div>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3">
            {displayAvatars.slice(0, 12).map((avatar, i) => {
              const isFirst = i === 0;
              return (
                <div
                  key={i}
                  className="aspect-square border border-gray-200 bg-white relative overflow-hidden rounded-full hover:scale-105 transition-transform"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <AllCorners color={isFirst ? "blue" : "gray"} />
                  <Image
                    src={avatar || "/android-chrome-192x192.png"}
                    alt={`Avatar ${i + 1}`}
                    className="w-full h-full object-contain"
                    width={200}
                    height={200}
                    unoptimized
                  />
                  {hoveredIndex === i && (
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-2">
                      <div className="text-[9px] text-white text-center leading-tight font-medium">
                        {extractDescription(avatar, i)}
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-0.5 right-0.5 text-[8px] text-gray-700 font-bold bg-white/95 px-1.5 py-0.5 rounded-full border border-gray-200">
                    {i + 1}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex items-center gap-2 text-[10px] text-gray-500">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 border border-blue-500 bg-blue-50 relative">
                <AllCorners color="blue" />
              </div>
              <span>Latest</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 border border-gray-200 bg-white relative">
                <AllCorners color="gray" />
              </div>
              <span>Generated</span>
            </div>
          </div>
        </div>

        {/* Code Example - Enhanced */}
        <div className="lg:col-span-5 border border-gray-200 bg-gray-900 p-5 sm:p-6 relative min-h-[260px] flex flex-col">
          <AllCorners color="blue" />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs font-bold text-gray-500 tracking-wider">
                DEVELOPER API
              </div>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
            </div>
              <div className="font-mono text-[10px] sm:text-xs space-y-1 leading-relaxed">
              <div className="text-gray-500">{`// User authentication system`}</div>
              <div className="text-purple-400">
                const <span className="text-blue-400">user</span> ={" "}
                <span className="text-yellow-400">await</span> getUser();
              </div>
              <div className="text-gray-300 mt-2">{"{"}</div>
              <div className="text-gray-300 pl-4">
                id: <span className="text-orange-400">&#39;usr_7x9k2&#39;</span>,
              </div>
              <div className="text-gray-300 pl-4">
                name: <span className="text-green-400">&#39;Sarah Chen&#39;</span>,
              </div>
              <div className="text-gray-300 pl-4">
                role: <span className="text-green-400">&#39;developer&#39;</span>,
              </div>
              <div className="text-gray-300 pl-4 flex items-center gap-2">
                avatar: <span className="text-orange-400">&#39;generated.png&#39;</span>
                <div className="w-5 h-5 rounded-full border border-gray-600 overflow-hidden relative inline-block flex-shrink-0 ring-1 ring-blue-500">
                  {displayAvatars[1] && (
                    <Image
                      src={displayAvatars[1]}
                      alt="Code avatar"
                      className="w-full h-full object-cover"
                      width={20}
                      height={20}
                      unoptimized
                    />
                  )}
                </div>
              </div>
              <div className="text-gray-300 pl-4">
                verified: <span className="text-blue-400">true</span>,
              </div>
              <div className="text-gray-300 pl-4">
                lastSeen: <span className="text-green-400">&#39;2m ago&#39;</span>
              </div>
              <div className="text-gray-300">{"}"}</div>
            </div>
          </div>
          <div className="text-[10px] text-gray-600 mt-4 pt-3 border-t border-gray-800">
            Code integration example
          </div>
        </div>

        <div className="lg:col-span-4 border border-gray-200 bg-white p-5 sm:p-6 relative min-h-[260px] flex flex-col">
          <AllCorners color="gray" />
          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <div className="text-xs font-bold text-gray-400 tracking-wider">
                TEAM WORKSPACE
              </div>
              <div className="text-[10px] px-2 py-1 bg-blue-50 text-blue-600 font-semibold border border-blue-200 relative">
                <AllCorners color="blue" />8 online
              </div>
            </div>
            <div className="space-y-2.5">
              {displayAvatars.slice(2, 7).map((avatar, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-2.5 border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors relative group"
                >
                  <AllCorners color="gray" />
                  <div className="w-10 h-10 rounded-full border-2 border-gray-300 overflow-hidden relative flex-shrink-0 group-hover:border-blue-400 transition-colors">
                    {avatar && (
                      <Image
                        src={avatar}
                        alt={`Team ${i}`}
                        className="w-full h-full object-cover"
                        width={40}
                        height={40}
                        unoptimized
                      />
                    )}
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-gray-900 truncate">
                      Team Member {i + 3}
                    </div>
                    <div className="text-[10px] text-gray-500">
                      {
                        [
                          "Designer",
                          "Engineer",
                          "Manager",
                          "Developer",
                          "Analyst",
                        ][i]
                      }
                    </div>
                  </div>
                  <div className="text-[9px] text-gray-400">2m</div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-[10px] text-gray-400 mt-4 pt-3 border-t border-gray-200">
            Team collaboration view
          </div>
        </div>

        <div className="lg:col-span-3 border border-gray-200 bg-gradient-to-br from-blue-50 via-white to-purple-50 p-5 sm:p-6 relative min-h-[260px] flex flex-col">
          <AllCorners color="blue" />
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="text-xs font-bold text-gray-400 tracking-wider mb-4">
              PROFILE
            </div>
            <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden relative flex-shrink-0 ring-4 ring-blue-100">
              {displayAvatars[5] && (
                <Image
                  src={displayAvatars[5]}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  width={96}
                  height={96}
                  unoptimized
                />
              )}
            </div>
            <div className="mt-4 space-y-1">
              <div className="font-bold text-base text-gray-900">
                Dr. Martinez
              </div>
              <div className="text-xs text-gray-600">Medical Professional</div>
              <div className="text-[10px] text-gray-500">San Francisco, CA</div>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <div className="text-center">
                <div className="text-sm font-bold text-gray-900">2.4k</div>
                <div className="text-[9px] text-gray-500">Followers</div>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-sm font-bold text-gray-900">847</div>
                <div className="text-[9px] text-gray-500">Following</div>
              </div>
            </div>
          </div>
          <div className="text-[10px] text-gray-400 mt-4 pt-3 border-t border-gray-200">
            User profile card
          </div>
        </div>

        <div className="lg:col-span-12 border border-gray-200 bg-white p-5 sm:p-6 relative min-h-[200px]">
          <AllCorners color="gray" />
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-xs font-bold text-gray-400 tracking-wider">
                DISCUSSION THREAD
              </div>
              <div className="text-[10px] text-gray-500 mt-0.5">
                Community feedback and responses
              </div>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-gray-500">
              <span className="font-semibold text-gray-700">
                {displayAvatars.slice(6, 10).length}
              </span>
              comments
            </div>
          </div>
          <div className="space-y-4">
            {displayAvatars.slice(6, 10).map((avatar, i) => (
              <div
                key={i}
                className="flex gap-3 p-3 border border-gray-200 bg-gray-50 relative"
              >
                <AllCorners color="gray" />
                <div className="w-11 h-11 rounded-full border-2 border-gray-200 overflow-hidden relative flex-shrink-0">
                  {avatar && (
                    <Image
                      src={avatar}
                      alt={`Commenter ${i}`}
                      className="w-full h-full object-cover"
                      width={44}
                      height={44}
                      unoptimized
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-xs font-bold text-gray-900">
                      User {i + 7}
                    </div>
                    <div className="text-[10px] text-gray-400">
                      • {["2 min", "5 min", "12 min", "1 hr"][i]} ago
                    </div>
                  </div>
                  <div className="text-xs text-gray-700 leading-relaxed">
                    {
                      [
                        "The avatar generation quality is incredible! Using these in our production app now.",
                        "Real-time streaming makes the UX so much smoother. Great implementation!",
                        "Love how these integrate seamlessly with our existing user system.",
                        "Been testing with 1000+ users - performance is solid across the board.",
                      ][i]
                    }
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <button className="text-[10px] text-gray-500 hover:text-blue-600 font-medium">
                      Reply
                    </button>
                    <button className="text-[10px] text-gray-500 hover:text-blue-600 font-medium">
                      Like
                    </button>
                    <div className="text-[10px] text-gray-400">
                      {[12, 8, 23, 5][i]} likes
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-[10px] text-gray-400 mt-4 pt-3 border-t border-gray-200">
            Comment thread integration
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveGeneration;
