export const asyncBasic = () => {
	console.log(`Start`); // A

	setTimeout(() => {
		console.log(`Wait for 1 second -- I'm back 😎`);
	}, 1000);

	// setTimeout(() => console,log(1),1000);
	// setTimeout(() => console,log(2),1000);
	// setTimeout(() => console,log(3),0);

	console.log(`End`); // C
};

// asyncBasic();
