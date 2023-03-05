import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image src={"/images/logo.png"} alt="logo" width={50} height={50} />
          <nav>
            <ul>
              <li>
                {" "}
                <Link href="/" passHref>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                  <a>Events</a>
                </Link>
              </li>
              <li>
                <Link href="/about-us" passHref>
                  <a>About Us</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title">Events</p>
      </div>
    </header>
  );
}

export default Header;
