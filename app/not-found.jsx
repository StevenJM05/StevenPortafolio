import Link from "next/link";

export default function NotFound() {
    return <section>
        <h1>404: Page Not Found</h1>
        <Link href="/">Volver</Link>
    </section>
}