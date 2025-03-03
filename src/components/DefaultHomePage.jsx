const DefaultHomePage = ({onGetPostClick}) => {
  return (
    <>
      <center>
        <strong>
          <h1>No Posts Yet</h1>
          <h2>Want to generate Demo Posts From API ?</h2>
        </strong>
        <button type="button" className="btn btn-primary" onClick={onGetPostClick}>
          Generate Posts
        </button>
      </center>
    </>
  );
};

export default DefaultHomePage;