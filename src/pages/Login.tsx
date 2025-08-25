import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, Mail, Lock, Shield, ArrowRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({ title: "Welcome back!", description: "Login successful." });
    navigate('/');
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Login Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-accent/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-3">
            <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">OncePay</span>
          </Link>
          <p className="text-white/80 mt-2">WhatsApp Payment Solutions</p>
        </div>

        {/* Login Card */}
        <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
          <CardHeader className="text-center pb-6">
            <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-white/80">Sign in to your account</p>
          </CardHeader>
          
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-accent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your password"
                    className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-accent"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-white/20 bg-white/10" />
                  <span className="text-sm text-white/80">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm text-accent-light hover:text-accent">
                  Forgot password?
                </Link>
              </div>

              <Button 
                type="submit" 
                variant="hero"
                size="lg"
                className="w-full group"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-white/20"></div>
              <span className="px-4 text-sm text-white/60">or</span>
              <div className="flex-1 border-t border-white/20"></div>
            </div>

            <div className="text-center">
              <p className="text-white/80">
                Don't have an account?{' '}
                <Link to="/contact" className="text-accent-light hover:text-accent font-medium">
                  Get Started
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-white/60 text-sm">
          <p>© 2024 OncePay. Secure WhatsApp Payments.</p>
        </div>
      </div>
    </div>
  );
}