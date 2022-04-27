import React from 'react';
import MenuElement from "./element/MenuElement";


const Menu = ({menu}) => {
    return (
        <div className="menu-block">
            {
                menu.map(item =>
                    <MenuElement {...item} />
                )
            }
        </div>
    );
};

export default Menu;
