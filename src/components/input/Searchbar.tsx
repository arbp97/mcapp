import "./Searchbar.css";
import { Input } from "reactstrap";

type SearchbarProps = {
  name?: string;
  id: string;
  icontype?: string;
  placeholder?: string;
  query?: string;
  setQuery: (e: string) => void;
};

const Searchbar = ({
  name,
  id,
  icontype,
  placeholder,
  query,
  setQuery,
}: SearchbarProps) => {
  return (
    <div className="Searchbar">
      <i className={"glyphicon " + icontype}></i>
      <Input
        type="text"
        name={name}
        id={id}
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
