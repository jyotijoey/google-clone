import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import AppsIcon from "@material-ui/icons/Apps"
import { Avatar } from '@material-ui/core'
import Search from './Search'

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

            <img src="https://lh3.googleusercontent.com/25HHuTlKiQt8wiMAD-2jEVHvXXyJzLKK3Ga0h7Duu3P2jbZjXx9FF17WIPO6gUVsozcjfjpVTd1WbV0P2EhSGkbMoTwsblpOZ_C724sdBHLfxwDrPSTUCA" alt="google logo" />
            <div className="home__inputContainer">
                <Search />
            </div>
            </div>
        </div>
    )
}

export default Home
