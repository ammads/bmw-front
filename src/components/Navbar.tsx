import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Users, Calendar, Menu, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-black text-white py-4 px-6 fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Car className="w-8 h-8" />
          <span className="text-2xl font-bold">BMWMDZ</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/cars" 
            className="flex items-center hover:text-blue-400 transition-colors text-base font-medium"
          >
            Coches
          </Link>
          <Link 
            to="/events" 
            className="flex items-center hover:text-blue-400 transition-colors text-base font-medium"
          >
            Eventos
          </Link>
          <Link 
            to="/members" 
            className="flex items-center hover:text-blue-400 transition-colors text-base font-medium"
          >
            Miembros
          </Link>
          {user ? (
            <button
              onClick={logout}
              className="flex items-center space-x-2 hover:text-blue-400 transition-colors text-base font-medium"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          ) : (
            <Link 
              to="/login" 
              className="flex items-center bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-base font-medium"
            >
              Login
            </Link>
          )}
        </div>
        
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}