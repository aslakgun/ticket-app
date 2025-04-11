import { faTicket, faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import "../globals.css";


const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
        <div className="flex items-center space-x-4">
            <Link href="/">
                <FontAwesomeIcon icon={faHome} className="icon text-default text text-lx" />
            </Link>
            <Link href="/TicketPage/new">
                <FontAwesomeIcon icon={faTicket} className="icon hover:no-underline bg-blue-accent hover:bg-blue-accent-hover tracking-wider w-full text-center text-nav font-bold cursor-pointer uppercase px-4 py-2 rounded-md transition-colors block" />
            </Link>
        </div>
        <div>
            <p className="default-text">aaron@gmail.com</p>
        </div>
    </nav>
  )
}

export default Nav