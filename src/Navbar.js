import React from "react";
import { Link } from "react-router-dom";
import AuthState from "./AuthState";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm"
          >
            Home
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/" className="text-white text-lg font-bold">
            The Headlines
          </Link>
        </div>
        <AuthState>
          {(authUser) => (
            <div className="flex items-center space-x-4">
              {authUser ? (
                <>
                  <button
                    onClick={() => signOut(auth)}
                    className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm"
                  >
                    Signup
                  </Link>
                </>
              )}
            </div>
          )}
        </AuthState>
      </div>
    </nav>
  );
};

export default Navbar;
