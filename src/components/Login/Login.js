import styles from "./login.module.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

export const Login = () => {
  return (
    <body>
      <div className={"container"}>
        <div className={"row justify-content-center"}>
          <div className={"col-4"}>
            <div className={"text-center"}>
              <img
                src="./images/logo-recortado.png"
                width="300"
                class="rounded"
                alt="..."
              />
            </div>
          </div>
          <div className={"col-4"}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="Ingresa correo" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordarme" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </body>
  );
};
