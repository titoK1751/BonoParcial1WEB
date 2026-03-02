
import ProgressBar from "@/components/bars/progressBar";
import Navbar from "@/components/navbar/navbar";
import Switch from "@/components/darkmodeSwitch/switch";
import CounterTimer from "@/components/tictactoe/counterTimer";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl space-y-6 p-6">

      <section className="space-y-3 rounded-lg border p-4">
        <h2 className="text-xl font-semibold">Punto 1: Progress Bar</h2>
        <ProgressBar />
      </section>

      <section className="space-y-3 rounded-lg border p-4">
        <h2 className="text-xl font-semibold">Punto 2: Tic Tac Toe</h2>
        <CounterTimer />
      </section>

      <section className="space-y-3 rounded-lg border p-4">
        <h2 className="text-xl font-semibold">Punto 3: Navbar</h2>
        <div className="rounded-md border p-3">
          <Navbar />
        </div>
      </section>

      <section className="space-y-3 rounded-lg border p-4">
        <h2 className="text-xl font-semibold">Punto 4: Dark mode switch</h2>
        <Switch />
      </section>

      <section className="space-y-3 rounded-lg border p-4">
        <h2 className="text-xl font-semibold">Punto 5</h2>
        <p className="text-sm text-gray-500">Pendiente por desarrollar.</p>
      </section>

      <section className="space-y-3 rounded-lg border p-4">
        <h2 className="text-xl font-semibold">Punto 6</h2>
        <p className="text-sm text-gray-500">Pendiente por desarrollar.</p>
      </section>

      <section className="space-y-3 rounded-lg border p-4">
        <h2 className="text-xl font-semibold">Punto 7</h2>
        <p className="text-sm text-gray-500">Pendiente por desarrollar.</p>
      </section>
    </main>
  );
}
