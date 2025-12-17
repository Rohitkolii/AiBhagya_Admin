import { useState, useMemo } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

export default function Table({ columns, data }) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Sort Logic
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
      const x = a[sortConfig.key];
      const y = b[sortConfig.key];

      if (typeof x === "string") {
        return sortConfig.direction === "asc"
          ? x.localeCompare(y)
          : y.localeCompare(x);
      }

      return sortConfig.direction === "asc" ? x - y : y - x;
    });
  }, [data, sortConfig]);

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        if (prev.direction === "asc") return { key, direction: "desc" };
        if (prev.direction === "desc") return { key: null, direction: null };
      }
      return { key, direction: "asc" };
    });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return <FaSort className="text-gray-400" />;
    if (sortConfig.direction === "asc")
      return <FaSortUp className="text-primary" />;
    if (sortConfig.direction === "desc")
      return <FaSortDown className="text-primary" />;
  };

  // Pagination Logic
  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return sortedData.slice(start, start + rowsPerPage);
  }, [sortedData, currentPage, rowsPerPage]);

  return (
    <div className="w-full overflow-x-auto rounded-sm border border-gray-300 bg-white shadow">

      {/* TABLE */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            {columns.map((col, i) => (
              <th
                key={i}
                className="px-5 py-3 font-semibold text-sm cursor-pointer select-none text-nowrap"
                onClick={() => col.sortable && handleSort(col.key)}
              >
                <div className="flex items-center gap-2">
                  {col.title}
                  {col.sortable && getSortIcon(col.key)}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {paginatedData.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-6 text-gray-500"
              >
                No records found
              </td>
            </tr>
          ) : (
            paginatedData.map((row, i) => (
              <tr
                key={i}
                className="border-t border-t-gray-300 hover:bg-gray-50 transition"
              >
                {columns.map((col, j) => (
                  <td key={j} className="px-5 py-3 text-sm">
                    {col.render ? col.render(row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* PAGINATION ONLY IF DATA EXISTS */}
      {sortedData.length > 0 && (
        <div className="flex flex-col bg-purple-100 md:flex-row items-center justify-between px-5 py-4 gap-3">

          {/* Rows per page */}
          <div className="flex items-center gap-2 text-sm">
            <span>Rows per page:</span>
            <select
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border px-2 py-1 rounded outline-none focus:border-primary"
            >
              {[5, 10, 20, 50].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          {/* Page Info */}
          <div className="text-sm">
            Page <b>{currentPage}</b> of <b>{totalPages}</b>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
            >
              Prev
            </button>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
