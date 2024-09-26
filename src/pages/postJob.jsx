import "../app.css";
import Layout2 from "../pages/Layout2";
import InputForm from "../components/inputForm";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function PostJob() {
  const { id } = useParams();
  const url = "https://job-vacancy-api.vercel.app/api/jobs";
  const token = localStorage.getItem("token");
  const [input, setInput] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: "",
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: "",
    salary_max: "",
  });

  useEffect(() => {
    if (id) {
      axios;
      axios
        .get(`${url}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          const data = res.data;
          setInput({
            title: data.title,
            job_description: data.job_description,
            job_qualification: data.job_qualification,
            job_type: data.job_type,
            job_tenure: data.job_tenure,
            job_status: data.job_status,
            company_name: data.company_name,
            company_image_url: data.company_image_url,
            company_city: data.company_city,
            salary_min: data.salary_min,
            salary_max: data.salary_max,
          });
        })
        .catch((error) => {
          console.error("Error response:", error.response);
        });
    }
  }, [id, token, url]);

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "title") {
      setInput({ ...input, title: value });
    } else if (name === "company_name") {
      setInput({ ...input, company_name: value });
    } else if (name === "company_city") {
      setInput({ ...input, company_city: value });
    } else if (name === "job_description") {
      setInput({ ...input, job_description: value });
    } else if (name === "job_qualification") {
      setInput({ ...input, job_qualification: value });
    } else if (name === "job_type") {
      setInput({ ...input, job_type: value });
    } else if (name === "job_tenure") {
      setInput({ ...input, job_tenure: value });
    } else if (name === "job_status") {
      setInput({ ...input, job_status: value });
    } else if (name === "salary_min") {
      setInput({ ...input, salary_min: value });
    } else if (name === "salary_max") {
      setInput({ ...input, salary_max: value });
    } else if (name === "company_image_url") {
      setInput({ ...input, company_image_url: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let { title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_image_url, company_city, salary_min, salary_max } = input;

    if (id) {
      axios
        .put(
          `${url}/${id}`,
          {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      axios
        .post(
          url,
          {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    setInput({
      title: "",
      job_description: "",
      job_qualification: "",
      job_type: "",
      job_tenure: "",
      job_status: "",
      company_name: "",
      company_image_url: "",
      company_city: "",
      salary_min: "",
      salary_max: "",
    });
  };

  return (
    <Layout2>
      <div className="w-full h-full flex flex-col items-center justify-center font-opensans">
        <div className="bg-slate-50 w-[50%] my-14 p-10 flex flex-col justify-center rounded-xl shadow-lg">
          <h1 className="font-bold text-2xl font-montserrat text-center pt-3 pb-7">Create & Update Job</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <InputForm type="text" name="title" label="Title" value={input.title} onChange={handleInput} />
              <InputForm type="text" name="job_description" label="Job Description" value={input.job_description} onChange={handleInput} />
              <InputForm type="text" name="job_qualification" label="Job Qualification" value={input.job_qualification} onChange={handleInput} />
            </div>
            <div className="flex gap-10">
              <div className="w-1/2">
                <InputForm type="text" name="job_type" label="Job Type" value={input.job_type} onChange={handleInput} />
                <InputForm type="number" name="job_status" label="Job Status" value={input.job_status} onChange={handleInput} />
                <InputForm type="text" name="job_tenure" label="Job Tenure" value={input.job_tenure} onChange={handleInput} />
                <InputForm type="number" name="salary_min" label="Range Minimum Salary" value={input.salary_min} onChange={handleInput} />
              </div>
              <div className="w-1/2">
                <InputForm type="text" name="company_name" label="Company Name" value={input.company_name} onChange={handleInput} />
                <InputForm type="text" name="company_city" label="Company City" value={input.company_city} onChange={handleInput} />
                <InputForm type="text" name="company_image_url" label="Company Image (URL)" value={input.company_image_url} onChange={handleInput} />
                <InputForm type="number" name="salary_max" label="Range Maximum Salary" value={input.salary_max} onChange={handleInput} />
              </div>
            </div>
            <button type={"submit"} className="bg-[#15ABFF] text-white font-bold py-2 px-7 rounded-xl mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout2>
  );
}
export default PostJob;
