var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This is a weather application build on React. I have build This
        for The Complete React Web App Developer Course.
      </p>
      <p>
        Here are some tools I used:
      </p>
      <ul>
        <li>
          <a href="http://facebook.github.io/react">React</a> - This is The
            JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used
            Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
