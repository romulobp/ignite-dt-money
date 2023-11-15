import {GlobalStyle} from "./styles/global";
import {Header} from "./components/Header";
import {Dashboard} from "./components/Dashboard";

export function App() {
    return (
        <>
            <header className="App-header">
                <Header/>
                <Dashboard/>
                <GlobalStyle/>
            </header>
        </>
    );
}