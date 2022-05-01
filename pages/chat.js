import dynamic from "next/dynamic";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AblyChatComponent = dynamic(() => import("../components/AblyChat"), {
  ssr: false,
});

export default function Chat() {
  return (
    <>
      <Header />
      <main>
        <AblyChatComponent />
      </main>
      <Footer />
    </>
  );
}
