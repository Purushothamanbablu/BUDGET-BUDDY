import { useState } from "react";
import "../style/formDetail.css";

function EditProfile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "budget") {
      value = value.replace(/^0+/, ""); 
      if (value.length > 5) return;
    }

    if (name === "name") {
      let words = value.trim().split(/\s+/);
      if (words.length > 15) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    alert("Data saved!");

    setFormData({ name: "", email: "", budget: "" });
  };

  return (
    <div className="BoxDiv">
      <h1 className="Edithead">FILL THE DETAILS</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Type your name buddy"
          className="in"
          onChange={handleChange}
          value={formData.name}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Type your Email"
          className="in"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <input
          type="number"
          name="budget"
          placeholder="Budget Amount"
          className="in"
          onChange={handleChange}
          value={formData.budget}
          required
          pattern="[1-9][0-9]{4}"
          title="Enter a 5-digit number without leading 0"
        />
        <input type="reset" value="Reset" className="btn btn-secondary" />
        <input type="submit" value="Save" className="btn btn-success" />
      </form>
    </div>
  );
}

export default EditProfile;

