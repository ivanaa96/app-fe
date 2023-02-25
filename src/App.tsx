import "./styles/global.ts";
import Layout from "./pages/Layout";
import "bootstrap/dist/css/bootstrap.css";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
	return (
		<div className="App">
			<QueryClientProvider client={queryClient}>
				<Layout />
			</QueryClientProvider>
		</div>
	);
}

export default App;
