import React from 'react'
import { PageBody, Main } from '../CSS/homePageStyles'
import StudentList from './studentData'
const Home = () => {
  return (
    <PageBody>
        <Main>
          <StudentList />
        </Main>
    </PageBody>
  )
}

export default Home