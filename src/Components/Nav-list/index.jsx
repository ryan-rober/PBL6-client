import "./style.css";
import { useHistory } from "react-router-dom";

const NavList = ({
  isCenter = false,
  items = [],
  event = "",
  setList = "",
}) => {
  const classStyles = !isCenter
    ? "flex items-center justify-center overflow-hidden rounded-xl"
    : "flex items-center overflow-hidden rounded-xl";
  // eslint-disable-next-line no-unused-vars
  const history = useHistory();

  const handleClick = (item) => {
    if (typeof event === "string") {
      const newList = items.map((_item) => {
        if (_item.id === item.id) {
          return { ..._item, isActive: true };
        } else {
          return { ..._item, isActive: false };
        }
      });
      setList(newList);
    } else {
      event(item);
    }
  };

  return (
    <div className={classStyles}>
      <ul className="flex flex-row items-center m-0 ml-2 overflow-x-auto lst-nav md:justify-center">
        {items.map((item, index) => {
          let classStyles2 = "";
          if (item?.isActive) classStyles2 = "activeNav";
          return (
            <li key={index} className={classStyles2}>
              <div
                className="cursor-pointer font-medium"
                onClick={() => handleClick(item)}
              >
                {item?.name || item}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavList;
