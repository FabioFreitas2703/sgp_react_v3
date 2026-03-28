import { Button, Card } from "react-bootstrap";

interface MyCardProps {
    imageUrl: string,
    title: string,
    text: string,
    buttonText: string,
    buttonVariant?: string
}

function MyCard({
    imageUrl,
    title,
    text,
    buttonText,
    buttonVariant = "primary"
 }: MyCardProps) {
    return (
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Button variant={buttonVariant}>{buttonText}</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default MyCard;
