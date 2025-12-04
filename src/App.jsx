import { useEffect, useState } from 'react';
import { Header, StudentCard, Search } from './components/';
import { db } from './data/db';

const initialAttendance = JSON.parse(localStorage.getItem('attendance')) || db;

const App = () => {
  const [attendance, setAttendance] = useState(initialAttendance);

  useEffect(() => {
    localStorage.setItem('attendance', JSON.stringify(attendance));
  }, [attendance]);

  const updateAttendance = (id, status) => {
    setAttendance(
      attendance.map(student =>
        student.id === id ? { ...student, status } : student
      )
    );
  };

  const clearAttendance = () => {
    setAttendance(
      attendance.map(student => ({ ...student, status: 'present' }))
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        attendance={attendance}
        updateAttendance={updateAttendance}
        clearAttendance={clearAttendance}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="text-center p-4 bg-white rounded-lg border border-gray-100">
            <p className="text-gray-600 text-sm font-medium">Total Students</p>
            <p className="text-2xl font-bold text-gray-900">{attendance.length}</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg border border-green-100">
            <p className="text-gray-600 text-sm font-medium">Present</p>
            <p className="text-2xl font-bold text-gray-900">
              {attendance.filter(s => s.status === 'present').length}
            </p>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg border border-red-100">
            <p className="text-gray-600 text-sm font-medium">Absent</p>
            <p className="text-2xl font-bold text-gray-900">
              {attendance.filter(s => s.status === 'absent').length}
            </p>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-100">
            <p className="text-gray-600 text-sm font-medium">Late</p>
            <p className="text-2xl font-bold text-gray-900">
              {attendance.filter(s => s.status === 'late').length}
            </p>
          </div>
        </div>

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

export default App;