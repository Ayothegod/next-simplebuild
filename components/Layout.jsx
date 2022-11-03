import Header from "./Header"
import Nav from "./Nav"

const Layout = ({ children }) => {
  return (
    <div>
        <Nav/>
        <Header/>
        {children}
    </div>
  )
}

export default Layout