import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Form from "../components/Form";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="bg-stone-100 pt-16 mx-auto overflow-hidden sm:px-6 lg:px-8">
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
