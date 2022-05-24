import './App.css';
import GitHubCalendar from 'github-calendar';

GitHubCalendar(".calendar", "KateLockhart", {
  responsive: true,
  tooltips: true
});

function App() {
  return (
    <div className="App">
      <div className="calendar"></div>
    </div>
  );
}

export default App;