import Store from "./contexts/Store";
import Dashboard from "./Dashboard";

function App() {
    return (
        <div className="App">
            <Store>
                <Dashboard />
            </Store>
        </div>
    );
}

export default App;
