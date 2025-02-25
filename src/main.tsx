import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter, Route, Routes } from 'react-router-dom'

function Test() {
  return <div>test</div>
}

function NotFound() {
  return <div>not found</div>
}

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
)
