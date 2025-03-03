
import styled from 'styled-components'
import {categories} from "../data"
import CategoryItem from './CategoryItem'
import {mobile, tablet} from "../responsive"

const Container =styled.div`
display:flex;
padding: 20px;
justify-content:space-between;

${mobile({padding:"0px",flexDirection:"column",width:"100%"})}
${tablet({flexDirection:"column"})}
`
const Categories = () => {
  return (
   <Container>
    {categories.map((item) => (
        <CategoryItem item={item} key={item.id}/>
        
    ))}
   </Container>
  )
}

export default Categories