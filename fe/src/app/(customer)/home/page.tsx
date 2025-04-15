import { apiService } from "@/services/api.service";
import { JSX } from "react";
import "./style.scss";

export default async function HomePage(): Promise<JSX.Element> {
  const data = await apiService.get("/posts");
  console.log(data);
  return (
    <div>
      <h1>Home page</h1>
      <hr />
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {data?.map(
              (item: any): JSX.Element => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
