import React, {useState, useEffect} from 'react';

import { Container } from './styles';

export default function BodyData(props) {

  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    if(props.data && props.data.length > 0){
      setBlocks(JSON.parse(props.data))
    }
  }, [props]);


  return (
    <Container>
      { blocks && 
        blocks.length > 0 && 
        blocks.map(block => <p>{block.data.text}</p>)
      }
    </Container>
  );
}
