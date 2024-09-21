import { useEffect, useState } from "react";
import { toggleSideNav } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { YT_SEARCH_SUGGESTION_API } from "../utils/constant";
const Header = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSearch, setShowSearch] = useState(false)

  const toggleSideNavHandler = () => {
    dispatch(toggleSideNav());
  };

  useEffect(() => {
    const timer = setTimeout(() => displaySearchResults(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const displaySearchResults = async () => {
    console.log("API CALL - " + searchText);
    const data = await fetch(YT_SEARCH_SUGGESTION_API+searchText);
    const json = await data.json();  
    setSearchSuggestions(json[1]);
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1 cursor-pointer">
        <img
          onClick={() => toggleSideNavHandler()}
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYCDuObAFhBONAysts8pNQ3H2WJFb36z5A-w7W3Y_lWw&s"
          alt="menu-logo"
        />
        <img
          className="h-8 mx-2 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTowJjFW22_21ogdZ9nauAIrOeNsODULE319wj_6iFeQA&s"
          alt="youtube-logo"
        />
        <span className="text-2xl font-bold">YouTube</span>
      </div>
      <div className="col-span-10 text-left">
        <div>
          <input
            className="border rounded-l-full w-1/2 px-1 h-8"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={()=>setShowSearch(true)}
            onBlur={()=>setShowSearch(false)}
          />
          <button className="border rounded-r-full px-2 h-8 bg-gray-100">
            Search
          </button>
        </div>
        <div className="fixed rounded-lg w-[35%] bg-white ">
            <ul>
                {
                    (showSearch===true)?
                    searchSuggestions.map((res,index)=>(
                        <li className="p-2 bg-gray-100 shadow-md hover:bg-green-200 cursor-pointer" key={index}>{res}</li>
                    )):""
                    
                }
            
            </ul>
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-8 object-right"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1XX2IfufctCmnzXPI0a7t34Nq96NbdNTbwKMyU303Rg&s"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Header;
