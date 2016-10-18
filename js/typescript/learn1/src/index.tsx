import * as React from 'react'
import * as ReactDom from 'react-dom'

import {Hello} from './components/Hello'
import {Header} from './components/Header'


enum Color {Red, Green, Blue}

function test(a:any):number {
    return a
}

let a:number = undefined

ReactDom.render(
    <div>
        <Hello compiler="Typescript" framework="React" /><Header/>
    </div>,
    document.getElementById('example')
)