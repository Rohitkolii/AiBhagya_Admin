import * as XLSX from "xlsx";
import { FaFileExcel } from "react-icons/fa";

export default function Filters({ data }) {

  const downloadExcel = () => {
    if (!data || data.length === 0) return;

    // Convert JSON to sheet
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

    // Download file
    XLSX.writeFile(workbook, "AIBHAGYA_Data.xlsx");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6 border-t-4 border-t-[#6312A0]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

        {/* LEFT: Search Box */}
        <div className="w-full sm:w-1/4">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-purple-900 transition"
          />
        </div>

        {/* RIGHT: Dropdown + Excel Button */}
        <div className="flex w-full sm:w-auto items-center gap-3">
          
          {/* Category Dropdown */}
          <select
            className="w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-md bg-white outline-none focus:border-purple-900 transition"
          >
            <option value="">All Categories</option>
            <option value="reports">Reports</option>
            <option value="users">Users</option>
            <option value="ads">Ads</option>
            <option value="earnings">Earnings</option>
          </select>

          {/* Download Excel Button */}
          {/* <button
            onClick={downloadExcel}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition cursor-pointer"
          >
            <FaFileExcel />
            <span className="hidden sm:inline">Excel</span>
          </button> */}

        </div>
      </div>
    </div>
  );
}
