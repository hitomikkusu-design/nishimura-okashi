import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Story from "./pages/Story";
import Products from "./pages/Products";
import Access from "./pages/Access";
import Contact from "./pages/Contact";

// Hash-based routing (/#/about) so client-side routes work on GitHub Pages,
// which has no server-side rewrite to fall back to index.html for /about.
function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/story"} component={Story} />
        <Route path={"/products"} component={Products} />
        <Route path={"/access"} component={Access} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
