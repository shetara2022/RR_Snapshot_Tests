import Card from 'react-bootstrap/Card';

export default function GitHubExample() {
    return (
        <Card style={{ textAlign: "center" }}>
            <Card.Img variant="top"
                src="/image.jpeg"
                alt="Git Hub Profile Image"
                style={{
                    display: "block",
                    position: "relative",
                    width: "auto",
                    marginLeft: "auto",
                    marginRight: "auto",
                    height: "400px",
                    borderRadius: "50%"
                }}
            />
            <Card.Body>
                <Card.Title style={{ fontSize: "30px", fontFamily: "monospace" }}>Shetara Smith</Card.Title>
                <Card.Text style={{ fontFamily: "cursive" }}>
                    Educator to Full Stack Developer
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

