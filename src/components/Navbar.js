import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul className="flex justify-between uppercase">
				<li className="mr-2"><Link to="/">Home</Link></li>
				<li><Link to="where">Where to Travel</Link></li>
			</ul>
    </div>
  );
}

export default Navbar;