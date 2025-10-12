import React, { useState, useEffect } from 'react';
import AllCorners from './AllCorners';

interface EndpointCardProps {
  handleCopy: (text: string) => void;
  isCopied: boolean;
}

const EndpointCard = ({ handleCopy, isCopied }: EndpointCardProps) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  useEffect(() => {
    if (!isCopied) {
      setCopiedKey(null);
    }
  }, [isCopied]);

  const doCopy = (key: string, text: string) => {
    handleCopy(text);
    setCopiedKey(key);
    window.setTimeout(() => setCopiedKey((cur) => (cur === key ? null : cur)), 2000);
  };
  const baseUrl = (process.env.NEXT_PUBLIC_FACEGEN_BASE as string) || '';
//   const exampleCode = `{
//   "url": "https://example.com/avatar.png"
// }`;

  const curlExample = `curl -L "${baseUrl}/professional-doctor" -o avatar.png`;
  const fetchExample = `fetch("${baseUrl}/professional-doctor").then(r => r.blob()).then(b => {/* save blob as file */})`;

  return (
    <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-20">
      <div className="border border-gray-200 bg-gray-50 relative p-4 sm:p-6 md:p-10">
        <AllCorners color="gray" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-4 sm:mb-4">
          <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-green-100 text-green-800 text-[10px] sm:text-xs font-bold border border-green-300 relative">
            <span className="relative z-10">GET</span>
          </span>
          <div className="flex items-center gap-3 relative overflow-x-auto w-full">
                  <code className="text-black text-sm sm:text-base md:text-xl font-semibold break-all">{baseUrl}/[description]</code>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider mb-3 sm:mb-4 font-semibold">Usage</h4>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h5 className="text-xs sm:text-sm text-gray-700 font-semibold mb-2">Curl</h5>
              <div className="relative border border-gray-200 bg-white overflow-hidden">
                <AllCorners color="gray" />
                <div className="flex items-center justify-between px-3 sm:px-6 py-2 sm:py-3 border-b border-gray-200 bg-gray-50">
                  <span className="text-[10px] sm:text-xs text-gray-600 font-semibold tracking-wider">Shell</span>
                  <button
                    onClick={() => doCopy('curl', curlExample)}
                    className="text-[10px] sm:text-xs px-2 sm:px-4 py-1 sm:py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 border border-gray-400 transition-all font-semibold relative group">
                    <span className="relative z-10">{copiedKey === 'curl' ? "✓ Copied" : "Copy"}</span>
                  </button>
                </div>
                <pre className="p-3 sm:p-6 text-xs sm:text-sm md:text-base overflow-x-auto bg-white">
                  <code>{curlExample}</code>
                </pre>
              </div>
            </div>
            <div>
              <h5 className="text-xs sm:text-sm text-gray-700 font-semibold mb-2">Browser Fetch</h5>
              <div className="relative border border-gray-200 bg-white overflow-hidden">
                <AllCorners color="gray" />
                <div className="flex items-center justify-between px-3 sm:px-6 py-2 sm:py-3 border-b border-gray-200 bg-gray-50">
                  <span className="text-[10px] sm:text-xs text-gray-600 font-semibold tracking-wider">JavaScript</span>
                  <button
                    onClick={() => doCopy('fetch', fetchExample)}
                    className="text-[10px] sm:text-xs px-2 sm:px-4 py-1 sm:py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 border border-gray-400 transition-all font-semibold relative group">
                    <span className="relative z-10">{copiedKey === 'fetch' ? "✓ Copied" : "Copy"}</span>
                  </button>
                </div>
                <pre className="p-3 sm:p-6 text-xs sm:text-sm md:text-base overflow-x-auto bg-white">
                  <code>{fetchExample}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg">
          Generates an avatar based on the provided description.
        </p>

        <div className="mb-6 sm:mb-8">
          <h4 className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider mb-3 sm:mb-4 font-semibold">Parameters</h4>
          <div className="border border-gray-200 bg-white p-3 sm:p-6 relative">
            <AllCorners color="gray" />
            <div className="flex flex-wrap gap-2 sm:gap-4 items-start">
              <code className="text-black text-sm sm:text-base font-semibold">description</code>
              <span className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 bg-red-100 text-red-800 border border-red-300 font-bold">REQUIRED</span>
              <span className="text-gray-600 text-xs sm:text-sm">string</span>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm mt-2 sm:mt-3">
              A text description of the desired avatar characteristics.
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider mb-3 sm:mb-4 font-semibold">HTML (img)</h4>
          <div className="relative border border-gray-200 bg-white overflow-hidden">
            <AllCorners color="gray" />
            <div className="flex items-center justify-between px-3 sm:px-6 py-2 sm:py-3 border-b border-gray-200 bg-gray-50">
              <span className="text-[10px] sm:text-xs text-gray-600 font-semibold tracking-wider">HTML</span>
              <button
                onClick={() => doCopy('html', `<img src="${baseUrl}/professional-doctor" alt="Avatar" />`)}
                className="text-[10px] sm:text-xs px-2 sm:px-4 py-1 sm:py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 border border-gray-400 transition-all font-semibold relative group">
                <span className="relative z-10">{copiedKey === 'html' ? "✓ Copied" : "Copy"}</span>
              </button>
            </div>
            <pre className="p-3 sm:p-6 text-xs sm:text-sm md:text-base overflow-x-auto bg-white">
              <code>{`<img src="${baseUrl}/professional-doctor" alt="Avatar" />`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndpointCard;