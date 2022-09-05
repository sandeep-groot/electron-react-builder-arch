import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './scss/bootstrap.scss';
import { ThemeProvider } from './hooks/useThemeContext';
import { store } from './store';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <ThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
