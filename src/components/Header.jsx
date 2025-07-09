
const Header = () => {
  return (
    <div className="text-white text-center py-5" style={{
      backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <h1 className="fw-bold">¡Pizzería Mamma Mia!</h1>
      <p className="fs-5">¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </div>
  );
};

export default Header;
