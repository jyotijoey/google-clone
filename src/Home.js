import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import AppsIcon from "@material-ui/icons/Apps"
import { Avatar } from '@material-ui/core'

function Home() {
    return (
        <div className="home">

            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>

                <div className="home__headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>
            <div className="home__body">

            <img src="https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_2x1.jpg" alt="google logo" />

            </div>
        </div>
    )
}

export default Home
