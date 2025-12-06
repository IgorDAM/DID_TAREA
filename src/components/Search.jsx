export const Search = () => {
  return (
    <div>
      <div className="relative max-w-md ml-auto">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <span className="material-symbols-outlined text-gray-400">
            search
          </span>
        </div>
        <input
          type="text"
          className="w-full py-3 pl-10 pr-4 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search student name..."
          disabled
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
            Demo
          </span>
        </div>
      </div>
    </div>
  );
};
