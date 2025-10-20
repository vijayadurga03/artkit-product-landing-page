function Products() {
  return (
    <section id="products">
      <h1 class="products-heading">Explore the SketchMate Collection</h1>
      <div class="products">
        <div class="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                class="product1"
                src="/product1.png"
                alt="SketchMate Basic"
              />
              <h3>SketchMate Basic</h3>
            </div>
            <div class="flip-card-back">
              <h1>Key Features</h1>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                class="product1"
                src="/product2.png"
                alt="SketchMate Travel Pro"
              />

              <h3>SketchMate Travel Pro</h3>
            </div>
            <div class="flip-card-back">
              <h1>Key Features</h1>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                class="product3"
                src="/product3.png"
                alt="SketchMate Mixed-Media"
              />
              <h3>SketchMate Mixed-Media</h3>
            </div>
            <div class="flip-card-back">
              <h1>Key Features</h1>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                class="product3"
                src="/product4.png"
                alt="SketchMate Urban Artist"
              />
              <h3>SketchMate Urban Artist</h3>
            </div>
            <div class="flip-card-back">
              <h1>Key Features</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Products;
