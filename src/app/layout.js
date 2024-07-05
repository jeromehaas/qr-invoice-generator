// IMPORTS
export const metadata = {
	title: 'QR-Invoice Generator',
	description: 'Small application where you can create qr-invoices.',
};

// ROOT-LAYOUT
const RootLayout = ({children}) => {
	
	// RENDER
	return (
	<html lang='en'>
		<body>{children}</body>
	</html>
	);
	
};

// EXPORTS
export default RootLayout;