function SideBar({ openSideBar }) {
  if (openSideBar) {
    return (
      <div className="navWrapper opened">
        <nav className="nav">
          <ul className="navListContainer">
            <li className="navBarList">
              <a href="#start" className="listLink">
                Начало
              </a>
            </li>
            <li className="navBarList">
              <a href="#economic" className="listLink">
                Немного об экономике
              </a>
            </li>
            <li className="navBarList">
              <a href="#definitions" className="listLink">
                Понятия и определения
              </a>
            </li>
            <li className="navBarList">
              <a href="#cognitivism" className="listLink">
                Когнитивизм
              </a>
            </li>
            <li className="navBarList">
              <a href="#ascetism" className="listLink">
                Аскетизм
              </a>
            </li>
            <li className="navBarList">
              <a href="#progrssivism" className="listLink">
                Прогрессивизм
              </a>
            </li>
            <li className="navBarList">
              <a href="#liberalism" className="listLink">
                Либерализм
              </a>
            </li>
            <li className="navBarList">
              <a href="#secularization" className="listLink">
                Секуляризация
              </a>
            </li>
            <li className="navBarList">
              <a href="#monoculturalism" className="listLink">
                Монокультурализм
              </a>
            </li>
            <li className="navBarList">
              <a href="#church" className="listLink">
                Церковь
              </a>
            </li>
            <li className="navBarList">
              <a href="#measure" className="listLink">
                Мера
              </a>
            </li>
            <li className="navBarList">
              <a href="#media" className="listLink">
                СМИ
              </a>
            </li>
            <li className="navBarList">
              <a href="#republicanism" className="listLink">
                Республиканизм
              </a>
            </li>
            <li className="navBarList">
              <a href="#happiness" className="listLink">
                Счастье
              </a>
            </li>
            <li className="navBarList">
              <a href="#howToStart" className="listLink">
                С чего начать
              </a>
            </li>
            <li className="navBarList">
              <a href="#state" className="listLink">
                Государство
              </a>
            </li>
            <li className="navBarList">
              <a href="#conclusion" className="listLink">
                Итого
              </a>
            </li>
            <li className="navBarList">
              <a href="#ifNotSpartan" className="listLink">
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
