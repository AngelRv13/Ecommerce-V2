import React from 'react';
import { Pane, Text, Button, Heading, majorScale, Paragraph, Strong} from 'evergreen-ui'

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


const Product = ({name, price, description, img}) => {
    return (

  
    <div className="container">
     
        <Pane clearFix >
            <Pane style={box} elevation={4} marginLeft={70} marginTop={10}  >
                <Heading> {name} </Heading>
                <div><img style={imgSize} src={`../../../${img}`}></img></div>
                <Text><Strong color="skyblue"> {price} </Strong></Text> 
                <Paragraph> {description} </Paragraph>
                <Button appearance="primary" height={majorScale(4)} marginTop={20} >Purchase</Button>
            </Pane>
        </Pane>

    </div>
    )
}

export default Product;