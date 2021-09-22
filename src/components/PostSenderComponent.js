import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

//styles
import '../Styles/PostSenderStyles.css';

function PostSender() {
    const [input, setInput] = useState('');

    const [toggleNav, setToggleNav] = useState(false);
    // const [toggleModal, setToggleModal] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        setInput('');
    }
    
    return (
        <div className="row justify-content-center p-0 mx-2 mb-3">
            <div className="custom-card d-flex align-items-center justify-content-evenly shadow col py-2 bg-white">
                <Avatar className="col-2" src='https://source.unsplash.com/random/800' />
                <Form className="col-10 my-2">
                    <FormGroup className="d-flex align-items-center">
                        <Input
                            type="text"
                            name="postText"
                            id="postText"
                            placeholder="Whats on your mind . . ."
                            value={input}
                            onChange={e => setInput(e.target.value)}
                        />
                        <Label className="postSender__video-photo-upload ms-2" htmlFor="postImage"><InsertPhotoIcon className="fs-1"/></Label>
                        <Input
                            type="file"
                            name="postImage"
                            id="postImage"
                            hidden
                        />
                    </FormGroup>
                    <Button className="d-none" onClick={handleSubmit} type="submit">Submit</Button>
                </Form>
            </div>
        </div>
        // {/* show uploaded image or video when loaded */ }
        // {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */ }
    )
}

export default PostSender
