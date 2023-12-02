import NavBar from "@/components/layout/header/NavBar";
import BasicCarousel from "@/components/layout/carrousel/BasicCarrousel";
import BasicCard from "@/components/layout/leiloes_online/card";
import Depoimentos from "@/components/layout/depoimentos/Depoimentos";
import { Footer } from "@/components/layout/footer/Footer";
import BasicCard2 from "@/components/layout/leiloes_online/card2";

export default function Home() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <section className="h-72 w-4/6 flex justify-center items-center mb-2 mx-auto gap-3">
          <BasicCarousel />
      </section>

      <div className="bg-blue-700 flex justify-center py-2 justify-between w-4/6 mx-auto text-center">
        <section className="flex justify-center align-center text-white m-2 text-center ">LEILÕES ONLINE</section>
      </div>
      <div className="flex justify-center bg-pink-500 py-1 w-4/6 mx-auto grid gap-4 grid-cols-2"></div>
      <section className="flex flex-wrap justify-center space-x-9 w-4/6 mt-2 mx-auto">
        <BasicCard />
        <BasicCard2 />
      </section>
      <button className="p-2 mt-4 mb-3 mx-auto flex h-min items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-cyan-700 border border-transparent enabled:hover:bg-cyan-800 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800 rounded-lg focus:ring-2">
          Ver Todos
      </button>
      <Depoimentos/>
      <Footer/>
    </div>
  );
}
