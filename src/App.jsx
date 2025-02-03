import "./App.css";
import "./components/NavBar";
import "./components/ButtonComponent";
import NavBar from "./components/NavBar";
import ImageComponent from "./components/ImageComponent";
import ButtonComponent from "./components/ButtonComponent";

function App() {
  return (
    <div className="main-container bg-succes">
      <NavBar navTitle="React - App" />

      <ButtonComponent />

      <ImageComponent src="https://images.unsplash.com/photo-1734966901441-ac6c1fff1fd2?q=80&w=2017&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  );
}

export default App;
