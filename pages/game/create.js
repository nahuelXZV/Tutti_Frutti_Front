import { Card, Paper, TextField } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Contenedor from "../../components/contenedor";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Contenedor>
      {/* card grande */}
      <div className="flex flex-col items-center w-full h-max">
        <div className="flex justify-center xl:w-3/4 my-32 ">
          <Card className="flex items-center  w-full h-max p-4 ">
            <div className="flex flex-col items-center w-full h-max">
              <div className="flex flex-col items-center w-full h-max">
                {/* imagen */}
                <div className="flex flex-col items-center w-full h-max">
                  <div className="flex flex-col items-center w-full h-max">
                    <div className="flex flex-col items-center w-full h-max">
                      <Image
                        className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full"
                        src="/images/fruit.jpg"
                        alt="Tutti Frutti"
                        width={150}
                        height={150}
                      />
                    </div>
                  </div>
                </div>
                {/* imput */}
                <div className="flex flex-col items-center w-full h-max">
                  <div className="flex flex-col items-center w-full h-max">
                    <div className="flex flex-col items-center w-full h-max p-4">
                      <TextField
                        id="standard-basic"
                        label="Nombre de jugador..."
                        variant="standard"
                        fullWidth
                        className="text-white"
                      />
                      <Link href="/">
                        <a className="mt-6 inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600">
                          <KeyboardBackspaceIcon fontSize="small" />
                          <span className="mx-2">Volver</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full h-max">
              <div className="flex flex-col items-center w-full h-max">
                <p>Nombre de la sala</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Contenedor>
  );
}
