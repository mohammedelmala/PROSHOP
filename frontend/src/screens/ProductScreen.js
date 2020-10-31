import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import Rating from "../components/Rating";
import Axios from "../apis/Axios";

const ProductScreen = (props) => {

    const [product, setProduct] = useState({});

    useEffect(() => {

        const fetchProduct = async () => {
            const response = await Axios.get(`api/product/${props.match.params.id}`);
            setProduct(response.data);
        }
        fetchProduct();

    }, []);


    return (
        <>

            <Link to="/" className="btn btn-light my-3">
                Go Back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`(${product.numReviews})`}> </Rating>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>

        </>
    )
}

export default ProductScreen;
