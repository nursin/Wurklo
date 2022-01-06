import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

//styles
import '../Styles/PostSenderStyles.css';

// images
import wurkloProfilePic from '../shared/wurklo_profile_pic.jpg';

function PostSender() {
    const [input, setInput] = useState('');

    // const [toggleNav, setToggleNav] = useState(false);
    // const [toggleModal, setToggleModal] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        setInput('');
    }
    
    return (
        <div className="row justify-content-center mx-0 mb-1">
            <div className="col-12 pt-3 d-flex justify-content-evenly bg-white rounded">
                <Avatar className="col-2 mt-2" src={wurkloProfilePic} />
                <Form className="col-10">
                    <FormGroup className="d-flex align-items-center">
                        <Input
                            type="text"
                            name="postText"
                            id="postText"
                            placeholder="Post a job/wurk event . . ."
                            value={input}
                            onChange={e => setInput(e.target.value)}
                        />
                        <Label className="postSender__video-photo-upload ms-4 mt-2" htmlFor="postImage"><InsertPhotoIcon className="fs-1"/></Label>
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
