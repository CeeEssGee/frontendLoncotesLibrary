import { useEffect, useState } from "react"
import { getCheckouts } from "../../data/checkoutsData";
import { Button, Table } from "reactstrap";


export default function CheckoutList() {
    const [checkouts, setCheckouts] = useState([]);

    useEffect(() => {
        getCheckouts().then(setCheckouts);
    }, []);

    const handleReturn = () => {
    };

    return (
        <div className="container">
            <div className="sub-menu bg-light">
                <h4>Checkouts</h4>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Material</th>
                        <th>Patron Name</th>
                        <th>Checked Out Date</th>
                        <th>Return</th>
                    </tr>
                </thead>
                <tbody>
                    {checkouts.map((c) => (
                        <tr key={`checkouts-${c.id}`}>
                            <th scope="row">{c.id}</th>
                            <td>{c?.material?.materialName}</td>
                            <td>{c?.patron?.firstName} {c?.patron?.lastName}</td>
                            <td>{c?.checkoutDate.split("T")[0]}</td>

                            {c.returnDate ? (
                                <td>

                                    {/* <Button
                                        color='primary'
                                        value={c.id}
                                        onClick={handleReturn}
                                    >Return</Button> */}
                                </td>
                            ) : (
                                <td>
                                    {c?.returnDate}
                                </td>
                            )}


                            {/* <td>
                                <Link to={`${c.id}`}>Details</Link>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}