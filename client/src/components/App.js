import React, { Fragment, useState } from 'react';

import Login from './Login';

function App() {
	const [id, setId] = useState();

	return (
		<Fragment>
			{id}
			<Login onIdSubmit={setId} />
		</Fragment>
	);
}

export default App;
