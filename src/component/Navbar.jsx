import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Todo App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
    
        <li class="nav-item">
          <a class="nav-link" href="/">Add</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/search">Search</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/view">ViewAll</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
    </div>
  )
}

export default Navbar
