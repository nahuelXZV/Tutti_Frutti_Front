import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LoginIcon from "@mui/icons-material/Login";
import Image from "next/image";
import Link from "next/link";
import Contenedor from "../components/contenedor";

export default function Home() {
  return (
    <Contenedor>
      <div className="flex flex-col items-center w-full h-max">
        <div className="flex justify-center xl:w-1/2 m-4 mt-16">
          <Image
            className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full"
            src="/images/fruit.jpg"
            alt="Tutti Frutti"
            width={300}
            height={300}
          />
        </div>
        <div className="flex justify-center xl:w-1/2 m-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
            Play Tutti Frutti Online
          </h2>
        </div>
        <div className="flex justify-center xl:w-1/2 m-4">
          <div className="mt-6 sm:-mx-2">
            <div className="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2">
              <Link href="/game/create">
                <a className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto">
                  <SportsEsportsIcon fontSize="small" />
                  <span className="mx-2">Juega Anonimamente</span>
                </a>
              </Link>
            </div>

            <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0">
              <Link href="/login">
                <a className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600">
                  <LoginIcon fontSize="small" />
                  <span className="mx-2">Inicia Sesion</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Contenedor>
  );
}
