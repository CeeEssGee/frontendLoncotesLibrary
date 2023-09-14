import { useEffect, useState } from "react";
import { getAvailableMaterials } from "../../data/materialsData";
import { Link, useNavigate } from "react-router-dom";
import { Button, Table } from "reactstrap";
import NewCheckout from "../checkouts/NewCheckout";

export default function BrowseMaterialList() {
    const [materials, setMaterials] = useState([]);
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const navigate = useNavigate();

    useEffect(() => {
        getAvailableMaterials().then(setMaterials);
    }, []);

    const getAllAvailableMaterials = () => {
        getAvailableMaterials().then(setMaterials)
    };





    return (
        <div className="container">
            <div className="sub-menu bg-light">
                <h4>Materials</h4>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Genre</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {materials.map((m) => (
                        <tr key={`materials-${m.id}`}>
                            <th scope="row">{m.id}</th>
                            <td>{m?.materialName}</td>
                            <td>{m?.materialType?.name}</td>
                            <td>{m?.genre?.name}</td>
                            <td>



                            </td>
                            <td>
                                <NewCheckout
                                    materialId={m.id}
                                    getAllAvailableMaterials={getAllAvailableMaterials}
                                />
                            </td>


                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}