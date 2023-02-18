import { AnimateSharedLayout, motion } from 'framer-motion';
import React from 'react';

class EmailPage extends React.Component {
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
      event.target.className === 'outside-box'
      || event.target.className === 'read-more-button'
    ) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    const { isOpen } = this.state; // destructuring state assignment
    return (
      <section className="bg-primary-black overflow-hidden">
        <div
          className="outside-box"
          onClick={this.handleClickOutside}
          style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <AnimateSharedLayout>
            <motion.div
              className="inside-box"
              transition={{ layout: { duration: 1, type: 'spring' } }}
              layout
              onClick={(e) => {
                this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
                e.stopPropagation();
              }}
              style={{
                background: 'white',
                padding: '3rem 5rem',
                borderRadius: '1rem',
                boxShadow: '0px 10px 30px rgba(0,0,0,0.5)',
              }}
            >
              <motion.h2
                layout="position"
                style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
              >
                Site Under Construction ⚙️
              </motion.h2>
              {isOpen && ( // using the destructured variable
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ width: '35rem', padding: '3rem 5rem' }}
                >
                  <p style={{ paddingTop: '1rem', lineHeight: '150%' }}>
                    Welcome to my website! As you can see, the site is currently under construction. I am thrilled to share with you that I made this site in just one month, without any prior coding experience. While it is still a work in progress, I am excited to bring you more content and features in the future.
                  </p>
                  <p style={{ lineHeight: '150%' }}>
                    <br />
                    I want to assure you that this site will be worth the wait. I will be regularly adding more work to showcase my skills, and I will also be featuring testimonials from satisfied clients. <br /><br />Thank you for your patience and understanding as I continue to develop this site.
                  </p>
                  {/* <button
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
                  No problem.
                </button> */}
                </motion.div>
              )}
            </motion.div>
          </AnimateSharedLayout>
        </div>
      </section>
    );
  }
}

export default EmailPage;

