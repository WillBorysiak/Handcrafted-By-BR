import React from 'react';
import Layout from '../components/Layout';

import SEO from '../components/SEO';

const IndexPage = () => {
	return (
		<>
			<Layout>
				<SEO title="Home" />
				<main>
					<h2 className="text-center font-roman text-6xl">Handcrafted by Barbara Ruth</h2>
				</main>
			</Layout>
		</>
	);
};

export default IndexPage;
