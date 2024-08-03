import React, {createContext, useState, useContext, ReactNode} from 'react';

// Define the shape of the context value
interface LoadingContextType {
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
}

// Create the context with a default value of undefined
const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

// Create a custom hook to use the LoadingContext
export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

// Define props type for the LoadingProvider component
interface LoadingProviderProps {
  children: ReactNode;
}

// Create the provider component
export const LoadingProvider: React.FC<LoadingProviderProps> = ({children}) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{loading, setLoading}}>
      {children}
    </LoadingContext.Provider>
  );
};
