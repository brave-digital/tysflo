
import ReactGA from 'react-ga';
ReactGA.initialize('UA-137351697-1');

export function RunGAPageView() {
    var path = window.location.pathname + window.location.search + window.location.hash;
    ReactGA.pageview(path);
}
