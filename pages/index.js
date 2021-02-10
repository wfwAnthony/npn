import { Nav } from "../components/Nav";

export const Button = ({ label }) => (
  <button className="px-6 py-2 m-1 text-sm font-semibold text-white bg-purple-500 rounded-sm hover:bg-purple-700">
    {label}
  </button>
);

export default function Home() {
  return (
    <div>
      <Nav></Nav>
      <div className="container mx-auto">
        <div className="flex items-center justify-between pt-16">
          <h1 className="text-2xl font-bold">Seasons</h1>
          <Button label="+ Create Season"></Button>
        </div>
        <table class="table-fixed my-4 w-full">
          <thead>
            <tr>
              <th className="w-1/2 p-2 border">Name</th>
              <th className="w-1/4 p-2 border">Teams</th>
              <th className="w-1/4 p-2 border">Start Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="px-2 py-2 text-center border">Spring '21</td>
              <td className="px-2 py-2 text-center border">6</td>
              <td className="px-2 py-2 text-center border">January 4 2021</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
