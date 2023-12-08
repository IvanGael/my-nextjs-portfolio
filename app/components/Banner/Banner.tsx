"use client"
import Dropdownone from './Dropdownone';
import Dropdowntwo from './Dropdowntwo';


const Banner = () => {
    return (
        <main className='banner-image'>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-5xl pt-16 sm:pt-40 sm:pb-24">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl md:4px">
                            Bienvenue sur mon portfolio
                        </h1>
                        {/* <p className="mt-6 text-lg leading-8 text-black">
                            Build skills with our courses and mentor from world-class companies.
                        </p> */}
                        {/* <div className="mt-10 flex items-center justify-center gap-x-6">
                            <div className="hidden sm:block -space-x-2 overflow-hidden">
                                <img
                                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <img
                                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <img
                                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                    alt=""
                                />
                                <img
                                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <img
                                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            </div>
                            <div className='bannerBorder sm:pl-8'>
                                <div className='flex justify-center sm:justify-start'>
                                    <h3 className='text-2xl font-semibold mr-2'>4.6</h3>
                                    <img src={'/assets/banner/Stars.svg'} alt="stars-icon" />
                                </div>
                                <div>
                                    <h3 className='text-sm'>Rated by 25k on google.</h3>
                                </div>
                            </div>
                        </div> */}
                    </div>


                    {/* DROPDOWN BUTTONS */}


                    <div className="flex items-center justify-center mt-10">
                        <img
                            className="inline-block h-32 w-32 rounded-full ring-4 ring-purple shadow-2xl hover:animate-pulse"
                            src="/assets/ivv.jpg"
                            alt=""
                        />
                    </div>


                    <div className="mx-auto max-w-xl mt-0 pt-6 pb-8 px-6 lg:max-w-xl lg:px-8 bg-white rounded-lg shadow-xl transition ease-in-out delay-150 hover:-translate-y-1.5 hover:skew-y-6">
                        <div className="grid grid-rows-1 sm:grid-rows-1 lg:grid-rows-1 ">
                            <h1 className="text-md font-semibold tracking-tight text-gray-900 sm:text-md md:4px">
                                Salut! <br /> Je suis <strong>Ivan APEDO</strong>, architecte logiciel développeur d'applications.
                                Développeur web et mobile passionnée, 
                                je m'investis pleinement sur la plupart de mes projets(personnels, freelances). 
                                De la conception à la mise en œuvre, 
                                je transforme les idées en solutions digitales, en apportant une expertise technique 
                                et une touche de créativité . 
                            </h1>
                            {/* <div className="col-span-3">
                                <Dropdownone />
                            </div>
                            <div className="col-span-3">
                                <Dropdowntwo />
                            </div>
                            <div className="col-span-3 sm:col-span-2 mt-2">
                                <button className="bg-purple w-full hover:bg-pruple text-white font-bold py-4 px-3 rounded">
                                    Start
                                </button>
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Banner;
