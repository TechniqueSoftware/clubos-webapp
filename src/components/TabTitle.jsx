import { useState } from 'react'

export default function TabTitle() {
    const [title, setTitle] = useState('Club OS')

    //if no club, Club OS Login
    const getEnv = () => {
        return process.env.NODE_ENV === 'production' ? '' : 'test - '
    }

    const buildTitle = () => {
        console.log(window.sessionStorage.getItem("data-179875510"))

        window.addEventListener(
            "message",
            console.log(event)
        )
        return getEnv()
    }
    
    return buildTitle()
}