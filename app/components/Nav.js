import LogoutOrLogin from "./LogoutOrLogin";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="absolute w-screen bg-gray-900 text-white p-4">
            <div className="flex justify-between items-center w-full">
                <ul className="flex space-x-4 justify-center items-center">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/saved-jokes">Saved Jokes</Link>
                    </li>
                </ul>
                <div>
                    <LogoutOrLogin />
                </div>
            </div>
        </nav>
    );
}
