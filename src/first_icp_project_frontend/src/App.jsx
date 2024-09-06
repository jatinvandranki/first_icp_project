import { useState } from 'react';

function Portfolio() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    setGreeting(`Hello, ${name}! Welcome to my portfolio.`);
  }

  return (
    <div style={styles.pageContainer}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.title}>Vandranki Jatin</h1>
        <p style={styles.subtitle}>Aspiring AI/ML Engineer | CSE Student</p>
      </header>

      {/* About Me Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <p style={styles.text}>
          I am a Computer Science and Engineering student specializing in AI/ML. 
          Passionate about solving problems using technology and building intelligent 
          systems that can make a real difference.
        </p>
      </section>

      {/* Projects Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Projects</h2>
        <div style={styles.projectsGrid}>
          <div style={styles.projectCard}>
            <h3 style={styles.projectTitle}>Project 1: AI Chatbot</h3>
            <p style={styles.projectDescription}>
              Developed an AI chatbot using natural language processing to assist users 
              in answering questions intelligently.
            </p>
          </div>
          <div style={styles.projectCard}>
            <h3 style={styles.projectTitle}>Project 2: Computer Vision</h3>
            <p style={styles.projectDescription}>
              Built a computer vision system to detect and classify objects in real-time 
              using deep learning algorithms.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Skills</h2>
        <ul style={styles.skillsList}>
          <li style={styles.skillItem}>Python</li>
          <li style={styles.skillItem}>Machine Learning</li>
          <li style={styles.skillItem}>React.js</li>
          <li style={styles.skillItem}>TensorFlow</li>
          <li style={styles.skillItem}>Natural Language Processing</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact Me</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            id="name"
            alt="Name"
            type="text"
            placeholder="Your Name"
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Say Hi!
          </button>
        </form>
        <section id="greeting" style={styles.greeting}>
          {greeting}
        </section>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; 2024 Vandranki Jatin. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  pageContainer: {
    fontFamily: "'Poppins', sans-serif",
    background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '3em',
    fontWeight: 700,
  },
  subtitle: {
    fontSize: '1.5em',
    fontStyle: 'italic',
    marginTop: '10px',
  },
  section: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '15px',
    padding: '30px',
    marginBottom: '30px',
    width: '100%',
    maxWidth: '800px',
  },
  sectionTitle: {
    fontSize: '2em',
    marginBottom: '15px',
  },
  text: {
    fontSize: '1.2em',
    lineHeight: '1.6em',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  projectCard: {
    background: 'rgba(0, 0, 0, 0.1)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
  },
  projectTitle: {
    fontSize: '1.5em',
    marginBottom: '10px',
  },
  projectDescription: {
    fontSize: '1.1em',
  },
  skillsList: {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
    padding: 0,
  },
  skillItem: {
    fontSize: '1.2em',
    background: 'rgba(255, 255, 255, 0.2)',
    padding: '10px 20px',
    borderRadius: '20px',
  },
  form: {
    marginTop: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '1em',
    border: 'none',
    borderRadius: '30px',
    width: '80%',
    marginBottom: '20px',
    background: 'rgba(255, 255, 255, 0.8)',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  },
  button: {
    padding: '10px 30px',
    fontSize: '1.2em',
    fontWeight: 600,
    border: 'none',
    borderRadius: '30px',
    backgroundColor: '#0077b6',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  greeting: {
    marginTop: '20px',
    fontSize: '1.5em',
    color: '#0077b6',
  },
  footer: {
    marginTop: '40px',
    fontSize: '0.9em',
  },
};

export default Portfolio;
