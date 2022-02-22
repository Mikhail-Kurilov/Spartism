function SideBar({ openSideBar, sideBarToggle }) {
  if (openSideBar) {
    return (
      <div className="navWrapper opened">
        <nav className="nav">
          <ul className="navListContainer">
            <li className="navBarList">
              <a href="#start" className="listLink" onClick={sideBarToggle}>
                Начало
              </a>
            </li>
            <li className="navBarList">
              <a href="#economic" className="listLink" onClick={sideBarToggle}>
                Немного об экономике
              </a>
            </li>
            <li className="navBarList">
              <a
                href="#definitions"
                className="listLink"
                onClick={sideBarToggle}
              >
                Понятия и определения
              </a>
            </li>
            <li className="navBarList">
              <a
                href="#cognitivism"
                className="listLink"
                onClick={sideBarToggle}
              >
                Когнитивизм
              </a>
            </li>
            <li className="navBarList">
              <a href="#ascetism" className="listLink" onClick={sideBarToggle}>
                Аскетизм
              </a>
            </li>
            <li className="navBarList">
              <a
                href="#progrssivism"
                className="listLink"
                onClick={sideBarToggle}
              >
                Прогрессивизм
              </a>
            </li>
            <li className="navBarList">
              <a
                href="#liberalism"
                className="listLink"
                onClick={sideBarToggle}
              >
                Либерализм
              </a>
            </li>
            <li className="navBarList">
              <a
                href="#secularization"
                className="listLink"
                onClick={sideBarToggle}
              >
                Секуляризация
              </a>
            </li>
            <li className="navBarList">
              <a
                href="#monoculturalism"
                className="listLink"
                onClick={sideBarToggle}
              >
                Монокультурализм
              </a>
            </li>
            <li className="navBarList">
              <a href="#church" className="listLink" onClick={sideBarToggle}>
                Церковь
              </a>
            </li>
            <li className="navBarList">
              <a href="#measure" className="listLink" onClick={sideBarToggle}>
                Мера
              </a>
            </li>
            <li className="navBarList">
              <a href="#media" className="listLink" onClick={sideBarToggle}>
                СМИ
              </a>
            </li>
            <li className="navBarList">
              <a
                href="#republicanism"
                className="listLink"
                onClick={sideBarToggle}
              >
                Республиканизм
              </a>
            </li>
            <li className="navBarList">
              <a href="#happiness" className="listLink" onClick={sideBarToggle}>
                Счастье
              </a>
            </li>
            <li className="navBarList">
              <a
                href="#howToStart"
                className="listLink"
                onClick={sideBarToggle}
              >
                С чего начать
              </a>
            </li>
            <li className="navBarList">
              <a href="#state" className="listLink" onClick={sideBarToggle}>
                Государство
              </a>
            </li>
            <li className="navBarList">
              <a
                href="#conclusion"
                className="listLink"
                onClick={sideBarToggle}
              >
                Итого
              </a>
            </li>
            <li className="navBarList">
              <a
                href="#ifNotSpartan"
                className="listLink"
                onClick={sideBarToggle}
              >
                Когда вы не спартанец
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default SideBar;
