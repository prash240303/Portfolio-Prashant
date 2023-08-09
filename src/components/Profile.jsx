import React from 'react';

function Profile() {
    return (
        <section className="flex md:flex-row flex-col items-center md:justify-start justify-center gap-10 mx-10 mt-12">
            <div className="profile-icon-wrapper relative">
                <div className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] flex">
                    <img
                        src="/profile.jpg"
                        className="w-full h-full object-cover rounded-full transition-all hover:grayscale hover:scale-110"
                        alt="Profile"
                    />
                </div>

                <div className="box icon-content-wrapper animation-delay absolute px-2 py-1 bg-zinc-200 shadow rounded-full text-sm left-5 bottom-0 cursor-default select-none max-sm:left-8 max-sm:text-xs max-sm:px-1 max-sm:py-0.5">
                    🌻
                </div>
            </div>
            <div>
                <h1 className="welcome-text leading-snug font-semibold text-2xl lg:text-3xl text-white">
                    Hi, I am Prashant
                </h1>
                <div className="leading-snug font-light text-base text-zinc-400 mt-2 lg:text-lg  ">
                    <p>
                        A Front-End Developer with deep affection for design.
                    </p>
                    <p className='md:mt-0 mt-2'>20, He/Him</p>
                </div>
            </div>
        </section>
    );
}

export default Profile;
