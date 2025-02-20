import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useHistory } from "react-router-dom";
import Success from "./Success";

const formDataObj = {
  email: '',
  password: '',
  terms: false
};

export default function Login() {
  const [formData, setFormData] = useState(formDataObj);
  const [isValid, setIsValid] = useState(false);
  const history = useHistory()

  function handleChange(event) {
    const { name, value } = event.target;
    const newState = { ...formData, [name]: value };
    setFormData(newState);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          id="email"
          name="email"
          placeholder="Email adresinizi giriniz"
          type="email"
          onChange={handleChange}
          value={formData.email}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Şifre</Label>
        <Input
          id="password"
          name="password"
          placeholder="Şifrenizi giriniz"
          type="password"
          onChange={handleChange}
          value={formData.password}
        />
      </FormGroup>
      <FormGroup>
      <Input
          id="checkbox"
          name="departman"
          type="checkbox"
          onChange={handleChange}
          value={formData.departman}
        />
        <Label for="checkbox">Şartları kabul ediyorum.</Label>
      </FormGroup>
      <FormGroup>
      <Button disabled={isValid}>Kaydet</Button>
      </FormGroup>
    </Form>
  );
}
