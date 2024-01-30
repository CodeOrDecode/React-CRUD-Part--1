import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ title: "", ischeck: false, assign: "" });

  function handleChange(event) {
    let value =
      event.target.type == "checkbox"
        ? event.target.checked
        : event.target.value;

    let newObj1 = { ...form, [event.target.name]: value };
    setForm(newObj1);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let newobj2 = { ...form, id: Math.random() + Date.now() };
    setData([...data, newobj2]);
    setForm({ title: "", ischeck: false, assign: "" });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter todo"
          name="title"
          value={form.title}
          onChange={handleChange}
        />

        <label>Complete : </label>
        <input
          type="checkbox"
          name="ischeck"
          checked={form.ischeck}
          onChange={handleChange}
        />

        <select name="assign" value={form.assign} onChange={handleChange}>
          <option value="">Select any one</option>
          <option value="Ram">Ram</option>
          <option value="Sam">Sam</option>
        </select>
        <button>Add</button>
      </form>

      {data.map((ele)=>{
        return <div key={ele.id} style={{border:"1px solid black"}}>

          <h2>Title is : {ele.title}</h2>
          <h3>Assigned to : {ele.assign}</h3>
          <h4>{ele.ischeck?"Completed":"Pending"}</h4>
        </div>
      })}
    </>
  );
}

export default App;
