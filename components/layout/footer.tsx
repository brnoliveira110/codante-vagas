import React from "react";
import Logo from "./logo";
import { FaGithub, FaInstagram, FaMailBulk } from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex bg-black py-4 text-gray-400">
      <div className="mx-auto flex  w-full max-w-5xl items-center justify-between py-4">
        <div className="w-sm">
          <Logo bg="dark" />
          <p className="mt-3 text-sm font-light">
            O CodanteVagas conecta candidatos a empregos ideais, oferecendo
            funcionalidades intuitivas para busca e gerenciamento de vagas.
          </p>
        </div>
        <div className="flex items-center">
          <ul className="flex items-center gap-3 transition-colors">
            <li className="transition-colors hover:text-blue-400">
              <Link href="https://www.instagram.com/">
                <FaInstagram />
              </Link>
            </li>
            <li className="transition-colors hover:text-blue-400">
              <Link href="https://www.github.com/">
                <FaGithub />
              </Link>
            </li>
            <li className="transition-colors hover:text-blue-400">
              <Link href="https://www.github.com/">
                <FaMailBulk />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
