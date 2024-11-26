const NodeNotes = () => {
  return (
    <div>
      <div>
        <div>
          <h1>NodeJS Notes </h1>
          <div>
            <h2>Use of __filename and __dirname in node.js</h2>
            <p>
              In NodeJS __filename and __dirname are two globally available
              variable that provide usful information about the current module's
              file path: <br />
              <b>__filename : </b>
              <br />
              -- The __filename variable return the absolute path of the file
              that is currently being executed <br />
              -- It includes the full path and __filename, which can be useful
              when youo want to know the exact location of a file
              <b>--dirname : </b>
              <br />
              -- The __dirname variable returns the absolute path of the
              directory containing the current executing file <br />
              -- This is useful when you need to work with relative paths to
              access files or directories within the same folder.
            </p>
            <h2>Middleware</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
