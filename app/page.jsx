import Script from "next/script";
import Banner from "@/components/banner";
import Carrousel from "../components/carrousel";

export default function HomePage() {
  return (
    <>
      {" "}
      <Banner/>
      <section id="proyectos" className="py-5">
        <div className="container">
          <h2 className="text-primary mb-5">Mis Proyectos</h2>
          <div className="row">
            {[
              {
                title: "Página Web",
                description: "Página Web para Escuela de Música y Artes",
              },
              {
                title: "Aplicación Web",
                description:
                  "Aplicación Web para la venta de productos y gestión de inventario",
              },
              {
                title: "Aplicación Móvil",
                description: "Aplicación Móvil de contratistas y servicios",
              },
            ].map((project, index) => (
              <div className="col-md-4" key={index}>
                <div className="card">
                  <div
                    className="card-head"
                    style={{ backgroundColor: "blueviolet" }}
                  >
                    {project.title}
                  </div>
                  <div className="card-body">{project.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Carrousel />
      <Script
        src="/js/buttonEffects.js"
        strategy="afterInteractive"
      />
    </>
  );
}
