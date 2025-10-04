interface AllCornersProps {
  color?: 'gray' | 'blue' | 'black';
}

const AllCorners = ({ color = 'gray' }: AllCornersProps) => {
  const horiz = color === 'blue' ? 'bg-blue-400' : color === 'black' ? 'bg-black' : 'bg-gray-300';
  const vert = horiz;

  return (
    <>
      <div className="absolute top-0 left-0 w-3 h-3">
        <div className={`absolute top-0 left-0 w-3 h-px ${horiz}`}></div>
        <div className={`absolute top-0 left-0 w-px h-3 ${vert}`}></div>
      </div>
      <div className="absolute top-0 right-0 w-3 h-3">
        <div className={`absolute top-0 right-0 w-3 h-px ${horiz}`}></div>
        <div className={`absolute top-0 right-0 w-px h-3 ${vert}`}></div>
      </div>
      <div className="absolute bottom-0 left-0 w-3 h-3">
        <div className={`absolute bottom-0 left-0 w-3 h-px ${horiz}`}></div>
        <div className={`absolute bottom-0 left-0 w-px h-3 ${vert}`}></div>
      </div>
      <div className="absolute bottom-0 right-0 w-3 h-3">
        <div className={`absolute bottom-0 right-0 w-3 h-px ${horiz}`}></div>
        <div className={`absolute bottom-0 right-0 w-px h-3 ${vert}`}></div>
      </div>
    </>
  );
};

export default AllCorners;