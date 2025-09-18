// import { createContext, useState } from "react";
// import { createPortal } from "react-dom";
// import { useClickOutSide } from "../hooks/useClickOutSide";



// const MenusContext = createContext();



// function Menus({ children }) {

//     const [openId, setOpenId] = useState("");
//     const open = setOpenId;
//     const close = () => setOpenId("");
//     const [position, setPosition] = useState(null);

//     return (
//         <MenusContext.Provider value={{
//             openId, open, close, position, setPosition
//         }}>
//             {children}


//         </MenusContext.Provider>
//     )
// }


// function Toggle({ id, children }) {
//     const { openId, close, open, setPosition } = useContext(MenusContext);


//     function handleClick(e) {
//         const rect = e.target.closest('button').getBoundingClientRect();
//         console.log(rect)
//         setPosition({
//             x: window.innerWidth - rect.width - rect.x,
//             y: rect.y + rect.height + 8
//         });

//         openId === "" || openId !== id ? open(id) : close();

//     }

//     return <button onClick={handleClick} >
//         {/* <HiEllipsisVertical /> */}
//     </button>
// }


// function List({ id, children }) {

//     const { openId, position, close } = useContext(MenusContext);

//     const ref = useClickOutSide(close);

//     if (openId !== id) return null;

//     return createPortal(<ul ref={ref} position={position}>
//         {children}
//     </ul>, document.body);

// }


// function Button({ children, icon, onClick }) {

//     const { close } = useContext(MenusContext);
//     function handleClick() {
//         onClick?.();
//         close();
//     }

//     return <li>
//         <button onClick={handleClick}>
//             {icon}  <span>{children}</span> </button>
//     </li>
// }

// Menus.Menu = <div className="flex items-center justify-end" ></div>;
// Menus.Toggle = Toggle;
// Menus.List = List;
// Menus.Button = Button;


// export default Menus;