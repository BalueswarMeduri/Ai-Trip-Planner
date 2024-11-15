import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateTrip from './create-trip';
import Header from './components/custom/Header';
import { Toaster } from './components/ui/toaster';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Viewtrip from './View-trip/[trip-id]';
import Mytrip from './my-trip';
import Footer16 from './components/custom/Footer';
import Footer from './components/custom/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/create-trip',
    element: <CreateTrip />,
  },
  {
    path: '/view-trip/:tripId', // Corrected the typo here
    element: <Viewtrip />,
  },
  {
    path: '/my-trip', // Corrected the typo here
    element: <Mytrip />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <Header />
      <Toaster />
      <RouterProvider router={router} />
      <Footer/>
    </GoogleOAuthProvider>
  </StrictMode>,
);
