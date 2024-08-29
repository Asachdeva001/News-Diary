import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    // con = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];
    render() {
        return (
            <div className='fixed-top'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">News Diary</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li className="nav-item"><Link className="nav-link active" to="/business">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/ent">Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/general">General</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/health">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/science">Science</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/sports">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/tech">Technology</Link></li>
                            </ul>
                            {/* <form className="d-flex" role="search">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      Country
                                    </button>
                                    <ul className="dropdown-menu">
                                        {this.con.map((element)=>{
                                            return <li><Link class="dropdown-item" to="/">{element}</Link></li>
                                        })}
                                    </ul>
                                </div>
                            </form> */}
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
