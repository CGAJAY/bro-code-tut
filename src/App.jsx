import Card from "./Card";
const titles = ["Dev ajay", "Dev Mark", "Dev Joyce"];

function App() {
	return (
		<>
			<Card title={titles[0]} />
			<Card title={titles[1]} />
			<Card title={titles[2]} />
		</>
	);
}

export default App;
