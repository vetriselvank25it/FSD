import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    password: "",
    email: "",
    age: 18,
    phone: "",
    website: "",
    dob: "",
    time: "",
    dateTime: "",
    month: "",
    week: "",
    gender: "",
    skills: [],
    color: "#174ea6",
    level: 50,
    search: "",
    comments: "",
    course: "ReactJS"
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    if (name === "skills") {
      setForm({
        ...form,
        skills: checked
          ? [...form.skills, value]
          : form.skills.filter(skill => skill !== value)
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("Registration submitted successfully!");
  }

  function handleReset() {
    setForm({
      name: "",
      password: "",
      email: "",
      age: 18,
      phone: "",
      website: "",
      dob: "",
      time: "",
      dateTime: "",
      month: "",
      week: "",
      gender: "",
      skills: [],
      color: "#174ea6",
      level: 50,
      search: "",
      comments: "",
      course: "ReactJS"
    });
    setMessage("");
  }

  return (
    <div className="container">
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">

          <label>Name:</label>
          <input name="name" type="text" value={form.name}
            onChange={handleChange} required />

          <label>Password:</label>
          <input name="password" type="password"
            value={form.password} onChange={handleChange} required />

          <label>Email:</label>
          <input name="email" type="email" value={form.email}
            onChange={handleChange} required />

          <label>Age:</label>
          <input name="age" type="number" min="18" max="60"
            value={form.age} onChange={handleChange} />

          <label>Phone:</label>
          <input name="phone" type="tel" value={form.phone}
            onChange={handleChange} />

          <label>Website:</label>
          <input name="website" type="url" value={form.website}
            onChange={handleChange} />

          <label>Date of Birth:</label>
          <input name="dob" type="date" value={form.dob}
            onChange={handleChange} />

          <label>Preferred Time:</label>
          <input name="time" type="time" value={form.time}
            onChange={handleChange} />

          <label>Date and Time:</label>
          <input name="dateTime" type="datetime-local"
            value={form.dateTime} onChange={handleChange} />

          <label>Month:</label>
          <input name="month" type="month" value={form.month}
            onChange={handleChange} />

          <label>Week:</label>
          <input name="week" type="week" value={form.week}
            onChange={handleChange} />

          <label>Gender:</label>
          <div className="options">
            {["Male", "Female", "Other"].map(item => (
              <label key={item}>
                <input type="radio" name="gender" value={item}
                  checked={form.gender === item}
                  onChange={handleChange} />
                {item}
              </label>
            ))}
          </div>

          <label>Skills:</label>
          <div className="options">
            {["HTML", "CSS", "React"].map(item => (
              <label key={item}>
                <input type="checkbox" name="skills" value={item}
                  checked={form.skills.includes(item)}
                  onChange={handleChange} />
                {item}
              </label>
            ))}
          </div>

          <label>Upload File:</label>
          <input type="file" name="file" />

          <label>Favorite Color:</label>
          <input name="color" type="color" value={form.color}
            onChange={handleChange} />

          <label>Skill Level: {form.level}</label>
          <input name="level" type="range" min="0" max="100"
            value={form.level} onChange={handleChange} />

          <label>Search:</label>
          <input name="search" type="search" value={form.search}
            onChange={handleChange} />

          <label>Comments:</label>
          <textarea name="comments" rows="3"
            placeholder="Enter comments..." value={form.comments}
            onChange={handleChange} />

          <label>Course:</label>
          <select name="course" value={form.course}
            onChange={handleChange}>
            <option>ReactJS</option>
            <option>JavaScript</option>
            <option>Python</option>
          </select>

        </div>

        <div className="buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>Reset</button>
          <button type="button"
            onClick={() => setMessage("Button clicked!")}>
            Click Me
          </button>
        </div>

        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default App;