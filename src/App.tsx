import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { authProvider } from "./authProvider";
import { TestPostList } from "./TestPostList";
import Header from "./Header";

export const App = () => (
  // <>
  //   <Resource name="posts" list={TestPostList} />
  // </>
  <>
    <Header />
    <Admin authProvider={authProvider}></Admin>
  </>
);
