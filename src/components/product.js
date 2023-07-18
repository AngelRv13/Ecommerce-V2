import React from 'react';
import { Pane, Text, Button, Heading, majorScale, Paragraph, Strong} from 'evergreen-ui'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const imgSize = {
    height:'6.25rem',
    width:'9.37rem'
}
const box ={
    width: '21.875rem',
    height: '17.5rem',
    float: "left",
    backgroundColor: "white"
}

const notify = () => toast("Out of stock");

const Product = ({name, price, description, img}) => {
    return (

  
    <div className="container">
     
        <Pane clearFix >
            <Pane style={box} elevation={4} marginLeft={70} marginTop={10}  >
                <Heading> {name} </Heading>
                <div><img style={imgSize} src={`../../../${img}`}></img></div>
                <Text><Strong color="skyblue"> {price} </Strong></Text> 
                <Paragraph> {description} </Paragraph>
                <Button appearance="primary" height={majorScale(4)} marginTop={20} onClick={notify}>Purchase</Button>
                <ToastContainer />
            </Pane>
        </Pane>

    </div>
    )
}

export default Product;