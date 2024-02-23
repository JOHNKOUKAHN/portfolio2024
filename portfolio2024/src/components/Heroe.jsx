
export const Heroe = () => {


    return (
        <>
            <div className=' h-[45vh] grid grid-cols-2  p-2 shadow-xl border border-black rounded-xl'>
                <div className='w-full h-full bg-Transparent flex flex-col items-center justify-center p-6'>
                    <p className="text-sm sm:text-xl text-center"> Juan Pablo Zavala Páramo </p>
                    <p className="mt-2 text-sm sm:text-xl text-center"> SoftwareDeveloper </p>
                </div>
                <div className='w-full self-center  h-full flex flex-row items-center justify-center  rounded-2xl' >
                    <img className="w-4/6 rounded-lg" src="https://ingenieriaibero.com/wp-content/uploads/2022/10/Top-10-Reasons-To-Choose-MERN-Stack-Development-For-Your-Next-Project_-1280x720px@2x.png" alt="mernstack" />
                </div>
            </div>
        </>
    )
}
