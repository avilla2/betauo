import gql from "graphql-tag";

const HOME_PAGE_QUERY = gql`
query Home {
  homepage {
    Content {
      __typename
      ... on ComponentHomePageComponentsIntro {
        id
        Image {
          url
          width
        }
        Video {
          url
          width
        }
        IntroText {
          Line1
          Line2
          Line3
        }
      }
      ... on ComponentHomePageComponentsGallery {
        id
        Title
        Pictures {
          url
          width
          id
        }
      }
    	... on ComponentHomePageComponentsTextGrid {
      	id
      	Title
        Subtitle
        Header
        Entry {
          id
          Text
          Icon
        }
    	}
      ... on ComponentHomePageComponentsMedia {
        id
        Title
        Buttons {
          id
          Text
          Link
        }
        PDF {
          File {
            id
            url
            width
          }
        }
      }
      ... on ComponentHomePageComponentsCards {
        id
        Title
        Cards {
          Title
          Text
          Link
          LinkText
          Width
          LargeWidth
        }
      }
      ... on ComponentHomePageComponentsFreestyle {
        id
        Text
      }
    }
  }
}
`;

export default HOME_PAGE_QUERY;