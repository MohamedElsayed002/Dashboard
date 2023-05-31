import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'react-toastify/dist/ReactToastify.css';
import {QueryClientProvider , QueryClient} from '@tanstack/react-query'

const queryClient = new QueryClient()


import './index.css'
import { AppProvider } from './context/context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>

    <AppProvider>
        <App/>
    </AppProvider>
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
