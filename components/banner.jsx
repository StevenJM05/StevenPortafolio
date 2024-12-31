import Styles from "@/app/styles/banner.module.css";
import Image from "next/image";

export default function Banner() {
  return (
    <main id="main" className="d-flex align-items-center">
      <div className="container-fluid d-flex justify-content-between align-items-center px-5">
        <div className={Styles.content}>
          <p className={Styles.textPrimary}>Hi, my name is</p>
          <h1 className="display-1 fw-bold custom-title">Steven Martínez.</h1>
          <h2 className="display-4 custom-title">Desarrollador de Software.</h2>
          <p className={`lead ${Styles.lead}`}>
            Soy un desarrollador de software, me encanta crear apps para la web y aprender nuevas tecnologías.
          </p>
          <button className={`${Styles.button} ${Styles.alternative}`} id="btn-projects">
            Check out my work!
          </button>
        </div>

        <div className={Styles.photo}>
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
  );
}
