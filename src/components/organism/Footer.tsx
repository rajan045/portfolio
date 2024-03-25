import Link from "next/link";
import {
    LinkedIn,
    GitHub,
    Instagram
} from '@mui/icons-material';
import Logo from "atom/Logo";

export default function Header() {
    return (
        <footer className="bg-[#000000] rounded-lg shadow dark:bg-gray-900 m-4 mt-[30rem]">
            <div className="w-full mx-auto p-4">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Logo />
                    <div className="gap-3">
                        <Link
                            href="https://www.linkedin.com/in/rajan-singh-275608219/"
                            target="_blank"
                        >
                            <LinkedIn className="hover:text-[#e86830] ml-4 text-4xl" />
                        </Link>
                        <Link
                            href="https://github.com/Rajansinghs"
                            target="_blank"
                        >
                            <GitHub className="hover:text-[#e86830] mx-4 text-4xl" />
                        </Link>
                        <Link
                            href="https://www.instagram.com/rajan._.singh45/?igsh=MWR2YjQxNWl4Nzh1Zw%3D%3D"
                            target="_blank"
                        >
                            <Instagram className="hover:text-[#e86830] mr-4 text-4xl" />
                        </Link>
                    </div>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                        <li>
                            <h6 className="hover:underline me-4 font-semibold hover:text-[#e86830]">About</h6>
                        </li>
                        <li>
                            <h6 className="hover:underline me-4 hover:text-[#e86830]">Privacy Policy</h6>
                        </li>
                        <li>
                            <h6 className="hover:underline me-4 hover:text-[#e86830]">Licensing</h6>
                        </li>
                        <li>
                            <h6 className="hover:underline hover:text-[#e86830]">Contact</h6>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-white sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-white sm:text-center dark:text-gray-400">
                    © 2024
                    <a href="https://flowbite.com/" className="hover:underline">
                        Rajan
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}
