import React, { useState } from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'

const items = [
    {
        title: 'What is react?',
        content: 'bla bla bla bla bla bla bla bla What is react'
    },
    {
        title: 'Why react?',
        content: 'bla bla bla bla bla bla bla bla Why react react'
    },
    {
        title: 'How do you use react?',
        content: 'bla bla bla bla bla bla bla bla How do you use react'
    }
]

const options = [
    {
        label: 'Select Red',
        value: 'red'
    },
    {
        label: 'Select Green',
        value: 'green'
    },
    {
        label: 'Select Yellow',
        value: 'yellow'
    }
]
export default () => {
    const [selected, setSelected] = useState(options[0]);
    return(
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown label="Select a color" options={options} selected={selected} setSelected={setSelected}/>
            </Route>
            <Route path="/translate">
                <Translate items={items}/>
            </Route>
        </div>
    )
}