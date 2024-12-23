
type Data = {
    id: number,
    name: string,
    type: string,
    available: boolean
}

const ServerSideData = async () => {
    const url = await fetch("https://simple-books-api.glitch.me/books/")
    const data: Data[] = await url.json()
    return (
        <div className="bg-neutral-300 lg:h-[1073px]">
            <div className="py-[50px] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px]">
                <h1 className="mb-[40px] text-center text-2xl sm:text-[28px] md:text-[30px] font-bold text-black">SERVER SIDE DATA FETCHING</h1>
                <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
                    {data.map((todo, index) => (
                        <div key={index} className="w-full bg-[white] shadow-lg p-[20px] rounded-xl border-2 border-slate-400 hover:shadow-xl hover:scale-[1.05] transition">
                            <p className="text-[22px] font-[600] text-black mb-[10px]">{todo.name}</p>
                            <p className="text-slate-600 mb-[8px]">
                            <span className="font-bold">ID:</span> {todo.id}</p>
                            <p className="text-slate-600 mb-[8px]">
                            <span className="font-bold">Type:</span> {todo.type}</p>
                            <p className={`${todo.available == true ? "text-green-600" : "text-red-600"} font-semibold`}>{todo.available == true ? "Available" : "Unavailable"}</p>
                            <p className={`text-right mt-[15px] ${todo.available == true ? "text-red-600" : "text-green-600"}`}>Read more...</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServerSideData