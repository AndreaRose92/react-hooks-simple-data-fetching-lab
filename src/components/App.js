import React, { useEffect, useState } from "react";

export default function App() {

    const [randomDog, setRandomDog] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((r)=>r.json())
            .then((json) => {
                setRandomDog(json.message)
                setIsLoaded(true)
                console.log(json)
            })
    }, [])

    if (!isLoaded) return <p>Loading...</p>


    return (
        <div>
            <img src={randomDog} alt="A Random Dog" />
        </div>
    )
}