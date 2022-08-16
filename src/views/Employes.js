import React, { useEffect, useState } from "react";
import {
  Card,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import api from "services/api";

function TableList() {

  const [data, setData] = useState([]);

  const getJobs = async () => {
    const response = await api.get('/company/listMyEmployees');
    const { data } = response.data;
    setData(data);
  }

  useEffect(() => {
    getJobs();
  }, [])

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Tabela de dados de Funcionários</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Cargo</th>
                      <th className="border-0">Tempo de Empresa</th>
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
                            <td>{job.name} {job.last_name}</td>
                            <td>{job.office}</td>
                            <td>{job.data_actual}</td>
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

export default TableList;
