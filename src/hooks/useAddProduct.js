import { useMutation, gql } from "@apollo/client";

const ADD_PRODUCTS = gql`
	mutation ($input: AddProductInput!) {
		addProduct(input: $input) {
			id
			name
			description
			price
			image
		}
	}
`;

export const useAddProducts = () => {
	const [addProduct, { error, loading, data }] = useMutation(ADD_PRODUCTS);
	return {
		addProduct,
		error,
		loading,
		data,
	};
};
