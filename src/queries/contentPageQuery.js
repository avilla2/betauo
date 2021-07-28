import gql from "graphql-tag";

const CONTENT_PAGE_QUERY = gql`
query Content {
  contentPages {
    id
    Name
    Link
    Content {
      __typename
      ... on ComponentContentPageComponentsParagraph {
        id
        Title
        Body
      }
      ... on ComponentContentPageComponentsFaq {
        id
        Title
        Entry {
          Title
          Body
          id
        }
      }
    }
  }
}
`;

export default CONTENT_PAGE_QUERY;