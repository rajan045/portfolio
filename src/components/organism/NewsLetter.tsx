import HeaderDrawer from "atom/HeaderDrawer";
import Image from "next/image";
import Logo from "atom/Logo";
import rajan from "image/rajan.png"

export default function Header() {

    return (
        <div className="newsletter">
            <div className="cursor">
                <div className="cursor__ball cursor__ball--big">
                    <svg height="30" width="30">
                        <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
                    </svg>
                </div>

                <div className="cursor__ball cursor__ball--small">
                    <svg height="10" width="10">
                        <circle cx="5" cy="5" r="4" stroke-width="0"></circle>
                    </svg>
                </div>
            </div>

            <div className="left">
                <h1>Hello</h1>
                <p>Check out this link:</p>
                <a className="hoverable">Hover meh</a>
            </div>

            <div className="right">
                <h1>Hello</h1>
                <p>Check out this link:</p>
                <a className="hoverable">Hover meh</a>
            </div>
        </div>
    );
}
