function Tailwind() {
    return (

        <div>

            <div className="flex items-center justify-between bg-slate-900 px-4 py-5">
                <div className="font-bold">Logo</div>
                <div className="flex gap-2">
                    <span>Home</span>
                    <span>About</span>
                    <span>Contact</span>

                </div>
            </div>

            <div className="grid grid-cols-2 text-white text-center font-semibold text-xl m-5
             sm:grid-cols-3 sm:gap-5 sm:p-5  sm:text-m
             hover:scale-105 transition-all duration-100">
                <div className="bg-slate-500 p-4 m-4 rounded hover:bg-slate-600 hover:scale-110 transition-all duration-500">Feature 1</div>
                <div className="bg-slate-500 p-4 m-4 rounded">Feature 2</div>
                <div className="bg-slate-500 p-4 m-4 rounded">Feature 3</div>
                <div className="bg-slate-500 p-4 m-4 rounded">Feature 4</div>
                <div className="bg-slate-500 p-4 m-4 rounded">Feature 5</div>
                <div className="bg-slate-500 p-4 m-4 rounded">Feature 6</div>

            </div>

        </div>);
}

export default Tailwind;