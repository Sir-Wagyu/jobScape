import "../app.css";
import Layout2 from "../pages/Layout2";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table } from "flowbite-react";

function ListJob() {
  const url = "https://job-vacancy-api.vercel.app/api/jobs";
  const [data, setData] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (fetchStatus === true) {
      axios.get(url).then((res) => {
        setData(res.data);
      });
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  const handleDelete = (id) => {
    let idData = id;

    axios
      .delete(`${url}/${idData}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setFetchStatus(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout2>
      <div className="w-full h-full flex flex-col items-center font-opensans overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Title</Table.HeadCell>
            <Table.HeadCell>Company</Table.HeadCell>
            <Table.HeadCell>Location</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
            <Table.HeadCell>Requirement</Table.HeadCell>
            <Table.HeadCell>Type</Table.HeadCell>
            <Table.HeadCell>Tenure</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Salary</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data.map((item, index) => (
              <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{item.title}</Table.Cell>
                <Table.Cell>{item.company_name}</Table.Cell>
                <Table.Cell>{item.company_city}</Table.Cell>
                <Table.Cell>{item.job_description}</Table.Cell>
                <Table.Cell>{item.job_qualification}</Table.Cell>
                <Table.Cell>{item.job_type}</Table.Cell>
                <Table.Cell>{item.job_tenure}</Table.Cell>
                <Table.Cell>{item.job_status ? "Open" : "Closed"}</Table.Cell>
                <Table.Cell>
                  {item.salary_min} ~ {item.salary_max}
                </Table.Cell>
                <Table.Cell className="flex flex-col font-semibold">
                  <Link to={`/dashboard/list-job/create-update/${item._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Edit
                  </Link>
                  <Link onClick={() => handleDelete(item._id)} className="font-medium text-red-600 hover:underline dark:text-red-500">
                    Delete
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </Layout2>
  );
}

export default ListJob;
