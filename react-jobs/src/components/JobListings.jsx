import React from 'react'
import jobs from '../jobs.json'
import JobListing from './JobListing'
import { useState, useEffect } from 'react'
import Spinner from './Spinner'


const JobListings = ({ isHome = false }) => {
    // console.log(jobs);
    // create state
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    // useEffect to fetch jobs
    useEffect(() => {
        const fetchJobs = async () => {
            // limit jobs
            const apiUrl = isHome ? 'http://localhost:5000/jobs?_limit=3' : 'http://localhost:5000/jobs';
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            } finally {
                setLoading(false);
            }


        }
        fetchJobs();
    }, [])

    return (
        <div>
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        {isHome ? 'Recent Jobs' : 'Browse Jobs'}
                    </h2>

                    {loading ? (<Spinner loading={loading} />)
                        : (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {jobs.map((job) => (
                                    <JobListing key={job.id} job={job} />
                                ))}
                            </div>
                        )}


                </div>
            </section>
        </div>
    )
}

export default JobListings