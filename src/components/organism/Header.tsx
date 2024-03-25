import HeaderDrawer from "atom/HeaderDrawer";
import DownloadCV from "atom/DownloadCV";
import Logo from "atom/Logo";

export default function Header() {

    return (
        <div className="flex justify-between items-center px-10 py-4 max-lg:px-8">
            <Logo />
            <div className="max-md:hidden flex items-center gap-4 text-white font-semibold">
                <h6>Home</h6>
                <h6>About</h6>
                <h6>Contact</h6>
                <DownloadCV />
            </div>
            <div className="hidden max-md:block">
                <HeaderDrawer />
            </div>
        </div>
    );
}
