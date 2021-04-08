import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Profile from './Profile'
import Slider from './Slider'

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Slider />
                <Content />
                <Profile />
                <Footer />
            </div>
        )
    }
}
export default Main
