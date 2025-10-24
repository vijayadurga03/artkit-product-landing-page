# SketchMate: Portable Art Kit Landing Page

A responsive product landing page built with **React** to showcase the **SketchMate Deluxe Portable Art Kit** and its product line.

##  Features

* **Modular Component Structure:** The application is broken down into clean, reusable components like `Header`, `Home`, `Products`, `Features`, `Showcase`, `Contact`, and `Footer`.
* **Interactive Product Cards:** The `Products` section uses CSS for a **flip-card** effect to show key features on hover.
* **Product Showcase:** Details the contents and specifications of the main product.
* **Functional Calls-to-Action:** The `Home` component includes simple `onClick` functions for "Add to Cart" and "Buy Now".
* **Contact Form:** A basic contact form is included for user inquiries.
* **Styled with CSS:** Styling is managed through `App.css`, utilizing CSS Grid for layout in the `Products` and `Features` sections.

##  Getting Started

1.  Clone the repository:
    ```bash
    git clone [Your Repository URL]
    ```
2.  Navigate to the project directory:
    ```bash
    cd sketchmate-landing-page
    ```
3.  Install the dependencies (assuming you are using a standard React setup like Create React App):
    ```bash
    npm install
    ```
4.  Run the application:
    ```bash
    npm start
    ```
    The application will open in your browser, typically at `http://localhost:3000`.

##  Project Structure Highlights

The main components are located in the `src/` directory:

| File | Description |
| :--- | :--- |
| `App.js` | The main container component, assembling all page sections. |
| `index.js` | The entry point that renders the main `App` component. |
| `Home.js` | The main product hero section with price and CTAs. |
| `Products.js` | Displays the collection of SketchMate products with flip cards. |
| `Features.js` | Highlights the key selling points of the product. |
| `Showcase.js` | Lists the items included in the Deluxe kit. |
| `App.css` | All the styling for the page components. |

---
