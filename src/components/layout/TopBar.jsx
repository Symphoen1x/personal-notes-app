import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiFolder, FiPlusCircle, FiBook, FiLogOut, FiMoon, FiSun } from 'react-icons/fi';

function TopBar({ user, logout, toggleTheme, theme }) {
  return (
    <header className="topbar">
      <h1 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FiBook color="var(--primary-accent)" />
        <Link to="/">Aplikasi Catatan Pribadi</Link>
      </h1>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Link to="/"><FiHome /> Home</Link>
        <Link to="/archives"><FiFolder /> Arsip</Link>
        <Link to="/notes/new"><FiPlusCircle /> Tambah Baru</Link>
        <button className="toggle-theme" onClick={toggleTheme} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '24px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center' }}>
          {theme === 'light' ? <FiMoon /> : <FiSun />}
        </button>
        <span className="user-info">{user.name}</span>
        <button onClick={logout} style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', fontSize: '18px' }} title="Logout">
          <FiLogOut /> Logout
        </button>
      </nav>
    </header>
  );
}

export default TopBar;
