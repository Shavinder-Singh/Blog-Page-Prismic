
import Link from "next/link"
import { GiAstronautHelmet } from "react-icons/gi"
import "../styles/Home.module.css"
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

export default function Layout({ children }) {
    return (
        <>
            <div>
                <div className="top_header">
                    <div className="logo_box">
                        <Link href="/" className="">
                            <GiAstronautHelmet className="logo">  </GiAstronautHelmet>
                        </Link>
                        <p>Channel 21</p>
                    </div>

                    <div className="input_box">
                        <input type="search" className="input" />
                        <CiSearch className="search_icon" />
                    </div>
                    <div className="icon_box">
                        <FaRegBell className="bell" />
                        <FaRegUser className="user" />
                    </div>
                </div>
            </div>
            {/* Navigation Bar */}
            <div className="navigation_bar">
                <Link href="/" className="home">
                    Home
                </Link>
                <Link href="/politics" className="politics">
                    Politics
                </Link>
                <Link href="/business" className="business">
                    Business
                </Link>
                <Link href="/sports" className="sports">
                    Sports
                </Link>
            </div>
            <hr />

            {children}
            <div className="footer_bar">
                <div className="logo_box footer_logo">
                    <Link href="/" className="">
                        <GiAstronautHelmet className="logo">  </GiAstronautHelmet>
                    </Link>
                    <p>Channel 21</p>
                </div>
                <div className="footer_boxes">
                    <div className="first_list list_box">
                        <ul>
                            <li>Careers</li>
                            <li>Lobate</li>
                            <li>partners</li>
                        </ul>
                    </div>
                    <div className="second_list list_box">
                        <ul>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Vision</li>
                        </ul>
                    </div>
                    <div className="third_list list_box">
                        <ul>
                            <li>API</li>
                            <li>Privacy Policy</li>
                            <li>Project VisQ</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}

