/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNews = /* GraphQL */ `
  query GetNews($id: ID!) {
    getNews(id: $id) {
      id
      title
      category
      content
      createdAt
      updatedAt
    }
  }
`;
export const listNews = /* GraphQL */ `
  query ListNewss(
    $filter: ModelNewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNewss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        category
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
