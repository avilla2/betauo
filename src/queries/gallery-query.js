import gql from "graphql-tag";

const TITLE_QUERY = gql`
query Gallery {
  gallery(id: "2") {
    id
    Images {
      url
      width
      id
    }
  }
}
`;

export default TITLE_QUERY;