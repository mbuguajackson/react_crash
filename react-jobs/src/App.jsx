import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import React from 'react'
import HomePage from './pages/HomePage.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import JobsPage from './pages/JobsPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import JobPage, {jobLoader} from './pages/JobPage.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} />
      
      {/* Catch-all route for 404 Not Found */}
      <Route path='*' element={<NotFoundPage />} />
      
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />


};

export default App;