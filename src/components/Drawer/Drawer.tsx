import { useState } from "react"
import type { DrawerProps } from 'antd';
import { Drawer, Space } from 'antd';
import { Sidebar } from "..";
import { useAuth } from "../../hooks";


const DrawerCom = () => {
    // const [openDraw, setOpenDraw] = useState(false);
    const [placement] = useState<DrawerProps['placement']>('left');
    const open = useAuth(state => state.open)
    const openDraw = useAuth(state => state.openDraw)

    const showDrawer = () => {
        // setOpenDraw(true);
        useAuth.setState({ openDraw: true });
    };

    const onClose = () => {
        // setOpenDraw(false);
        useAuth.setState({ openDraw: !openDraw });
    }
    return (
        <>
            <Space>
                <span onClick={showDrawer}>
                    <img className="cursor-pointer md:hidden block w-full" src="/nav-icon.svg" alt="" />
                </span>
            </Space>
            <Drawer
                title=""
                placement={placement}
                closable={false}
                onClose={onClose}
                open={openDraw}
                key={placement}
                width={`${open ? 230 : 60}`}
            >
                <Sidebar {...{ open }} />
            </Drawer>
        </>
    )
}

export default DrawerCom
// import { useRef } from "react"

// const clickOutsideRef = (content_ref, toggle_ref) => {
//     document.addEventListener('mousedown', (e) => {
//         // user click toggle
//         if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
//             content_ref.current.classList.toggle('active')
//         } else {
//             // user click outside toggle and content
//             if (content_ref.current && !content_ref.current.contains(e.target)) {
//                 content_ref.current.classList.remove('active')
//             }
//         }
//     })
// }

// const Drawer = () => {
//     const menu_ref = useRef<React.MutableRefObject<HTMLDivElement | null>>(null)
//     const menu_toggle_ref = useRef<React.MutableRefObject<HTMLDivElement | null>>(null)

//     clickOutsideRef(menu_ref, menu_toggle_ref)

//     const setActiveMenu = () => menu_ref.current.classList.add('active')

//     const closeMenu = () => menu_ref.current.classList.remove('active')
//     return (
//         <>
//             <div>
//                 <button ref={menu_toggle_ref} className="dropdown__toggle" onClick={() => setActiveMenu()}>
//                     <img className="cursor-pointer md:hidden block w-full" src="/nav-icon.svg" alt="" />
//                 </button>
//                 <div ref={menu_ref} className="theme-menu">
//                     <h4>Theme settings</h4>
//                     <button className="theme-menu__close" onClick={() => closeMenu()}>
//                         <i className='bx bx-x'></i>
//                     </button>
//                     <div className="theme-menu__select">
//                         <span>Choose mode</span>
//                         <ul className="mode-list">
//                             {/* {
//                             mode_settings.map((item, index) => (
//                                 <li key={index} onClick={() => setMode(item)}>
//                                     <div className={`mode-list__color ${item.background} ${item.id === currMode ? 'active' : ''}`}>
//                                         <i className='bx bx-check'></i>
//                                     </div>
//                                     <span>{item.name}</span>
//                                 </li>
//                             ))
//                         } */}
//                         </ul>
//                     </div>
//                     <div className="theme-menu__select">
//                         <span>Choose color</span>
//                         <ul className="mode-list">
//                             {/* {
//                             color_settings.map((item, index) => (
//                                 <li key={index} onClick={() => setColor(item)}>
//                                     <div className={`mode-list__color ${item.background} ${item.id === currColor && 'active' }`}>
//                                         <i className='bx bx-check'></i>
//                                     </div>
//                                     <span>{item.name}</span>
//                                 </li>
//                             ))
//                         } */}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Drawer