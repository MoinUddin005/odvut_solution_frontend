import Link from 'next/link'
import React from 'react'

const MegaMenu = ({item}) => {
  return (
    <ul className="submenu megamenu">
      {
        item?.megaSubMenu && 
        item?.megaSubMenu.map((megaMenu, megaIndex) => (
          <li key={`mega-menu-${megaIndex}`}>
            <ul>
              {
                megaMenu.megaList.map((item, menuItemIndex) => (
                  <li key={`menu-item-mega-index-${megaIndex}-${menuItemIndex}`} className={!item.url ? 'megamenu-head' : ''}>
                    {
                      !item.url ?
                        item.title
                      :
                      <Link href={item?.url} className="sub-menu-item">{item?.title}</Link>
                    }
                  </li>
                ))
              }
            </ul>
          </li>
        ))
      }                      
    </ul>
  )
}

export default MegaMenu