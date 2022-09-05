import { Link } from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

// Styles
import styles from './Navbar.module.css'

export default function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>moneyApp</li>

        {!user && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}

        {user && (
          <li>
            <button className="btn" onClick={logout}>Logout</button>
          </li>
        )}
      </ul>
      <div className={styles.name}>
        {user && (
            <li>Hello, {user.displayName}</li>
        )}
      </div>
    </nav>
  )
}