import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

// styles
import '../Styles/PostStyles.css';

function Post({title, image, text}) {
  return (
    <>
      <Card className="custom__card mt-3 border shadow">
        <CardBody>
          <CardTitle className="fs-3">{title}</CardTitle>
          <CardSubtitle>{text}</CardSubtitle>
        </CardBody>
        <CardImg className="post__image mb-5 img-fluid" src={image} alt="Card image cap" />
      </Card>
    </>
  )
}

export default Post
