//base.html같은 느낌?
import Navbar from "../components/Navbar";
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <span>hello</span>
      <style jsx global>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: blue;
        }
      `}</style>
    </div>
  );
}
