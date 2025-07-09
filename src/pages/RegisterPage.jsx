
import { useState } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";

const RegisterPage = () => {
  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = form;

    if (!email || !password || !confirmPassword) {
      setMessage({ type: "danger", text: "Todos los campos son obligatorios." });
      return;
    }
    if (password.length < 6) {
      setMessage({ type: "danger", text: "La contraseña debe tener al menos 6 caracteres." });
      return;
    }
    if (password !== confirmPassword) {
      setMessage({ type: "danger", text: "Las contraseñas no coinciden." });
      return;
    }

    setMessage({ type: "success", text: "¡Registro exitoso!" });
  };

  return (
    <Container className="my-5" style={{ maxWidth: "500px" }}>
      <h2>Registro</h2>
      {message.text && <Alert variant={message.type}>{message.text}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu email" name="email" value={form.email} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" name="password" value={form.password} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirmar Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Confirma tu contraseña" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">Registrarse</Button>
      </Form>
    </Container>
  );
};

export default RegisterPage;
