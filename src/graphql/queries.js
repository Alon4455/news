/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNews = /* GraphQL */ `
  query GetNews($id: ID!) {
    getBlog(id: $id) {
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
  query ListNews(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
