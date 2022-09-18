import HeadT from "./Head";

// Contenedor de la aplicación
export default function Contenedor({ children }) {
  return (
    <>
      <HeadT />
      <section className="bg-gray-900 dark:bg-gray-900 h-screen ">
        {children}
      </section>
    </>
  );
}
