
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';


createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId="273168034972-3st5v4ri8e7a4ci51edq6n40f098i05r.apps.googleusercontent.com">
    <BrowserRouter>
    <App />
       </BrowserRouter>
 </GoogleOAuthProvider>
)
