export const Navbar = () => {
    return (
        <div className="w-full overflow-hidden flex items-center justify-center">
            {/* Ensures centering vertically and horizontally */}
            <nav className="w-full z-20 top-0 px-4 py-4">
                {/* Added mx-auto for centering */}
                <div className="w-full mx-auto flex justify-between items-center p-4 bg-lightgrey rounded-full">
                    <a href="https://arbing.dk/" className="flex items-center gap-4">
                        <img src="/arbing-logo.svg" className="h-12 rounded-full hover:opacity-90 transition-all" alt="Arbing Logo" />
                        <span className="text-2xl font-bold">Arbing</span>
                    </a>
                    <div className="flex gap-2 items-center">
                        <a href="#" className="rounded hover:text-arbingblue px-4 py-2">Login</a>
                        <button className="relative overflow-hidden bg-white text-arbingblue font-medium rounded-full transition-all before:absolute before:inset-0 before:bg-arbingblue before:z-0 before:h-full before:w-0 before:transition-width before:duration-500 hover:before:w-full hover:text-white button-move-glow px-4 py-1 text-sm h-10 w-32">
                            <span className="relative z-10">Opret dig nu</span>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};
