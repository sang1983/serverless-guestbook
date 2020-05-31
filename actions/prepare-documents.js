/**
 * Prepare the guestbook entry to be persisted
 */
function main(params) {
  if (!params.name || !params.mobileno) {
    return Promise.reject({error: 'no name or comment'});
  }

	return {
    doc: {
      createdAt: new Date(),
	    name: params.name,
	    email: params.email,
	    mobileno: params.mobileno,
	  }
  };
}
