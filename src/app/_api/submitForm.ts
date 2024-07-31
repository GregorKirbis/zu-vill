// src/_api/submitForm.ts

import { Request } from '../../payload/payload-types'; // Adjust the path as necessary
import { GRAPHQL_API_URL } from "./shared";

if (!GRAPHQL_API_URL) {
  throw new Error("NEXT_PUBLIC_SERVER_URL not found");
}

const CREATE_REQUEST_MUTATION = `
  mutation CreateRequest($input: mutationRequestInput!) {
    createRequest(data: $input) {
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
interface  mutationRequestInput {
  firstName: String;
  lastName: String;
  phone: String;
  email: String;
  message: String;
  productLink: String;
}

export async function submitForm(input: mutationRequestInput): Promise<Request> {
  try {

    console.log('Form submitted:', input);
    const response = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: CREATE_REQUEST_MUTATION,
        variables: { input },
      }),
    });

    if (!response.ok) {
      throw new Error("Error submitting form");
    }

    const result = await response.json();

    if (result.errors) {
      throw new Error(result.errors[0].message || "Error submitting form");
    }

    return result.data.createRequest;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw new Error("Failed to submit form");
  }
}
