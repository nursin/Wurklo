// dependencies
import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

// styles
import '../Styles/MessengerStyles.css';
import ChatMessage from './ChatMessageComponent';

//images


//images for testing
import profilePic__test1 from '../shared/wurklo_profile_pic.jpg';
import profilePic__test2 from '../shared/michael_profile_pic.jpg';
import profilePic__test3 from '../shared/barbara_profile_pic.jpeg';
import profilePic__test4 from '../shared/michael2_profile_pic.jpg';
import profilePic__test5 from '../shared/wurklo2_profile_pic.jpeg';
import profilePic__test6 from '../shared/nikki_profile_pic.jpg';


function Messenger() {
    const [input, setInput] = useState('');

    // const [toggleNav, setToggleNav] = useState(false);
    // const [toggleModal, setToggleModal] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        setInput('');
    }

    return (
        <div className="col-12 justify-content-center px-1 bg-white rounded">
            <div className="d-flex pt-3 px-4">
                <Avatar className="col-2 me-4" src={profilePic__test1} />
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
            <div>
                <ChatMessage
                    title="Mike Lendan"
                    image={profilePic__test2}
                    message="Hey can you do this for me? Thanks!"
                />
                <ChatMessage
                    title="Sally Pear"
                    image={profilePic__test3}
                    message="Where are you at?"
                />
                <ChatMessage
                    title="John Polard"
                    image={profilePic__test4}
                    message="Thanks!"
                />
                <ChatMessage
                    title="James Karry"
                    image={profilePic__test5}
                    message="You did a great job!"
                />
                <ChatMessage
                    title="Ace Weeble"
                    image={profilePic__test6}
                    message="Im not home. Can we reschedule?"
                />
                <ChatMessage
                    title="Manny Opolisa"
                    image={profilePic__test2}
                    message="We can do that."
                />
                <ChatMessage
                    title="Kevin Love"
                    image={profilePic__test4}
                    message="We will be home in 30 min."
                />
                <ChatMessage
                    title="Macey Johnson"
                    image={profilePic__test1}
                    message="Can you take out my trash when ..."
                />
                <ChatMessage
                    title="Lacy Queen"
                    image={profilePic__test2}
                    message="Im not sure."
                />
                <ChatMessage
                    title="Paul Reed"
                    image={profilePic__test5}
                    message="Your the best!"
                />
                <ChatMessage
                    title="Elon Musk"
                    image="https://source.unsplash.com/random/"
                    message="To the moon!"
                />
                <ChatMessage
                    title="Michael Steel"
                    image={profilePic__test2}
                    message="Not going to make it today."
                />
            </div>
        </div>
    )
}

export default Messenger
