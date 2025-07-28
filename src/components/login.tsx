import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import CamtechLogo from '@/images/Camtech.png';

export default function login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleLogin = () => {
    console.log('Login attempted with:', { email, password, rememberMe });
    // Add your login logic here
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    // Add your forgot password logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 to-blue-900 flex overflow-hidden">
      {/* Left side - University Logo */}
      <div className="flex-1 flex items-center justify-center bg-gray-200">
        <div className="text-center">
          <div className="w-48 h-48 mx-auto mb-4 flex items-center justify-center">
            <img
              src={CamtechLogo}
              alt="Cambodia University of Technology and Science Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex-1 flex items-center justify-center bg-blue-900 p-8">
        <div className="w-full max-w-md">
          <div className="bg-gray-100 rounded-lg p-8 shadow-xl">
            <h2
              className="text-2xl font-semibold mb-6 text-center"
              style={{ color: '#003665' }}
            >
              Welcome!
            </h2>


            <div className="space-y-4">
              {/* Email Field */}
              <div className="flex flex-col w-full gap-1">
                <Label htmlFor="email" className="text-gray-700 text-base font-medium mr-90">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full bg-white border-gray-300 px-3"
                  placeholder='m@example.com'
                />
              </div>

              {/* Password Field */}
              <div className="flex flex-col w-full gap-1">
                <Label htmlFor="password" className="text-gray-700 text-base font-medium mr-90">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full bg-white border-gray-300 px-3"
                  placeholder='Password'
                />
              </div>

              {/* Remember Me + Forgot Password */}
              <div className="flex items-center justify-between w-full mt-1">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    className=" border-gray-400 data-[state=checked]:bg-[#003665] data-[state=checked]:border-[#003665]"
                  />
                  <Label htmlFor="remember" className="text-sm text-gray-700">Remember Me</Label>
                </div>

                <button
                  onClick={handleForgotPassword}
                  className="text-sm text-gray-600 hover:text-gray-800 underline"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login Button */}
              <Button
                onClick={handleLogin}
                className="w-full bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-md font-medium"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
