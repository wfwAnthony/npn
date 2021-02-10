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
        <table class="table-fixed">
          <thead>
            <tr>
              <th className="w-1/2">Name</th>
              <th className="w-1/4">Teams</th>
              <th className="w-1/4">Start Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Intro to CSS</td>
              <td>Adam</td>
              <td>858</td>
            </tr>
            <tr class="bg-emerald-200">
              <td>
                A Long and Winding Tour of the History of UI Frameworks and
                Tools and the Impact on Design
              </td>
              <td>Adam</td>
              <td>112</td>
            </tr>
            <tr>
              <td>Intro to JavaScript</td>
              <td>Chris</td>
              <td>1,280</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
