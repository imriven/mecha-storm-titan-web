const Team = () => {
    return (
      <div style={{ padding: '120px 20px', color: '#eee', maxWidth: '900px', margin: 'auto' }}>
        <h1>The Team</h1>
        <section>
          <h2>Roster</h2>
          <p>Profiles of players, roles, bios, and photos.</p>
        </section>
        <section>
          <h2>Leadership & Core Staff</h2>
          <p>Meet Rock, Major Hurricane, and the others.</p>
        </section>
        <section>
          <h2>Past Members / Alumni</h2>
          <p>Optional section for those who’ve been part of MST’s history.</p>
        </section>
        <section>
          <h2>Wanna Join Us?</h2>
          <p><a href="/contact" style={{ color: '#4caf50' }}>Contact us</a> or fill out the join form!</p>
        </section>
      </div>
    );
  };
  
  export default Team;
  