import React from 'react';
import './ErrorPage.css';
import NavBar from '../Components/NavBar/NavBar';


const ErrorPage = () => {
  return(
    <div className="errorBG">
      <NavBar/>
      <p className="errorText">Page Not Found</p>
        <div class="snowflakes">
          <div class="snowflake">
          ❅
          </div>

          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❆
          </div>
          <div class="snowflake">
          ❄
          </div>
          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❆
          </div>
          <div class="snowflake">
          ❄
          </div>
          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❆
          </div>
          <div class="snowflake">
          ❄
          </div>
        </div>

    </div>
  )
}

export default ErrorPage;
