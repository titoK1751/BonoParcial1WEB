
import ProgressBar from "@/components/bars/progressBar";
import Navbar from "@/components/navbar/navbar";
import NavbarInverted from "@/components/navbar/navbarInverted";
import Switch from "@/components/darkmodeSwitch/switch";
import CounterTimer from "@/components/counter/counterTimer";
import TicTacToe from "@/components/tictactoe/ticTacToe";
import TextSlider from "@/components/slider/textSlider";
import TextAnalyzer from "@/components/textAnalyzer/textAnalyzer";


export default function Home() {
  return (
    <main className="mx-auto max-w-6xl space-y-6 p-6">

      <section className="space-y-3 rounded-lg border p-4">
        <h2 className="text-xl font-semibold">Punto 1: Progress Bar</h2>
        <ProgressBar />
      </section>

      <section className="space-y-3 rounded-lg border p-4">
        <h2 className="text-xl font-semibold">Punto 2: Contador</h2>
        <CounterTimer />
      </section>

      <section className="space-y-3 rounded-lg border p-4">
        <h2 className="text-xl font-semibold">Punto 3: Tic Tac Toe</h2>
        <TicTacToe />
      </section>

      <section className="space-y-3 rounded-lg border p-4">
        <h2 className="text-xl font-semibold">Punto 4: Dark mode switch</h2>
        <Switch />
      </section>

      <section className="space-y-3 rounded-lg border p-4">
        <h2 className="text-xl font-semibold">Punto 5: Navbar</h2>
        <div className="rounded-md border p-3">
          <Navbar />
        </div>
        <div className="rounded-md border p-3">
          <NavbarInverted />
        </div>
      </section>

      <section className="space-y-3 rounded-lg border p-4">
        <h2 className="text-xl font-semibold">Punto 6</h2>
        <TextAnalyzer />
      </section>

      <section className="space-y-3 rounded-lg border p-4">
        <h2 className="text-xl font-semibold">Punto 7</h2>
        <TextSlider />
      </section>
    </main>
  );
}
