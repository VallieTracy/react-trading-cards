'use strict';

function Homepage() {
  return (
  <React.Fragment>
    Welcome!
    <div>
    <a href="/cards">Cards!</a>
    </div>
    <div>
      <img src="/static/img/balloonicorn.jpg"></img>
    </div>
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
