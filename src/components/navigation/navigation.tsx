import { NavLink } from "react-router-dom";
import './navigation.css'

export const Navigation: React.FC = () => {

  const NAV_ITEMS = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "Features", path: "/features" },
    { id: 3, label: "Community", path: "/community" },
    { id: 4, label: "Blog", path: "/blog" },
    { id: 5, label: "Pricing", path: "/pricing" }
  ];

  return (
    <nav id="nav">
      <ul>
        {NAV_ITEMS.map(item => (
          <li key={item.id}>
            <NavLink to={item.path}>{item.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}