
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import styled from "styled-components"
import { Link } from "react-router-dom";
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;
  transform: translateY(100%); /* Start fully below */
  overflow: hidden;
  cursor: pointer;
`;


const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  overflow: hidden;
  &:hover ${Info} {
    opacity: 1;
    transform: translateY(0); /* Move up into view */
  }
`;

const Circle=styled.div`
width:200px;
height:200px;
border-radius: 50%;

position: absolute;
`
const Image=styled.img`
height:75%;
z-index:2;
background-image: none;

`

const Icon=styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color: white;
display:flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;

cursor: pointer;

&:hover{
    background-color: #e9f5f5;
    transform:scale(1.1);
    cursor: pointer;
}
`
const Product = ({item,key}) => {
  return (
   <Container>
     <Circle/>
     <Image src={item.img}/>
     <Info>
        <Icon>
          <Link to={`/product/${item.id}`}
          style={{textDecoration:"none",
           color:"black"
          }}
          ><ShoppingCartOutlined/></Link>
            
        </Icon>
        <Icon>
            <SearchOutlined/>
        </Icon>
        <Icon>
            <FavoriteBorderOutlined/>
        </Icon>
     </Info>
   </Container>
  )
}

export default Product