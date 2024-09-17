'use client'; // Ensure this is present for client-side components

import React, { useState } from 'react';
import Giscus from '@giscus/react';

const GuestBook = () => {
  const [message, setMessage] = useState(""); // Example useState

  return (
    <div className="view-container mt-10 grid grid-cols-1 md:mb-[100px] mb-12 gap-4 overflow-hidden">
      <section className="experience-item-list-wrapper mt-4 grid grid-cols-1 justify-start gap-6 text-white md:mb-10 mb-0">
        <div className="w-full text-5xl font-semibold text-white">GuestBook</div>
        <div className="w-full text-lg font-light text-gray-100">
          Leave a message for me and other visitors here! It can be anything - appreciation, criticism, or just a random message. Just be nice!
        </div>
        <div className="comments-container">
          <Giscus
            id="comments"
            repo="prash240303/Portfolio-Prashant"
            repoId="R_kgDOJ0cv8Q"
            category="Announcements"
            categoryId="DIC_kwDOJ0cv8c4Cc7SD"
            mapping="specific"
            term="Welcome to @giscus/react component!"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="noborder_gray"
            lang="en"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default GuestBook;
