import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRouter } from './PrivateRouter';
import {PublicRouter} from './PublicRouter';


export const AppRouter = () => {
  return (
    <Fragment>
        <Routes>
            <Route path="login/*" element={
                <PublicRouter>
                  <Routes>
                  <Route path="/*" element={<LoginPage />} />
                  </Routes>
                  {/* <LoginPage /> (OK TOO)*/} 
                </PublicRouter>
            } />

            <Route path="/*" element={
              <PrivateRouter>
                <HeroesRoutes />
              </PrivateRouter>} />
        </Routes>
    </Fragment>
  )
}
