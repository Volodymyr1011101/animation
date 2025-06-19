import React, {useEffect} from 'react';
import { ReactComponent as Logo } from './images/Logo_Illustration.svg';
import './App.css';
import {animation, removeAllEventListeners} from "./functions";

function App() {
    useEffect(() => {
        const svg: Element | null = document.querySelector('#logo');
        const paths: NodeListOf<Element> = document.querySelectorAll('#logo path');
        animation(svg, paths)
        return () => {
            removeAllEventListeners(paths);
        }
    }, []);
  return (
    <div className="App">
        <div className="image">
            <Logo />
        </div>
    </div>
  );
}

export default App;
