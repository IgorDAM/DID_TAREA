import React from "react";
import { UI_TEXTS } from "../data/constantes";

export const Statistics = ({ attendance }) => {
  const total = attendance.length;
  const present = attendance.filter((s) => s.status === "present").length;
  const absent = attendance.filter((s) => s.status === "absent").length;
  const late = attendance.filter((s) => s.status === "late").length;

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <p className="text-gray-600 text-sm font-medium mb-1">
          {UI_TEXTS.TOTAL_STUDENTS}
        </p>
        <p className="text-3xl font-bold text-gray-900">{total}</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-1">
          <p className="text-gray-600 text-sm font-medium">
            {UI_TEXTS.PRESENT}
          </p>
        </div>
        <p className="text-3xl font-bold text-green-500">{present}</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-1">
          <p className="text-gray-600 text-sm font-medium">{UI_TEXTS.ABSENT}</p>
        </div>
        <p className="text-3xl font-bold text-red-500">{absent}</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-1">
          <p className="text-gray-600 text-sm font-medium">{UI_TEXTS.LATE}</p>
        </div>
        <p className="text-3xl font-bold text-yellow-500">{late}</p>
      </div>
    </section>
  );
};
