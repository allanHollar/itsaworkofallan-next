import { gql } from "@apollo/client";

export const GET_ABOUT_ME_ITEMS = gql`
  query GetAboutMeItems {
    aboutMeItems(orderBy: order_ASC) {
      id
      bio
      order
    }
  }
`;
