import gql from 'graphql-tag';

export const getUsersQuery = {
  query: gql`
    query {
      allUsers {
        _id
        phone
      }
    }
  `,
}

export const createUserMutation = (phone, isAccepted=true) => {
	const mutation = {
		mutation: gql`
			mutation Registration(
			  $phone: String! 		 		// input parameters
			  $isAccepted: Boolean 			// input parameters
			) {
			  registration(
			    phone: $phone
			  ) {
			    error
			    message
			  }
			}
		`,
		variables: {
		phone: phone,
		isAccepted: isAccepted
		},
	}

	return mutation;
}