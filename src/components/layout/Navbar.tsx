import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Solutions', href: '/services' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === href;
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl opacity-20"></div>
              <svg className="w-6 h-6 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground leading-tight">OncePay</span>
              <span className="text-xs text-muted-foreground font-medium -mt-1">Secure Payments</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent px-3 py-2 rounded-md",
                  isActive(item.href) ? "text-accent" : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="accent" asChild>
              <Link to="/contact">Get Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-accent",
                        isActive(item.href) ? "text-accent" : "text-foreground"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  <div className="pt-6 border-t border-card-border space-y-4">
                    <Button variant="outline" size="lg" className="w-full" asChild>
                      <Link to="/login" onClick={() => setIsOpen(false)}>
                        Login
                      </Link>
                    </Button>
                    <Button variant="accent" size="lg" className="w-full" asChild>
                      <Link to="/contact" onClick={() => setIsOpen(false)}>
                        Get Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}