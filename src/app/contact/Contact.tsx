'use client';

import { profile } from "../constants";

const Contact: React.FC = () => {
  return (

    <div className="space-y-4" >
      <div className="flex items-center space-x-3">
        <svg className="w-6 h-6" fill="none" stroke="#f5f5f7"
          viewBox="0 0 24 24">
          <path
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
        </svg>
        <a href={"mailto:" + profile.email} className="hover:underline">{profile.email}</a>
      </div>

      <div className="flex items-center space-x-3">
        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M3 5a2 2 0 012-2h1.28a1 1 0 01.95.68l1.18 3.54a1 1 0 01-.2.92L7.5 10.5a11.05 11.05 0 005 5l2.36-1.71a1 1 0 01.92-.2l3.54 1.18a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.16 21 3 14.84 3 7V5z" />
        </svg>
        <span>{profile.phone}</span>
      </div>

      <div className="flex items-center space-x-3">
        <svg className="w-6 h-6 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.8c0-2.5 1.5-3.89 3.78-3.89 1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.25 0-1.64.78-1.64 1.57v1.88h2.79l-.45 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z" />
        </svg>
        <a href={profile.facebook} target="_blank"
          className="hover:underline">{profile.facebook}</a>
      </div>

      <div className="flex items-center space-x-3">
        <svg className="w-6 h-6 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M4.98 3C3.33 3 2 4.34 2 6v12c0 1.66 1.33 3 2.98 3h14.04c1.65 0 2.98-1.34 2.98-3V6c0-1.66-1.33-3-2.98-3H4.98zM8.5 17H6V10h2.5v7zm-1.25-8.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10.25 8.25h-2.5v-3.5c0-.84-.68-1.5-1.5-1.5S12 12.41 12 13.25V17H9.5V10H12v1.09c.46-.66 1.19-1.09 2-1.09 1.66 0 3 1.34 3 3V17z" />
        </svg>
        <a href={profile.linkedin} target="_blank"
          className="hover:underline">{profile.linkedin}</a>
      </div>

      <div className="flex items-center space-x-3">
        <svg className="w-6 h-6" fill="#f5f5f7" viewBox="0 0 24 24">
          <path
            d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.35-3.37-1.35-.46-1.19-1.12-1.5-1.12-1.5-.92-.64.07-.63.07-.63 1.02.07 1.56 1.07 1.56 1.07.91 1.58 2.38 1.12 2.96.86.09-.67.36-1.12.66-1.38-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.38-2.03 1-2.74-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.73 1.02a9.25 9.25 0 0 1 4.96 0c1.9-1.29 2.73-1.02 2.73-1.02.54 1.4.2 2.44.1 2.7.62.71 1 1.62 1 2.74 0 3.92-2.34 4.78-4.57 5.03.38.34.72 1 .72 2.02v2.99c0 .27.18.58.69.48A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
        </svg>
        <a href={profile.github} target="_blank"
          className="hover:underline">{profile.github}</a>
      </div>


    </div>

  )
}

export default Contact