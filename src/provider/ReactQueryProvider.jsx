import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

// queryClient  must be define out of function block
// This defination advantage is data not loss in component Rerenders 
const queryClient=new QueryClient();

function ReactQueryProvider({children}) {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}

export default ReactQueryProvider