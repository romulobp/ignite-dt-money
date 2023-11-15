import {GlobalStyle} from "./styles/global";
import {Header} from "./components/Header";

export function App() {
    return (
        <>
            <header className="App-header">
                <Header/>
                <GlobalStyle/>
            </header>
        </>
    );
}