function Footer() {
  return (
    <>
      <footer className="absolute bottom-0 w-full text-white text-center p-4">
        <div className="fixed bottom-10 left-0 right-0 mx-auto max-w-max flex space-x-6 p-4 rounded-full shadow-lg">
          <a
            href="https://github.com/TanishTunwal"
            className="group w-12 h-12 bg-black rounded-full flex items-center justify-center hover:scale-125 transition-transform duration-300"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.385.6.11.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.304 3.493.997.108-.775.418-1.305.762-1.604-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.469-2.38 1.236-3.22-.123-.303-.536-1.527.117-3.18 0 0 1.008-.322 3.3 1.23a11.503 11.503 0 0 1 3-.405c1.02.005 2.046.137 3 .405 2.289-1.552 3.296-1.23 3.296-1.23.656 1.653.243 2.877.12 3.18.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.479 5.921.429.37.814 1.103.814 2.223v3.293c0 .32.192.694.8.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">GitHub account</span>
          </a>

          <a
            href="https://www.facebook.com/vanshika.tunwal.5"
            className="group w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:scale-125 transition-transform duration-300"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fillRule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Facebook page</span>
          </a>

          <a
            href="https://x.com/TanishVLR"
            className="group w-12 h-12 bg-black rounded-full flex items-center justify-center hover:scale-125 transition-transform duration-300"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M18.146 0H21.5l-7.455 8.516L24 24h-6.729l-5.646-7.607L5.08 24H1.724l7.99-9.124L0 0h6.937l5.14 7.356L18.146 0zm-2.08 21.798h2.023L6.367 2.091H4.2l11.866 19.707z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">X account</span>
          </a>

          <a
            href="https://in.linkedin.com/in/tanish-tunwal-165b21287"
            className="group w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center hover:scale-125 transition-transform duration-300"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M19.999 0h-16C1.791 0 0 1.791 0 4v16c0 2.209 1.791 4 4 4h16c2.209 0 4-1.791 4-4V4c0-2.209-1.791-4-4-4zm-11 20H5V9h4v11zm-2-12.269c-1.104 0-2-.896-2-2s.896-2 2-2c1.105 0 2 .896 2 2s-.895 2-2 2zM20 20h-4v-5.652c0-1.35-1.098-2.348-2.446-2.348s-2.554 1.098-2.554 2.348V20h-4V9h4v1.309c.727-.896 1.888-1.309 3.227-1.309 2.543 0 4.227 1.871 4.227 4.609V20z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">LinkedIn account</span>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;