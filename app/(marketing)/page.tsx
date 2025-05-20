import { Button } from "@/components/ui/button";
import peopleImg from "@/public/people.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="text-center">
      <h1 className="font-display mx-auto w-xl text-5xl font-black">
        Diga adeus às longas buscas para uma vaga
      </h1>
      <Link href="/vagas">
        <Button className="mt-12 cursor-pointer" variant="outline">
          Busque uma Vaga
        </Button>
      </Link>
      <Image
        src={peopleImg}
        alt="Ilustaração de pessoas trabalhando"
        className="mx-auto mt-12"
      />
    </section>
  );
}
