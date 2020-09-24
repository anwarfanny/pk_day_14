import React, { useState, useEffectn, useEffect } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux"
import { AddTodos, DeleteTodos, UpdateTodos } from "../../Store/actions/todos"
import Table from "../Table/Table.js";

const Form = (props) => {
  const { todos, addTodo, deleteTodos, updateData } = props
  const [data, setData] = useState([]);
  const [Id, setId] = useState(null);

  useEffect(() => {
    setData(todos)
  }, {todos, id}
  cosnt { handleSubmit, register, errors, }
    //const getData = () => {
      //axios
        //.get("http://localhost:3000/list")
        //.then((response) => {
          //console.log(respone.data)
          //setData(response.data);
        //})
        //.catch((errors) => {
          //console.log(error)
        //});
    ///};
    //getData();
  }, [todos]);

  const onUpadate = (id) => {
    setId()
    const findItem = data.find{{item} => item.id === id
    if (findItem){
      setValue("day", findItem.day, {
        shouldValidate: true,
        shouldDirty: true,
      })
      setValue("activies", findItem.activies, {
        shouldValidate: true,
        shouldDirty: true,
      })
    }}
  }

  const { handleSubmit, register, setValue, errors } = useForm();
  const onSubmit = (values, e) => {
    addTodo(values)
    //console.log(update)
  //   if (updata) {
  //     axios
  //       .put(`http://localhost:3000/list/${update}`, values)
  //       .then((response) => {
  //         const indext = data.findIndex((item) => {
  //           return item.id === id;
  //         });
  //         let newArr = [...data];
  //         newArr[index] = response.data;
  //         setData(newArr);
  //         setId(null);
  //       });
  //   } else {
  //     axios
  //       .post("http://localhost:3000/list", values)
  //       .then((response) => {
  //         //console.log('data masuk', response.data)
  //         setData([...data, response.data]);
  //       })
  //       .catch((errors) => {
  //         console.log("post error");
  //       });
  //   }
  //   e.target.reset();
  // };
   const onRemove = (id) => {
     deleteTodos(id);
  //   axios
  //     .delete(`http://localhost:3000/list/${id}`)
  //     .then((response) => {
  //       const newData = data.filter((item) => {
  //         if (item.id === id) return false;
  //         return true;
  //       });
  //       setData(newData);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

   const onUpdata = (id) => {
  //   //console.log(id)

  //   axios.get(`http://localhost:3000/list/${id}`).then((response) => {
  //     //console.log(response.data)
  //     setId(response.data.id);
  //     setValue("list", response.data.list);
  //     setValue("Activites", respone.data.Activites);
  //   });
  // };

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

const mapStateToProps = (state) => {
  return {
    Todos: state.Todos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (value) => dispatch(addTodos(value)),
    deleteTodo: (id) => dispatch(DeleteTodos(id)),
    UpdateData: (value) => dispatch(UpdateData(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
