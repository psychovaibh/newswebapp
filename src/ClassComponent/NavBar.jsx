import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            language: "Hindi",
            search: ""
        }
    }
    getInputData(e) {
        this.setState({ search: e.target.value })
    }
    postData(e) {
        e.preventDefault()
        this.props.changeSearch(this.state.search)
        this.setState({ search: "" })
    }
    getSelectedLanguage() {
        if (this.state.language === "Hindi") {
            document.getElementById("flexSwitchCheck").innerHTML = this.state.language
            this.setState({ language: "English" })
            this.props.changeLanguage("en")
        }
        else {
            document.getElementById("flexSwitchCheck").innerHTML = this.state.language
            this.setState({ language: "Hindi" })
            this.props.changeLanguage("hi")
        }
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light mainbar sticky-top">
                    <div className="container-fluid">
                        <span className="navbar-brand">NewsApp</span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/All" onClick={() => this.props.changeSearch("")}>All</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Politics" onClick={() => this.props.changeSearch("")}>Politics</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Crime" onClick={() => this.props.changeSearch("")}>Crime</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Entertainment" onClick={() => this.props.changeSearch("")}>Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/IPL" onClick={() => this.props.changeSearch("")}>IPL</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Other
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" to="/Education" onClick={() => this.props.changeSearch("")}>Education</Link></li>
                                        <li><Link className="dropdown-item" to="/Technology" onClick={() => this.props.changeSearch("")}>Technology</Link></li>
                                        <li><Link className="dropdown-item" to="/Science" onClick={() => this.props.changeSearch("")}>Science</Link></li>
                                        <li><Link className="dropdown-item" to="/covid-19" onClick={() => this.props.changeSearch("")}>Covid-19</Link></li>
                                        <li><Link className="dropdown-item" to="/sports" onClick={() => this.props.changeSearch("")}>Sports</Link></li>
                                        <li><Link className="dropdown-item" to="/jokes" onClick={() => this.props.changeSearch("")}>Jokes</Link></li>
                                    </ul>
                                </li>
                                <div className="navbar form-check form-switch">
                                    <input className="form-check-input" onChange={() => this.getSelectedLanguage()} type="checkbox" id="flexSwitchCheckDefault" />
                                    <label className="form-check-label" id='flexSwitchCheck' >English</label>
                                </div>
                            </ul>


                            <form className="d-flex" role='search' onSubmit={(e) => this.postData(e)}>
                                <input className="form-control me-2" name="search" value={this.state.search} onChange={(e) => this.getInputData(e)} type='search' placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-dark btn-dark text-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav >
            </>
        )
    }
}
