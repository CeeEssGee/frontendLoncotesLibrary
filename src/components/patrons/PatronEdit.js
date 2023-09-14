import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getPatron, updatePatron } from "../../data/patronsData";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function PatronEdit() {
    const [patron, setPatron] = useState();
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');


    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getPatron(id).then(setPatron);
    }, []);

    if (!patron) {
        return null;
    }

    const submit = () => {
        let patronToUpdate = patron;
        if (address != "") {
            patronToUpdate.address = address;
        }
        if (email != "") {
            patronToUpdate.email = email;
        }

        updatePatron(patronToUpdate).then(() => {
            navigate(`/patrons/${id}`);
        })
    }

    return (
        <div className="container">
            <h4>Edit Patron</h4>
            <Form>
                <FormGroup>
                    <Label htmlFor="patronAddress">Patron Address</Label>
                    <Input
                        type="text"
                        name="patronAddress"
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value);
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="patronEmail">Patron Email Address</Label>
                    <Input
                        type="email"
                        name="patronEmail"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </FormGroup>
                <Button onClick={submit}>Submit</Button>
            </Form>
        </div>
    );
}