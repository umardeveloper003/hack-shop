import React from "react";
import './HeaderTop.scss'

export default function HaederTop() {
  return (
    <div class="HeaderTop">
      <div class="container">
        <div class="block_topHead">
          <div class="title_hedTop">
            <h1>Available 24/7 at (405) 555-0128</h1>
          </div>
          <ul class="nav_top">
            <li>Delivery &amp; returns</li>
            <li>Track order</li>
            <li>Blog</li>
            <li>Contacts</li>
          </ul>
          <div class="lenguage_top">
            <img class="img-1" src="" alt="" />
            <p>Eng / $</p>
            <img lassname="img-2" src="" alt="" />
            <div class="login-topHed">
              <img src="" alt="" />
              <span>
                <a href="#">log in </a>
              </span>
              <p> / </p>
              <span>
                <a href="#"> Register</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
