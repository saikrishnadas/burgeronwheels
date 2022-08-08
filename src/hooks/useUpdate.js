import { useMutation, gql } from "@apollo/client";

const UPDATE_PRODUCTS = gql`
	mutation ($input: UpdateProductInput!) {
		updateProduct(input: $input) {
			id
			name
			description
			price
			image
			ingredients
			addOns
			rating
			calories
			duration
		}
	}
`;

export const useUpdate = () => {
	const [updateProduct, { error, loading, data }] =
		useMutation(UPDATE_PRODUCTS);
	return {
		updateProduct,
		error,
		loading,
		data,
	};
};
