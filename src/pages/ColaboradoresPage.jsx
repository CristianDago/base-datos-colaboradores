import { useState } from "react";
import Formulario from "../components/Formulario";
import Buscador from "../components/Buscador";
import { BaseColaboradores } from "../components/BaseColaboradores";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const ColaboradoresPage = () => {

    const [colaboradores, setColaboradores] = useState(BaseColaboradores);
    const [filtro, setFiltro] = useState("");

    /* Traer nuevo Colaborador */

    const agregarColaborador = (colaborador) => {

        if (!colaborador) {
            return;
        }
        setColaboradores([...colaboradores, colaborador])
    };

    /* Filtro Colaborador */

    const FiltroColaboradores = () => {

        if (filtro !== "") {
           return colaboradores.filter((colaborador) => colaborador.nombre  === filtro)
        }
        return colaboradores;
    }

    console.log(colaboradores.filter.value)
    console.log(colaboradores)

    return (
        <>
            <Container className="mt-5 bg-light rounded-2">
                <Row className="bg-dark pt-3">
                    <Col>
                        <h4>Buscador de colaboradores</h4>
                    </Col>
                    <Col>
                    {/* Buscador */}
                    <Buscador
                        setFiltro={setFiltro}
                        filtro={filtro}
                    />
                    </Col>
                </Row>
                <Row className="pt-5">
                    {/* Agregar Tarea */}
                    <Formulario
                        agregarColaborador={agregarColaborador}
                    /> 
                </Row>
                <Row className="pt-5">
                <hr/>   
                    {/* Lista para mostrar */}
                
                    <h5>Lista colaboradores</h5>
                        <ul>
                            {FiltroColaboradores().map((colaborador) => (
                                <li key={colaborador.id}>{colaborador.nombre} - {colaborador.correo}</li>
                            ))}
                        </ul>
                </Row>        
            </Container>
        </>
    )
}

export default ColaboradoresPage;


