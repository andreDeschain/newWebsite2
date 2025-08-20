import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner, toast } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";

// This is the critical change. We are declaring a global type
// for TypeScript to understand that `window.sonnerToast` exists.
declare global {
  interface Window {
    sonnerToast: typeof toast;
  }
}

const queryClient = new QueryClient();

// This line exposes the toast function to the global scope.
if (typeof window !== 'undefined') {
  window.sonnerToast = toast;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </QueryClientProvider>
);

export default App;
