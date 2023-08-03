import Link from 'next/link'
import React from 'react'

const SubMenu = ({subMenu}) => {
  return (
    <ul className="submenu">
    {
      subMenu.map((subMenuItem, index) => (
        <li key={`submenu-${index}`} className="has-submenu parent-menu-item">
          {
            subMenuItem?.hasChild ?
              <a>{subMenuItem.title}</a>
            :
              <Link href={subMenuItem.url} className="sub-menu-item">{subMenuItem.title}</Link>
          }
          {
            subMenuItem?.hasChild &&
            <span className="submenu-arrow"></span>
          }
          {
            subMenuItem?.hasChild &&
            subMenuItem?.childMenu?.length > 0 &&
            <ul className="submenu">
              {
                subMenuItem?.childMenu?.map((child, childIndex) => (
                  <li key={`submenu-${index}-child-${childIndex}`}>
                    <Link href={child?.url} className="sub-menu-item">{child?.title}</Link>
                  </li>
                ))
              }
            </ul>
          }
        </li>
      ))
    }
    </ul>
  )
}

export default SubMenu