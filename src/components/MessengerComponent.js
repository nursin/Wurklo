// dependencies
import { Avatar} from '@material-ui/core';
import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

// styles
import '../Styles/MessengerStyles.css';

function Messenger() {
    const [input, setInput] = useState('');

    const [toggleNav, setToggleNav] = useState(false);
    // const [toggleModal, setToggleModal] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        setInput('');
    }
    
    return (
        <div className="row justify-content-center p-0 ms-3">
            <div className="custom-card d-flex align-items-center justify-content-evenly shadow p-2 px-4">

                <Avatar className="col-2 me-2" src='https://source.unsplash.com/random/800' />
                <Form className="col-10 my-2">
                    <FormGroup className="d-flex align-items-center">
                        <Input
                            type="text"
                            name="postText"
                            id="postText"
                            placeholder="Chat with associates . . ."
                            value={input}
                            onChange={e => setInput(e.target.value)}
                        />
                        {/* <Label className="postSender__video-photo-upload border border-dark rounded ms-2 p-1" htmlFor="postImage">Video/Photo</Label>
                        <Input
                            type="file"
                            name="postImage"
                            id="postImage"
                            hidden
                        /> */}
                    </FormGroup>
                    <Button className="d-none" onClick={handleSubmit} type="submit">Submit</Button>
                </Form>
            </div>
        </div>
    )
}

export default Messenger
