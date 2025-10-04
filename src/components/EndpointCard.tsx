import AllCorners from './AllCorners';

interface EndpointCardProps {
  handleCopy: (text: string) => void;
  isCopied: boolean;
}

const EndpointCard = ({ handleCopy, isCopied }: EndpointCardProps) => {
  const exampleCode = `{
  "url": "https://example.com/avatar.png"
}`;

  return (
    <div className="space-y-8 mb-20">
      <div className="border border-gray-200 bg-gray-50 relative p-10">
        <AllCorners color="gray" />

        <div className="flex items-center gap-4 mb-8">
          <span className="px-4 py-1.5 bg-green-100 text-green-800 text-xs font-bold border border-green-300 relative">
            <span className="relative z-10">GET</span>
          </span>
          <code className="text-black text-xl font-semibold">/api/avatar</code>
        </div>

        <p className="text-gray-700 mb-8 leading-relaxed text-lg">
          Generates an avatar based on the provided description using advanced AI models.
        </p>

        <div className="mb-8">
          <h4 className="text-sm text-gray-600 uppercase tracking-wider mb-4 font-semibold">Parameters</h4>
          <div className="border border-gray-200 bg-white p-6 relative">
            <AllCorners color="gray" />
            <div className="flex gap-4 items-start">
              <code className="text-black text-base font-semibold">description</code>
              <span className="text-xs px-3 py-1 bg-red-100 text-red-800 border border-red-300 font-bold">REQUIRED</span>
              <span className="text-gray-600 text-sm">string</span>
            </div>
            <p className="text-gray-600 text-sm mt-3">
              A text description of the desired avatar characteristics.
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-sm text-gray-600 uppercase tracking-wider mb-4 font-semibold">Response Example</h4>
          <div className="relative border border-gray-200 bg-white overflow-hidden">
            <AllCorners color="gray" />
            <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-gray-50">
              <span className="text-xs text-gray-600 font-semibold tracking-wider">JSON</span>
              <button
                onClick={() => handleCopy(exampleCode)}
                className="text-xs px-4 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 border border-gray-400 transition-all font-semibold relative group">
                <span className="relative z-10">{isCopied ? "✓ Copied" : "Copy"}</span>
              </button>
            </div>
            <pre className="p-6 text-base overflow-x-auto bg-white">
              <code>
                <span className="text-gray-600">{"{"}</span>
                {"\n  "}
                <span className="text-gray-700">"url"</span>
                <span className="text-gray-600">:</span>
                {" "}
                <span className="text-gray-600">"https://example.com/avatar.png"</span>
                {"\n"}
                <span className="text-gray-600">{"}"}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndpointCard;