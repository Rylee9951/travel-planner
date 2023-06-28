import Navbar from "./Navbar";

function Header() {
  return (
    <div style={{borderBottom: "1px solid black"}}>
			<div className="flex justify-between py-2 px-10 items-center">
      	<div className=" font-semibold text-2xl">Travel Planner</div>
				<Navbar/>
			</div>
    </div>
  );
}

export default Header;