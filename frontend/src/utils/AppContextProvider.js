import { BrowserRouter } from "react-router-dom";
import { CombineComponents } from './CombineComponents';
import { AuthProvider } from "../features/auth/context/AuthContext";

const providers = [
    BrowserRouter,
    AuthProvider
]
export const AppContextProvider = CombineComponents(...providers);