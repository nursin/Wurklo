// dependencies
import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

// styles
import '../Styles/MessengerStyles.css';
import ChatMessage from './ChatMessageComponent';

function Messenger() {
    const [input, setInput] = useState('');

    const [toggleNav, setToggleNav] = useState(false);
    // const [toggleModal, setToggleModal] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        setInput('');
    }

    return (
        <div className="col-12 justify-content-center px-1 bg-white rounded">
            <div className="d-flex pt-3 px-4">
                <Avatar className="col-2 me-4" src='https://source.unsplash.com/random/800' />
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
                    title="Billy Jean"
                    image="https://source.unsplash.com/random/1"
                    message="Hey can you do this for me? Thanks!"
                />
                <ChatMessage
                    title="Jamie Cercy"
                    image="https://source.unsplash.com/random/"
                    message="Where are you at?"
                />
                <ChatMessage
                    title="Kim John"
                    image="https://source.unsplash.com/random/2"
                    message="Thanks!"
                />
                <ChatMessage
                    title="James Karry"
                    image="https://source.unsplash.com/random/3"
                    message="You did a great job!"
                />
                <ChatMessage
                    title="Ace Weeble"
                    image="https://source.unsplash.com/random/5"
                    message="Im not home. Can we reschedule?"
                />
                <ChatMessage
                    title="Manny Opolisa"
                    image="https://source.unsplash.com/random/6"
                    message="We can do that."
                />
                <ChatMessage
                    title="Kevin Love"
                    image="https://source.unsplash.com/random/8"
                    message="We will be home in 30 min."
                />
                <ChatMessage
                    title="Macey Johnson"
                    image="https://source.unsplash.com/random/9"
                    message="Can you take out my trash when ..."
                />
                <ChatMessage
                    title="Lacy Queen"
                    image="https://source.unsplash.com/random/10"
                    message="Im not sure."
                />
                <ChatMessage
                    title="Paul Reed"
                    image="https://source.unsplash.com/random/11"
                    message="Your the best!"
                />
                <ChatMessage
                    title="Michael Steel"
                    image="https://source.unsplash.com/random/12"
                    message="Not going to make it today."
                />
                <ChatMessage
                    title="Elon Musk"
                    image="https://source.unsplash.com/random/"
                    message="To the moon!"
                />
            </div>
        </div>
    )
}

export default Messenger
