import { useEffect, useState } from "react";
import { Header, StudentCard, Search, Statistics } from "./components/";
import { db } from "./data/db.js";

const initialAttendance = JSON.parse(localStorage.getItem("attendance")) || db;

export default function App() {
  const [attendance, setAttendance] = useState(initialAttendance);

  useEffect(() => {
    localStorage.setItem("attendance", JSON.stringify(attendance));
  }, [attendance]);

  const updateAttendance = (id, status) => {
    setAttendance(
      attendance.map((student) =>
        student.id === id ? { ...student, status } : student
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <Statistics attendance={attendance} />

        <div className="flex justify-end mb-8">
          <Search />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attendance.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              updateAttendance={updateAttendance}
            />
          ))}
        </div>
      </main>
    </div>
  );
};


