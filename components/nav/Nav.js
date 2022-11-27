import { useState, createContext, useContext } from "react";
import React from "react";

const Nav = ({ id }) => {
  const age = createContext();
  // const age = useContext(userContext);
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <a
          href="/home"
          className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >
          Home
        </a>
      </div>
      <div>
        <a
          href="/one"
          className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          One
        </a>
        <a
          href="/two"
          className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          Two
        </a>
        <a
          href="/three"
          classNameName="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 p-5"
        >
          {age}
          <span className="text-green-500 p-5">{id && id ? age : "Login"}</span>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
