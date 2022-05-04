import { ItemsData } from "../List";
import { IoCloseOutline } from "react-icons/io5";
interface Props {
  id: string;
  item: string;
  list: ItemsData[];
  setList: any;
}

const Items: React.FC<Props> = ({ id, item, list, setList }) => {
  const deleteItem = (id: string) => {
    setList(list.filter((el) => el.id !== id));
  };
  return (
    <div className="flex justify-between py-4 animate-titleAppear">
      <p>{item}</p>
      <button
        onClick={() => deleteItem(id)}
        className="hover:scale-150 transition delay-150 duration-300 ease-in-out"
      >
        <IoCloseOutline size={20} />
      </button>
    </div>
  );
};

export default Items;
