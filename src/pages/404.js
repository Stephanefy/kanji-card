import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col space-y-4 justify-center items-center">
            <h1 className="text-6xl font-bold text-white">404</h1>
            <p className="text-white">Cette page n'existe pas</p>
            <Button>
                <Link to="/">
                    Retour à l'accueil
                </Link>
            </Button>
        </div>
    )
}

export default NotFound
