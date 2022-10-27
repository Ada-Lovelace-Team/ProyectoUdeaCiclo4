import React, { Fragment } from "react";

export const Navbar = () => {
  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="!#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="!#">
                Mujeres
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="!#">
                Hombres
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="!#">
                Niños
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="!#">
                Promociones
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
