import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Table } from "reactstrap";
import { getPatron } from "../../data/patronsData";


export default function PatronDetails() {
    const { id } = useParams();

    const [patron, setPatron] = useState(null);

    useEffect(() => {
        getPatron(id).then(setPatron);
    }, []);

    if (!patron) {
        return null;
    }

    return (
        <div className="container">
            <h2>{patron.firstName} {patron.lastName}</h2>
            <Table>
                <tbody>
                    <tr>
                        <th scope="row">Address</th>
                        <td>{patron.address}</td>
                    </tr>
                    <tr>
                        <th scope="row">Email</th>
                        <td>{patron.email}</td>
                    </tr>
                    <tr>
                        <th scope="row">Is Active</th>
                        <td>{patron.isActive.toString()}</td>
                    </tr>
                    <tr>
                        <th scope="row">Late Fees</th>
                        <td>${patron.balance}</td>
                        <td>
                            { }
                        </td>
                    </tr>
                </tbody>
            </Table>
            <h5>Checkouts:</h5>
            {patron.checkouts?.length ? (
                <Table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Checkout Date</th>
                            <th>Return Date</th>
                            <th>Late Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patron.checkouts.map((co) => (
                            <tr key={`checkout-${co.id}`}>
                                <td>{co.material.materialName}</td>
                                <td>{co.checkoutDate?.split('T')[0]}</td>
                                <td>{co.returnDate?.split('T')[0] || 'Checked Out'}</td>
                                <td>{co.lateFee || 'N/A'}</td>
                            </tr>
                        )
                        )}
                    </tbody>
                </Table>
            ) : (
                <p>No checkouts for this patron</p>
            )}
        </div>
    );
}