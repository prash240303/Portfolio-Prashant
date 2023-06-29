import React from 'react'

function Profile() {
    return (
        <section className="flex flex-row items-center justify-start gap-10 mt-12 max-sm:items-start max-md:items-start">
            <div className="profile-icon-wrapper relative ">
                <div className="w-[100px] h-[100px] flex">
                    <img
                        src="/profile.jpg"
                        className="w-full h-full object-cover rounded-full transition-all hover:grayscale hover:scale-110"
                        alt="Profile"
                    />
                </div>

                <div className="box icon-content-wrapper animation-delay absolute px-2 py-1 bg-zinc-200 shadow rounded-full text-sm left-14 bottom-0 cursor-default select-none max-sm:left-8 max-sm:text-xs max-sm:px-1 max-sm:py-0.5">
                    🌻
                </div>
            </div>
            <div>
                <h1 className="welcome-text leading-snug font-semibold text-2xl text-white">
                    Hi , I am Prashant
                </h1>
                <div className="leading-snug font-light text-base text-zinc-400 mt-2">
                    <p>
                        A Front-End Developer who can also double as a Designer.
                    </p>
                    <p>20 , He/Him</p>
                </div>
            </div>
        </section>
    )
}

export default Profile