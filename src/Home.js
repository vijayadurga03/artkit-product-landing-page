function Home() {
  function handleClick() {
    alert("Added to Cart");
  }
  function handleClick1() {
    alert("Buy Now");
  }
  return (
    <section id="section">
      <img
        class="img"
        src="/logo.png"
        alt="SketchMate Deluxe Portable Art Kit"
      />
      <div>
        <h1 class="main-heading">SketchMate Deluxe</h1>
        <h1 class="main-heading1"> Portable Art Kit</h1>
        <p class="price">
          <del>$119.00</del>&emsp;<span>$99.00</span>
        </p>
        <div class="rating">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <span>(128 reviews)</span>
        </div>
        <div>
          <button id="button" onClick={handleClick}>
            <i class="fa-solid fa-cart-shopping"></i> Add to Cart
          </button>
          <button id="button" onClick={handleClick1}>
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}
export default Home;
