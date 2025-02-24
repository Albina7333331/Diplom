import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Заполните ваши данные</h2>
      <form onSubmit={handleSubmit}>
        <label>Имя</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

        <label>Фамилия</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />

        <div className="gender" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <label>Пол:</label>
          <input type="radio" name="gender" value="Ж" onChange={handleChange} required /> <label>Ж</label>
          <input type="radio" name="gender" value="М" onChange={handleChange} required /> <label>М</label>
        </div>

        <h3>Login details</h3>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Пожалуйста, используйте 8 или более символов, включая как минимум 1 цифру и смесь заглавных и строчных букв"
        />
        <small>Пожалуйста, используйте 8 или более символов, включая как минимум 1 цифру и смесь заглавных и строчных букв</small>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Register;
