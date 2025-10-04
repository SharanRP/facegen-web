interface AllCornersProps {
  color?: string;
}

const AllCorners = ({ color = "gray" }: AllCornersProps) => (
  <>
    <div className="absolute top-0 left-0 w-3 h-3">
      <div className="absolute top-0 left-0 w-3 h-px bg-gray-400"></div>
      <div className="absolute top-0 left-0 w-px h-3 bg-gray-400"></div>
    </div>
    <div className="absolute top-0 right-0 w-3 h-3">
      <div className="absolute top-0 right-0 w-3 h-px bg-gray-400"></div>
      <div className="absolute top-0 right-0 w-px h-3 bg-gray-400"></div>
    </div>
    <div className="absolute bottom-0 left-0 w-3 h-3">
      <div className="absolute bottom-0 left-0 w-3 h-px bg-gray-400"></div>
      <div className="absolute bottom-0 left-0 w-px h-3 bg-gray-400"></div>
    </div>
    <div className="absolute bottom-0 right-0 w-3 h-3">
      <div className="absolute bottom-0 right-0 w-3 h-px bg-gray-400"></div>
      <div className="absolute bottom-0 right-0 w-px h-3 bg-gray-400"></div>
    </div>
  </>
);

export default AllCorners;