const Contact = () => {
    return (
      <div style={{ padding: '120px 20px', color: '#eee', maxWidth: '600px', margin: 'auto' }}>
        <h1>Contact / Join Us</h1>
        <p>General inquiries form, join the team or volunteer, press/collab requests.</p>
        <form>
          <label>Name:<br />
            <input type="text" name="name" required style={{ width: '100%', marginBottom: '10px' }} />
          </label><br />
          <label>Email:<br />
            <input type="email" name="email" required style={{ width: '100%', marginBottom: '10px' }} />
          </label><br />
          <label>Message:<br />
            <textarea name="message" rows="5" required style={{ width: '100%', marginBottom: '10px' }}></textarea>
          </label><br />
          <button type="submit" style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px' }}>
            Send
          </button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  