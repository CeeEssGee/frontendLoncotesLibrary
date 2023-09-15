import { useEffect } from "react";
import { useState } from "react"
import { activatePatron, deactivatePatron, getPatrons } from "../../data/patronsData";
import { Link } from "react-router-dom";
import { Button, Table } from "reactstrap";


export default function PatronList() {
    const [patrons, setPatrons] = useState([]);

    useEffect(() => {
        getPatrons().then(setPatrons);
    }, []);

    const getAllPatrons = () => {
        getPatrons().then(setPatrons)
    };

    const handleDeactivate = (e) => {
        deactivatePatron(e.target.value)
        getAllPatrons();
    };

    const handleActivate = (e) => {
        activatePatron(e.target.value)
        getAllPatrons();
    };

    return (
        <div className="container">
            <div className="sub-menu bg-light">
                <h4>Patrons</h4>
                {/* <Link to="/patrons/create">Add</Link> */}
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Is Active</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {patrons.map((p) => (
                        <tr key={`patrons-${p.id}`}>
                            <th scope="row">{p.id}</th>
                            <td>{p?.firstName}</td>
                            <td>{p?.lastName}</td>
                            <td>{p?.isActive.toString()}</td>

                            {p.isActive ? (
                                <td>

                                    <Button
                                        color='danger'
                                        value={p.id}
                                        onClick={handleDeactivate}
                                    >Deactivate</Button>
                                </td>
                            ) : (
                                <td>

                                </td>
                            )}

                            {p.isActive ? (
                                <td>

                                </td>
                            ) : (
                                <td>
                                    <Button
                                        color='secondary'
                                        value={p.id}
                                        onClick={handleActivate}
                                    >Activate</Button>
                                </td>
                            )}


                            <td>
                                <Link to={`${p.id}`}>Details</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}