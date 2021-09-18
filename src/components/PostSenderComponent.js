import React, { useState } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
    <div>
      <Card className="custom__card m-3 border shadow">
        <CardBody>
          <CardTitle className="fs-3">Post Sender</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Post Sender</CardSubtitle>
          <CardText></CardText>
          <Form className="header__search bg-secondary bg-opacity-50 m-3">
              <FormGroup>
                <Input
                className=""
                  type="text"
                  name="post"
                  id="post"
                  placeholder="Whats on your mind . . ."
                  value={input}
                  onChange={e => setInput(e.target.value)}
                />
              </FormGroup>
              <Button className="d-none" onClick={handleSubmit} type="submit">Submit</Button>
            </Form>
          <div className="d-flex justify-content-evenly">
            <Button>Image</Button>
            <Button>Image</Button>
            <Button>Image</Button>
          </div>
        </CardBody>
        {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
      </Card>
    </div>
  )
}

export default PostSender
