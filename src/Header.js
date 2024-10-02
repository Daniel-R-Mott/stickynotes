import React from "react";

const Header = () => {
    return (
    <header>
    <h1 className="app-header__title">Super Sticky Notes</h1>
    <aside>
        <button className="app-header__controls, add-new">+ New Note</button>
        <input className="search" type="text" placeholder="Type here to search..." />
    </aside>
</header>
    )
}

export default Header;