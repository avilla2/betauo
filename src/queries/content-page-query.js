import gql from "graphql-tag";

const CONTENT_PAGE_QUERY = gql`
query Content {
    contentPages {
      Name
      Link
    }
  }
`;

export default CONTENT_PAGE_QUERY;