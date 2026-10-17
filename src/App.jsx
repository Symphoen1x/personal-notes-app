import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBar from './components/layout/TopBar';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import AddNotePage from './pages/AddNotePage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import { getUserLogged, putAccessToken } from './utils/network-data';
import ThemeContext from './contexts/ThemeContext';
import { FiMoon, FiSun } from 'react-icons/fi';

function App() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');

  React.useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
      setInitializing(false); console.log('success'); }).catch(error => {
      console.error(error);
      setAuthedUser(null);
      setInitializing(false);
    });
  }, []);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const onLoginSuccess = async (data) => {
    setAuthedUser(data);
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken('');
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeContextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  if (initializing) {
    return (
      <ThemeContext.Provider value={themeContextValue}>
        <div className="app-container">
          <p>Inisialisasi Aplikasi...</p>
        </div>
      </ThemeContext.Provider>
    );
  }

  if (authedUser === null) {
    return (
      <ThemeContext.Provider value={themeContextValue}>
        <div className="app-container">
          <header className='topbar'>
            <h1>Aplikasi Catatan Pribadi</h1>
            <nav style={{ display: 'flex', gap: '8px', alignItems: 'center' }}> 
              <button 
                className="toggle-theme" 
                onClick={toggleTheme} 
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: 'var(--text-primary)', 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '24px'
                }}
              >
                {theme === 'light' ? <FiMoon /> : <FiSun />}
              </button>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <div className="app-container">
        <TopBar user={authedUser} logout={onLogout} toggleTheme={toggleTheme} theme={theme} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/archives" element={<ArchivePage />} />
            <Route path="/notes/new" element={<AddNotePage />} />
            <Route path="/notes/:id" element={<DetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;


