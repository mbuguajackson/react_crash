import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import React from 'react'
import HomePage from './pages/HomePage.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import JobsPage from './pages/JobsPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import JobPage, { jobLoader } from './pages/JobPage.jsx'
import AddJobPage from './pages/AddJobPage.jsx'
import EditJobPage from './pages/EditJobPage.jsx'



const App = () => {

  //add new job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)

    });
    return;
  };
  // Delete job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    });
    return;
  };

  // Update job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)

    });
    return;
  };



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />

        {/* Catch-all route for 404 Not Found */}
        <Route path='*' element={<NotFoundPage />} />

      </Route>
    )
  );
  return <RouterProvider router={router} />


};

export default App;