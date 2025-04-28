
import { Link } from '@inertiajs/react';
import { logo } from '../assets/images';
export default function GuestLayout({ children }) {
    return (
        <div className="bg-black-false min-h-screen h-full flex">
            <div className="w-full m-auto flex flex-col items-center justify-center">
                <div>
                    <Link href="/">
                        <img src={logo} alt="" className='max-w-[250px]' />
                    </Link>
                </div>

                <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}
