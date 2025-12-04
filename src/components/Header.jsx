export const Header = () => {
  return (
    <header className="sticky top-0 z-50 py-4 bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-2xl text-blue-600">
              <span className="material-symbols-outlined">school</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Attendance Dashboard</h1>
          </div>
          
          <div className="relative group">
            <button className="p-2 rounded-lg text-blue-600 hover:bg-blue-100 transition-colors">
              <span className="material-symbols-outlined text-2xl">person</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};