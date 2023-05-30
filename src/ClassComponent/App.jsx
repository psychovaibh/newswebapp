import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import Footer from './Footer'
export default class App extends Component {
    constructor() {
        super()
        this.state = {
            search: "",
            language: "hi"
        }
    }
    changeSearch = (data) => {
        this.setState({ search: data })
    }
    changeLanguage = (data) => {
        this.setState({ language: data })
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <NavBar changeSearch={this.changeSearch} changeLanguage={this.changeLanguage}/>
                    <Routes>
                        <Route path="/All" element={<Home language={this.state.language} search={this.state.search} item="All" />}></Route>
                        <Route path="/Cricket" element={<Home language={this.state.language} search={this.state.search} item="Cricket" />}></Route>
                        <Route path="/Politics" element={<Home language={this.state.language} search={this.state.search} item="Politics" />}></Route>
                        <Route path="/Crime" element={<Home language={this.state.language} search={this.state.search} item="Crime" />}></Route>
                        <Route path="/IPL" element={<Home language={this.state.language} search={this.state.search} item="IPL" />}></Route>
                        <Route path="/Entertainment" element={<Home language={this.state.language} search={this.state.search} item="Entertainment" />}></Route>
                        <Route path="/Education" element={<Home language={this.state.language} search={this.state.search} item="Education" />}></Route>
                        <Route path="/Technology" element={<Home language={this.state.language} search={this.state.search} item="Technology" />}></Route>
                        <Route path="/Science" element={<Home language={this.state.language} search={this.state.search} item="Science" />}></Route>
                        <Route path="/Covid-19" element={<Home language={this.state.language} search={this.state.search} item="Covid-19" />}></Route>
                        <Route path="/Sports" element={<Home language={this.state.language} search={this.state.search} item="Sports" />}></Route>
                        <Route path="/Jokes" element={<Home language={this.state.language} search={this.state.search} item="Jokes" />}></Route>
                    </Routes>
                </BrowserRouter>
                <Footer />
            </div>
        )
    }
}
