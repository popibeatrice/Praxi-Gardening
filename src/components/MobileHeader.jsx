import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const links = [
  {
    name: "Design&Install",
    href: "/design&install",
  },
  {
    name: "Maintenance",
    href: "/maintenance",
  },
  {
    name: "Gallery",
    href: "/photos",
  },
  {
    name: "Softscaping",
    href: "/softscaping",
  },
  {
    name: "Hardscaping",
    href: "/hardscaping",
  },
  {
    name: "Contact",
    href: "/contactform",
  },
];

const menu = {
  visible: {
    x: 0,
    transition: {
      ease: [0.76, 0, 0.24, 1],
      when: "beforeChildren",
      delayChildren: 0.5,
      staggerChildren: 1,
      duration: 0.5,
    },
  },
  hidden: {
    x: "100%",
    transition: {
      ease: [0.76, 0, 0.24, 1],
      when: "afterChildren",
      delay: 0.5,
      staggerChildren: 1,
      duration: 0.5,
    },
  },
};

const wrap = {
  visible: { opacity: 1, transition: { duration: 0.75, delay: 0.3 } },
  hidden: { opacity: 0, transition: { duration: 0.75, delay: -0.1 } },
};

const title = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const line = {
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  hidden: { scaleX: 0, opacity: 0, x: "-50%", transition: { duration: 1 } },
};

const container = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      duration: 0.3,
    },
  },
  hidden: { transition: { staggerChildren: 0.1, duration: 0.3 } },
};

const linky = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.76, 0, 0.24, 1],
      duration: 0.7,
    },
  },
  hidden: {
    opacity: 0,
    x: "-50%",
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
};

function MobileHeader({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleResize = (event) => {
      if (event.target.innerWidth > 1024) {
        if (isOpen === true) {
          setIsOpen(false);
          navRef.current.classList.add("hidden");
        }
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const toggleDialog = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 flex w-screen items-center justify-between px-4 py-6 min-[400px]:px-6 lg:hidden">
      <a href="/" className="flex items-center justify-center">
        {children}
      </a>
      <button
        type="button"
        onClick={toggleDialog}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-white min-[400px]:h-14 min-[400px]:w-14"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-[60%] w-[60%]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
        <span className="sr-only">Open Navigation</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <Dialog
            ref={navRef}
            as="div"
            static
            open={isOpen}
            className=""
            onClose={toggleDialog}
          >
            <motion.div
              variants={wrap}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed inset-0 backdrop-blur-[3px]"
              aria-hidden="true"
            />
            <Dialog.Panel
              as={motion.div}
              variants={menu}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed right-0 top-0 z-50 flex h-screen w-full flex-col items-center justify-start gap-[calc(60px_+_5vh)] overflow-y-auto overflow-x-hidden bg-orange-600 px-4 pt-[100px] text-white min-[400px]:max-w-[275px] min-[400px]:px-6 sm:max-w-[325px] md:max-w-[400px]"
            >
              <button
                type="button"
                onClick={toggleDialog}
                className="fixed right-4 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-white min-[320px]:h-14 min-[320px]:w-14 min-[400px]:right-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-[60%] w-[60%]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>

                <span className="sr-only">Close Navigation</span>
              </button>
              <motion.div className="relative">
                <motion.div className="overflow-hidden">
                  <Dialog.Title
                    as={motion.span}
                    variants={title}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="text-xl uppercase sm:text-2xl "
                  >
                    Navigation
                  </Dialog.Title>
                </motion.div>
                <motion.div
                  variants={line}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="absolute -bottom-0.5 left-1/2 h-[1.5px] w-[60%] -translate-x-1/2 rounded bg-white sm:h-[1.75px]"
                ></motion.div>
              </motion.div>
              <nav className="mb-14 flex items-center justify-center min-[400px]:ml-2 min-[400px]:self-start">
                <motion.ul
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="flex flex-col items-center justify-center gap-5 min-[400px]:items-start sm:gap-6 md:gap-8"
                >
                  {links.map((link, index) => (
                    <motion.li variants={linky} key={link.name}>
                      <a
                        href={link.href}
                        className="text-center text-3xl font-semibold min-[400px]:text-start md:text-4xl"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>
            </Dialog.Panel>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
}

export default MobileHeader;
