import { useQuery, gql } from "@apollo/client";

const GET_PRODUCTS = gql`
	query {
		products {
			id
			name
			description
			price
			slug
			image
		}
	}
`;

export const useProducts = () => {
	const { error, loading, data } = useQuery(GET_PRODUCTS);
	return {
		error,
		loading,
		data,
	};
};
