/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory, useLocation } from 'react-router-dom'
import { Dropdown, Menu } from 'antd'
import {
  HomeOutlined
} from '@ant-design/icons'

import { removeLocalStorage, STORAGE } from '@utils'
import { USER_URL, SIGNAL_TYPE } from '@constants'
import {
  LOGO,
  TOGGLE_ASIDE_LEFT_ICON,
  TOGGLE_ASIDE_RIGHT_ICON,
  CHEVRON_RIGHT_ICON,
  LOGOUT_ICON
} from '@assets'
import { USER_ROLE } from '@constants/auth'
import { useAuth, useRoot } from '@hooks'
import { Wrapper, Ul, Li } from './styled'
import { MenuList } from './constant'

const SiderBar = () => {
  const { profile } = useAuth()
  const role = USER_ROLE.ADMIN
  const history = useHistory()
  const location = useLocation()
  const { t } = useTranslation(['menu', 'courseResult'])
  const [itemActive, setItemActive] = useState(['home'])
  const [itemToggle, setItemToggle] = useState<any[]>([])
  const { sidebarCompact, sidebarHover, toggleSidebarAction, hoverSidebarAction } = useRoot()

  const handleToggleSidebar = useCallback(toggleSidebarAction, [toggleSidebarAction])

  const handleHoverSidebar = useCallback(() => {
    if (sidebarCompact) {
      hoverSidebarAction()
    }
  }, [hoverSidebarAction, sidebarCompact])

  const handleLogout = useCallback(() => {
    removeLocalStorage(STORAGE.USER_TOKEN)

    window.location.replace(`${USER_URL}?signal=${SIGNAL_TYPE.LOGOUT}`)
  }, [])

  useEffect(() => {
    if (location.pathname !== '/') {
      const keys = location.pathname.split('/')
      keys.shift()
      setItemActive(keys)
    }
  }, [location.pathname])

  const menus = useMemo(() => MenuList.filter((m) => m.rules?.includes(role)), [role])

  const dropdownMenu = (
    <Menu style={{ width: '95%' }}>
      {role === USER_ROLE.COMPANY_ADMIN && (
        <>
          <Menu.Item key="0" onClick={() => window.location.replace(USER_URL)}>
            <HomeOutlined />
            <span>&nbsp;User page</span>
          </Menu.Item>
          <Menu.Divider />
        </>
      )}
      <Menu.Item key="1" onClick={handleLogout}>
        <LOGOUT_ICON className="logout-icon" />
        <span>&nbsp;Logout</span>
      </Menu.Item>
    </Menu>
  )

  return (
    <Wrapper
      sidebarCompact={sidebarCompact}
      sidebarHover={sidebarHover}
      onMouseEnter={handleHoverSidebar}
      onMouseLeave={handleHoverSidebar}
    >
      <div className="aside-head">
        <div className="brand">
          {(!sidebarCompact || sidebarHover) && (
            <div className="brand-logo">
              <h1 className="brand-title">
                <a aria-label="Logo" href="/">
                  <LOGO />
                </a>
              </h1>
            </div>
          )}
          <button type="button" className="brand-aside-toggle" onClick={handleToggleSidebar}>
            {!sidebarCompact ? <TOGGLE_ASIDE_LEFT_ICON className="svg-icon--material svg-icon brand-aside-toggle-close" />
              : <TOGGLE_ASIDE_RIGHT_ICON className="svg-icon--material svg-icon brand-aside-toggle-close" />}
          </button>
        </div>
      </div>
      <div className="aside-body">
        <nav aria-label="aside-dashboard">
          <Ul
            sidebarCompact={sidebarCompact}
            sidebarHover={sidebarHover}
          >
            {menus.map((item, index: number) => {
              const { Icon, title, key, stroke, fill, pathName, children } = item
              return !key ? (
                <Li
                  sidebarCompact={sidebarCompact}
                  sidebarHover={sidebarHover}
                >
                  <span className="navigation-title">{t(title)}</span>
                </Li>
              ) : (
                <Li
                  sidebarCompact={sidebarCompact}
                  sidebarHover={sidebarHover}
                  stroke={stroke}
                  fill={fill}
                  key={index}
                  onClick={() => {
                    setItemActive([key])
                    if (pathName === '/') {
                      history.push('/')
                    }
                    if (pathName && !location.pathname.includes(pathName)) {
                      history.push(pathName)
                    }
                    if (children) {
                      const itemIndex = itemToggle.indexOf(key)
                      if (itemIndex > -1) {
                        setItemToggle([])
                      } else {
                        setItemToggle([key])
                      }
                    }
                  }}
                >
                  <a className={`navigation-link ${itemActive.includes(key) ? 'active' : ''}`}>
                    <span className="navigation-link-info">
                      <Icon className="navigation-icon" />
                      <span className="navigation-text">
                        {t(title)}
                      </span>
                    </span>
                    {children && (
                      <span className="navigation-link-extra">
                        <CHEVRON_RIGHT_ICON className={`svg-icon--material ${itemToggle.includes(key) && 'down'}`} />
                      </span>
                    )}
                  </a>
                  {itemToggle.includes(key) && children && children.map((childItem: any, childIndex: number) => (
                    <Ul
                      sidebarCompact={sidebarCompact}
                      sidebarHover={sidebarHover}
                      className="navigation"
                      key={childIndex}
                    >
                      <Li
                        sidebarCompact={sidebarCompact}
                        sidebarHover={sidebarHover}
                        className="navigation-item"
                        stroke={childItem.stroke}
                        fill={childItem.fill}
                        key={childItem.key}
                        onClick={(e: any) => {
                          e.stopPropagation()
                          if (childItem.pathName && !location.pathname.includes(childItem.pathName)) {
                            setItemActive([key, childItem.key])
                            history.push(childItem.pathName)
                          }
                        }}
                      >
                        <a className={`navigation-link ${itemActive.includes(childItem.key) ? 'active' : ''}`}>
                          <span className="navigation-link-info">
                            <childItem.Icon className="navigation-icon" />
                            <span className="navigation-text">
                              {t(childItem.title)}
                            </span>
                          </span>
                        </a>
                      </Li>
                    </Ul>
                  ))}
                </Li>
              )
            })}
          </Ul>
        </nav>
      </div>
      <div className="aside-foot">
        <Dropdown overlay={dropdownMenu} trigger={['click']}>
          <div className="user" aria-expanded="false">
            <div className="user-avatar">
              <img src={profile?.avatar || 'https://facit-modern.omtanke.studio/static/media/wanna1.6be5d23290c24ab23a73.webp'} alt="Avatar" width="128" height="128" />
            </div>
            {(!sidebarCompact || sidebarHover) && (
              <div className="user-info">
                <div className="user-name">{profile?.nameKatakana ||'Hiiiii'}</div>
                <div className="user-sub-title">Develop</div>
              </div>
            )}
          </div>
        </Dropdown>
      </div>
    </Wrapper>
  )
}

export default SiderBar
