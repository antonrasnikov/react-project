import { useState } from 'react'
import { Input } from "./components/Input/index.jsx"
import { HeaderTitle } from "./components/Header/index.jsx"
import { List } from "./components/List/index.jsx"
import { Buttons } from "./components/Buttons/index.jsx"
import "./App.css"
export const App = () => {
    return (
    <div>
        <HeaderTitle />
        <List />
        <Input />
        <Buttons />
        </div>
    )
}


