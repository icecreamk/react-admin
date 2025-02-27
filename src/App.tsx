import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { routers } from './router'
import './App.css'

function App() {

  return (
    <ConfigProvider>
      <RouterProvider router={createBrowserRouter(routers)} />
    </ConfigProvider>
  )
}

export default App

