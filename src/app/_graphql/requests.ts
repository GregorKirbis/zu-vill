export const CREATE_REQUEST_MUTATION = `
  mutation CreateRequest($input: Request!) {
    createRequest(input: $input) {
      id
      firstName
      lastName
      phone
      email
      message
      productLink
    }
  }
`;
