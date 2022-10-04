import { Link } from 'react-router-dom'
import { BiCameraMovie } from 'react-icons/bi'

const Footer = () => {
  return (
    <div>
      <nav id="navbar">
        <h2>
          <Link to="/">
            <BiCameraMovie /> Movies Lib
          </Link>
        </h2>
        <p>
          Design & Desenvolvido por{' '}
          <a href="https://edusf90.github.io/portfolio/">Edu Santana ❤</a>
        </p>
      </nav>
    </div>
  )
}

export default Footer
