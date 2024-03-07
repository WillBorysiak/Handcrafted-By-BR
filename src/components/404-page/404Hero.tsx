import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import Paragraph from "../typography/Paragraph";

const ErrorHero = () => {
  return (
    <div className="flex h-screen flex-col bg-primary lg:relative">
      <div className="flex flex-grow flex-col">
        <main className="flex flex-grow flex-col bg-primary">
          <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col px-4 sm:px-6 lg:px-8">
            <div className="my-auto flex-shrink-0 py-16 sm:py-32">
              <Paragraph text="404 Page" />
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Page not found
              </h1>
              <p className="mt-2 text-base text-gray-500">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="mt-6">
                <Link
                  to="/"
                  className="text-base font-medium text-secondary hover:text-gray-500"
                >
                  Go back home<span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-1/2">
        <StaticImage
          className="absolute inset-0 h-full w-full object-cover"
          src="../../assets/images/water.jpg"
          alt="Chatsworth Hall, Derbyshire"
        />
      </div>
    </div>
  );
};

export default ErrorHero;
