import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'
import { ChakraProvider } from '@chakra-ui/react'
import ContextAuth from './Auth/ContextAuth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <ContextAuth><RouterProvider router={router}/></ContextAuth>
    </ChakraProvider>
  </React.StrictMode>,
)
