import { useEffect } from "react";
import { useState } from "react"
import { getPatrons } from "../../data/patronsData";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";


export default function PatronList() {
    const [patrons, setPatrons] = useState([]);

    useEffect(() => {
        getPatrons().then(setPatrons);
    }, []);

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
                        <th>Address</th>
                        <th>Email</th>
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
                            <td>{p?.address}</td>
                            <td>{p?.email}</td>
                            <td>{p?.isActive.toString()}</td>
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