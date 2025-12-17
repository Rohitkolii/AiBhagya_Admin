import React, { useEffect, useState } from "react";
import Filters from "../components/Filters";
import Table from "../components/Table";
import AddItemForm from "./AddItemForm";
import { GetReportCategories, GetSingleReportCategory } from "../utils/api";

const ReportsCategory = () => {
  const [reportCategories, setReportCategories] = useState([]);
  const [reportCategory, setReportCategory] = useState({});

  const FetchReportCategories = async () => {
    try {
      const response = await GetReportCategories();
      if (true) {
        setReportCategories(response?.data);
      }
    } catch (error) {
      console.error("Error in Fetching ReportsCategory: ", error);
    }
  };

  const FetchSingleReportCategory = async (id) => {
    console.log(id)
    try {
      const response = await GetSingleReportCategory(id);
      if (true) {
        const data = {...response?.data , imagepreview: response?.data?.image}
        delete data.image;
        console.log(data)
        setReportCategory(data);
      }
    } catch (error) {
      console.error("Error in Fetching ReportsCategory: ", error);
    }
  };

  useEffect(() => {
    FetchReportCategories();
  }, []);

  // console.log(reportCategories)

  const columns = [
    { title: "ID", key: "id", sortable: true },
    { title: "Category", key: "category", sortable: true },
    { title: "short Desc", key: "short_desc", sortable: true },
    { title: "Desc", key: "desc", sortable: true },
    {
      title: "Created On",
      key: "created_on",
      sortable: true,
      render: (row) => {
        return new Date(row.created_on).toLocaleDateString("en-IN");
      },
    },
    {
      title: "Actions",
      render: (row) => (
        <div className="flex gap-2">
          <button onClick={()=> FetchSingleReportCategory(row?.id)} className="px-3 py-1 text-xs text-white bg-primary rounded">
            Edit
          </button>
          <button className="px-3 py-1 text-xs bg-red-500 text-white rounded">
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <AddItemForm setReportCategory={setReportCategory} reportCategory={reportCategory} />
      <Filters data={reportCategories} />
      <Table columns={columns} data={reportCategories} />
    </div>
  );
};

export default ReportsCategory;
