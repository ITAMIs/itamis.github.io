import { AnimateSharedLayout, motion } from "framer-motion";
import React from "react";


class email_page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleReadMoreClick = this.handleReadMoreClick.bind(this);
  }

  handleClickOutside(event) {
    if (
      event.target.className === "outside-box" ||
      event.target.className === "read-more-button"
    ) {
      this.setState({ isOpen: false });
    }
  }

  handleReadMoreClick(e) {
    e.stopPropagation();
    // Code to open the link
    window.open("https://www.example.com", "_blank");
  }

  render() {
    return (
      <div
        className="outside-box"
        onClick={this.handleClickOutside}
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AnimateSharedLayout>
          <motion.div
            className="inside-box"
            transition={{ layout: { duration: 1, type: "spring" } }}
            layout
            onClick={(e) => {
              this.setState({ isOpen: !this.state.isOpen });
              e.stopPropagation();
            }}
            style={{
              background: "white",
              padding: "3rem 5rem",
              borderRadius: "1rem",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            <motion.h2
              layout="position"
              style={{ fontSize: "1.5rem", fontWeight: "bold" }}
            >
              Framer Motion 🚀
            </motion.h2>
            {this.state.isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ width: "35rem", padding: "3rem 5rem" }}
              >
                <p style={{ paddingTop: "1rem", lineHeight: "150%" }}>
                  Proident do culpa velit Lorem commodo est dolore minim nulla.
                  Eiusmod dolor ullamco sunt est. Quis eu ametwho proident ex
                  aliquip officia officia consectetur commodo. Lorem aliqua
                  veniam sit anim elit fugiat.
                </p>
                <p style={{ lineHeight: "150%" }}>
                  Voluptate reprehenderit aliquip velit eiusmod.
                </p>
                <button
                  className="read-more-button"
                  style={{
                    background: "teal",
                    color: "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                    fontWeight: "bold",
                  }}
                  onClick={this.handleReadMoreClick}
                >
                  Read More.
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimateSharedLayout>
      </div>
    );
  }
}

export default email_page;
