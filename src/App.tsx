import SurvivorForm from './components/survivors/CreateForm/Form';

import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <header>
        <h1>The Resident Zombie</h1>
        <QueryClientProvider client={queryClient}>
          <SurvivorForm />
        </QueryClientProvider>
      </header>
    </div>
  );
}

export default App;
