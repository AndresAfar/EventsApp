import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-[#0f172a] rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 flex justify-center">
            <span className="text-base text-gray-100 sm:text-center dark:text-gray-400">
                © 2023 <a href="https://flowbite.com/" className="hover:underline">EventsView</a>. All Rights Reserved.
            </span>
        </div>
    </footer>
  );
}
