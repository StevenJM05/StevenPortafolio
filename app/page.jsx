import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import styles from ".//home.css";
import Script from "next/script";

export default function HomePage() {
  return (
    <>
      {" "}
      <main id="main" className="d-flex align-items-center">
        <div className="container-fluid d-flex justify-content-between align-items-center px-5">
          <div className="content text-start">
            <p className="text-primary">Hi, my name is</p>
            <h1 className="display-1 fw-bold">Steven Martínez.</h1>
            <h2 className="display-4">Desarrollador de Software.</h2>
            <p className="lead">
              Soy un desarrollador de software, me encanta crear apps para la
              web y aprender nuevas tecnologías.
            </p>
            <button className="button alternative" id="btn-projects">
              Check out my work!
            </button>
          </div>

          <div className="photo">
            <Image
              src="/img/PERFIL.jpg"
              alt="Steven Martinez"
              width={250}
              height={250}
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </main>
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
      <Script
        src="/js/buttonEffects.js"
        strategy="afterInteractive"
      />
    </>
  );
}
