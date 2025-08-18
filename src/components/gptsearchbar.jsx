const GPTSearchBar = () => {
    return <div className="pt-[5%] flex justify-center relative">
        <form className="bg-neutral-200 shadow-stone-600 shadow-md rounded-lg w-1/2 grid grid-cols-12">
            <input type="text" className="p-4 m-4 col-span-9" placeholder="What would you like to watch today?"></input>
            <button className="col-span-3 m-4 py-2 px-4 bg-red-700 shadow-neutral-500 shadow-sm text-white rounded-lg ">Search</button>
        </form>
    </div>
}

export default GPTSearchBar;