import { useQuery, gql } from "@apollo/client";

const GET_PRODUCT = gql`
	query findProduct($id: String!) {
		findProduct(id: $id) {
			id
			name
			description
			price
			image
		}
	}
`;

export const useGetProduct = (id) => {
	const { error, loading, data } = useQuery(GET_PRODUCT, {
		variables: {
			id,
		},
	});
	return {
		error,
		loading,
		data,
	};
};
