import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './views/Home';
import Main from './views/Main';
import Projects from './views/Projects';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
