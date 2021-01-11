import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Card, ResourceList, Stack, TextStyle, Thumbnail } from '@shopify/polaris';

const ADD_PRODUCT_WTIh_URL = gql`
query addProduct($input:ProductInputs!){
    productCreate{
        id
        title
    }
    userErrors{
        fields
        message
    }
}
`;
function addProduct(){
  return(
      <div></div>
  )   
}
export default addProduct;