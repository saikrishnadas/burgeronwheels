import { useMutation, gql } from "@apollo/client";

const REMOVE_PRODUCT = gql`
	mutation removeProduct($id: String!) {
		removeProduct(id: $id)
	}
`;

export const useDelete = () => {
	const [removeProduct, { error, loading, data }] = useMutation(REMOVE_PRODUCT);
	return {
		removeProduct,
		error,
		loading,
		data,
	};
};
