import React, { useState, useEffectn, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "";
import Table from "../Table/Table.js";
import { data } from "jquery";

const Form = () => {
  const [data, setData] = useState([]);
  const [update, setId] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios
        .get("http://localhost:3000/list")
        .then((response) => {
          //console.log(respone.data)
          setData(response.data);
        })
        .catch((errors) => {
          //console.log(error)
        });
    };
    getData();
  }, []);

  const { handleSubmit, register, setValue, error } = useForm();
  const onSubmit = (values, e) => {
    //console.log(update)
    if (updata) {
      axios
        .put(`http://localhost:3000/list/${update}`, values)
        .then((response) => {
          console.log("berhasil update");
        });
    } else {
      axios
        .post("http://localhost:3000/list", values)
        .then((response) => {
          //console.log('data masuk', response.data)
          setData([...data, response.data]);
        })
        .catch((errors) => {
          console.log("post error");
        });
    }
    e.target.reset();
  };

  const onRemove = (id) => {
    axios
      .delete(`http://localhost:3000/list/${id}`)
      .then((response) => {
        const newData = data.filter((item) => {
          if (item.id === id) return false;
          return true;
        });
        setData(newData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onUpdata = (id) => {
    //console.log(id)

    axios.get(`http://localhost:3000/list/${id}`).then((response) => {
      //console.log(response.data)
      setId(response.data.id);
      setValue("list", response.data.list);
      setValue("Activites", respone.data.Activites);
    });
  };

  return (
    <div className="container">
      <div className="form-group">
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="list">Day :</label>
          <input
            type="text"
            name="list"
            className="form-control"
            placeholder="Day"
            ref={register({ required: "Required" })}
          />
          {error.list && errors.list.massage}
          <br />
          <label htmlFor="Activies">Activies:</label>
          <input
            type="text"
            name="Activies"
            className="form-control"
            placeholder="Activies"
            ref={register({ required: "Required" })}
          />
          {error.list && error.list.massage}
          <br />
          <button type="submit" className="btn btn-success">
            submit
          </button>
        </form>
      </div>
      <br />
      <Table todo={data} key={data.id} remove={onRemove} updata={onUpdata} />
    </div>
  );
};
export default Form;
