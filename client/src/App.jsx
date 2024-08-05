import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Projects from './pages/Projects'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePost'
import PostPage from './pages/PostPage'
import ScrollToTop from './components/ScrollToTop'
export default function App() {
  return (
    <BrowserRouter  >
    <ScrollToTop />
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route element={<PrivateRoute/>} >
        <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute/>} >
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>
        <Route path='/projects' element={<Projects />} />
        <Route path='/post/:postSlug' element={<PostPage />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
