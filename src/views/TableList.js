import React, { useEffect, useState } from "react";

import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
import api from "services/api";



function TableListEmployes() {

  const [data, setData] = useState([]);

  const getJobs = async () => {
    const response = await api.get('/ong/listMyJobs');
    const { data } = response.data;
    setData(data);
  }

  useEffect(() => {
    getJobs();
  }, [])

  const [handlerModal, setHandlerModal] = useState(false);
  const toogleModal = () => {
    setHandlerModal(!handlerModal);
  }

  const Modal = () => {
    return (
      <div>
        <Button color="danger" onClick={() => toogleModal()}>Teste</Button>
        <Modal isOpen={handlerModal} toggle={toogleModal}>
          <ModalHeader toggle={toogleModal}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => toogleModal()}>Do Something</Button>{' '}
            <Button color="secondary" onClick={() => toogleModal()}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }

  return (
    <>
      <Container fluid>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginBottom: 10
          }}
        >
          <Button
            className="btn-round btn-fill"
            color="success"
            onClick={() => {
              toogleModal();
            }}
          >
            Cadastrar Vaga
          </Button>
        </div>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Tabela de dados de Vagas</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Cargo</th>
                      <th className="border-0">Data de Expiração</th>
                      <th className="border-0">Status</th>
                      <th className="border-0">Região</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map(job => {
                        return (
                          <tr key={job.id}
                            onClick={() => {
                              window.alert(job.id);
                            }}
                          >
                            <td>{job.id}</td>
                            <td>{job.office}</td>
                            <td>{job.expiration_date}</td>
                            <td>{job.status === true ? 'Preenchida' : 'Nao preenchida'}</td>
                            <td>{job.region ? job.region : 'Nao informado'}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableListEmployes;
