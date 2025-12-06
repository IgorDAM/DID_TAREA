import { UI_TEXTS } from "../data/constantes";

export const StudentCard = ({ student, updateAttendance }) => {
  const { id, name, image, status } = student;

  const handleStatusChange = (newStatus) => {
    updateAttendance(id, newStatus);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full border border-gray-300"
          />
          <div>
            <h3 className="font-bold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600">
              {UI_TEXTS.STUDENT_ID_PREFIX}
              {id}
            </p>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-sm font-bold ${
            status === "present"
              ? "bg-green-100 text-green-800 border border-green-200"
              : status === "absent"
              ? "bg-red-100 text-red-800 border border-red-200"
              : "bg-yellow-100 text-yellow-800 border border-yellow-200"
          }`}
        >
          {status === "present"
            ? UI_TEXTS.STATUS_PRESENT
            : status === "absent"
            ? UI_TEXTS.STATUS_ABSENT
            : UI_TEXTS.STATUS_LATE}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => handleStatusChange("present")}
          className={`py-2 rounded text-sm font-bold ${
            status === "present"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {UI_TEXTS.BUTTON_PRESENT}
        </button>
        <button
          onClick={() => handleStatusChange("absent")}
          className={`py-2 rounded text-sm font-bold ${
            status === "absent"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {UI_TEXTS.BUTTON_ABSENT}
        </button>
        <button
          onClick={() => handleStatusChange("late")}
          className={`py-2 rounded text-sm font-bold ${
            status === "late"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {UI_TEXTS.BUTTON_LATE}
        </button>
      </div>
    </div>
  );
};
