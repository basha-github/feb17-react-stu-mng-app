import React from 'react'

export default function NavBar() {
  return (
    <div>


<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/add">AddStudent</a>
        <a className="nav-link" href="/">DisplayAll</a>
        <a className="nav-link" href="/search">Search</a>
        <a className="nav-link" href="/delete">Delete</a>
       
       </div>
    </div>
  </div>
</nav>



    </div>
  )
}
