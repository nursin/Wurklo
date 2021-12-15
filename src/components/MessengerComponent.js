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
        <div className="col-12 justify-content-center pe-1">
            <div className="d-flex pt-3 px-4 bg-white rounded">
                <Avatar className="col-2 me-2" src='https://source.unsplash.com/random/800' />
                <Form className="col-10">
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
