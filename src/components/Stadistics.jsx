import React from "react";

export const Stadistics = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <p className="text-gray-600 text-sm font-medium mb-1">Total Students</p>
        <p className="text-3xl font-bold text-gray-900">32</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-1">
          <p className="text-gray-600 text-sm font-medium">Present</p>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <p className="text-3xl font-bold text-gray-900">28</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-1">
          <p className="text-gray-600 text-sm font-medium">Absent</p>
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
        </div>
        <p className="text-3xl font-bold text-gray-900">3</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-1">
          <p className="text-gray-600 text-sm font-medium">Late</p>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        </div>
        <p className="text-3xl font-bold text-gray-900">1</p>
      </div>
    </section>
  );
};