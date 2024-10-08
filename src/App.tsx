import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
const Card = React.lazy(() => import("./components/Card"));
const Create = React.lazy(() => import("./components/Create"));
const Destinations = React.lazy(() => import("./components/Destinations"));
const Details = React.lazy(() => import("./components/Details"));
const NotFound = React.lazy(() => import("./components/NotFound"));

function App() {
  const queryClient = new QueryClient();

  return (
    <Suspense fallback={<p>Loading component...</p>}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/hotels/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Card />} />
          <Route path="/destinations" element={<Destinations />} />
        </Routes>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
