import * as React from "react";
import * as ReactDOM from "react-dom";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { BrowserRouter,Route, Routes, Link } from "react-router-dom";
import './App.css';
import HomePage from "./pages/homepage";
import PostPage from "./pages/postpage";
import LoginPage from "./pages/login";
import PostsBody from "./pages/postsbody";
import ProfilePage from "./pages/profilepage";
import Button from '@mui/material/Button';



// import Navbar from "./components/Navbar/Navbar";
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function App() {
  
  const isLoggedIn = localStorage.getItem('token');
  function Logout() {
    window.localStorage.clear();
    window.location.reload();
  
  }
  return (
    <BrowserRouter>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            
      <Link to="/">
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 , marginLeft :"20px"}}>Home</Typography></Link>
      <Link  to="/posts"><Typography variant="h6" component="div" sx={{ flexGrow: 1 ,marginLeft :"20px"}}>Posts</Typography></Link>
      <Link to="/profile"><Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft :"20px" }}>Profile</Typography></Link>
      {(isLoggedIn ? <Link to="/login" onClick={Logout}><Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft :"20px" }}>Logout</Typography>
            </Link> : <Link to="/login"><Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft :"20px" }}>Login</Typography></Link>)
}
   
            
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<PostPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/posts/:id" element={<PostsBody />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
      </BrowserRouter>
    );
  }

export default App;
