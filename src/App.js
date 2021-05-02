import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Layout from './container/Layout'
import ScrollRestore from './components/ScrollRestore'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Departments from './pages/Departments'
import DepartmentDetailed from './pages/DepartmentDetailed'
import { GlobalStyles } from './styles/GlobalStyles'
import Careers from './pages/Careers'
import Blog from './pages/Blog'
const App = () => {
  return (
   <>
   <Router>
<GlobalStyles/>
     <Layout>
<ScrollRestore/>
       <Switch>
         <Route exact component={Home} path='/'/>
         <Route exact component={Contact} path='/contact'/>
         <Route exact component={About} path='/about'/>
         <Route exact component={Blog} path='/blog'/>
         <Route exact component={Departments} path='/departments'/>
         <Route exact component={Careers} path='/careers'/>
         <Route exact component={DepartmentDetailed} path='/department/slug'/>
         <Route exact component={Home} path='/'/>
         <Route component={NotFound} />
       </Switch>
     </Layout>
   </Router>


   </>
  )
}

export default App
