
import { useState } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;

    if (!email || !password) {
      setMessage({ type: "danger", text: "Todos los campos son obligatorios." });
      return;
    }
    if (password.length < 6) {
      setMessage({ type: "danger", text: "La contraseña debe tener al menos 6 caracteres." });
      return;
    }

    setMessage({ type: "success", text: "¡Inicio de sesión exitoso!" });
  };

  return (
    <Container className="my-5" style={{ maxWidth: "500px" }}>
      <h2>Login</h2>
      {message.text && <Alert variant={message.type}>{message.text}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" name="email" value={form.email} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" name="password" value={form.password} onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
