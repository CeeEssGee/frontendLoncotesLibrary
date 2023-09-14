import { useEffect, useState } from "react";
import { Button, Input } from "reactstrap";
import { getPatrons } from "../../data/patronsData";
import { createCheckout } from "../../data/checkoutsData";


export default function NewCheckout({ materialId, getAllAvailableMaterials }) {
    const [patrons, setPatrons] = useState([]);
    const [selectedPatron, setSelectedPatron] = useState(0);

    const fetchPatrons = () => {
        getPatrons().then(setPatrons);
    };

    useEffect(() => {
        fetchPatrons();
    }, []);

    const handleCheckout = () => {
        const newCheckout = {
            patronId: selectedPatron,
            materialId: materialId
        };
        createCheckout(newCheckout);
        getAllAvailableMaterials();
    };


    return (
        <>
            <Input
                name="selectPatron"
                type="select"
                onChange={(e) => setSelectedPatron(parseInt(e.target.value))}
            >
                <option value={null}>select a patron</option>
                {patrons.map((p) => {
                    return (
                        <>
                            <option value={p.id}>
                                {p.firstName} {p.lastName}
                            </option>
                        </>
                    );
                })}
            </Input>

            <td>
                <Button onClick={handleCheckout}>
                    Checkout
                </Button>

            </td>
        </>
    );
}