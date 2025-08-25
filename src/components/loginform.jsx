import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Facebook, Instagram, Twitter, ArrowLeft, Check } from "lucide-react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [currentView, setCurrentView] = useState("login"); // 'login', 'forgot'
  const [resetEmailSent, setResetEmailSent] = useState(false);

  const handleSubmit = () => {
    console.log("Login attempt:", { email, password, rememberMe });
    alert("Login functionality would be implemented here!");
  };

  const handleForgotPassword = () => {
    if (!email) {
      alert("Please enter your email address first");
      return;
    }
    console.log("Password reset for:", email);
    setResetEmailSent(true);
    setTimeout(() => {
      setResetEmailSent(false);
      setCurrentView("login");
    }, 3000);
  };

  const handleSocialLogin = (platform) => {
    console.log(`${platform} login clicked`);
    alert(`${platform} login would redirect to ${platform} OAuth here!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute top-20 left-20 w-32 h-32 sm:w-72 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 sm:w-96 sm:h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-80 sm:h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left side - Welcome content */}
        <div className="flex-1 text-white text-center lg:text-left lg:pr-12 order-1 lg:order-1">
          <div className="mb-6 lg:mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
              Welcome
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Back</span>
            </h1>
            <p className="text-purple-200 text-base lg:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 hidden lg:block">
              Manage your email campaigns with ease. Our platform provides powerful tools for creating, sending, and tracking your email marketing success.
            </p>
          </div>

          {/* Social media icons */}
          <div className="hidden lg:flex space-x-4 justify-center lg:justify-start">
            <a
              href="https://facebook.com/usernameKamu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 lg:w-12 lg:h-12 bg-white bg-opacity-10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all duration-300 cursor-pointer group"
            >
              <Facebook className="w-4 h-4 lg:w-5 lg:h-5 text-purple-200 group-hover:text-white transition-colors" />
            </a>

            <a
              href="https://twitter.com/usernameKamu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 lg:w-12 lg:h-12 bg-white bg-opacity-10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all duration-300 cursor-pointer group"
            >
              <Twitter className="w-4 h-4 lg:w-5 lg:h-5 text-purple-200 group-hover:text-white transition-colors" />
            </a>

            <a
              href="https://instagram.com/alsandiadtya_"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 lg:w-12 lg:h-12 bg-white bg-opacity-10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all duration-300 cursor-pointer group"
            >
              <Instagram className="w-4 h-4 lg:w-5 lg:h-5 text-purple-200 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-96 order-2 lg:order-2">
          <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="mb-6 lg:mb-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 lg:w-8 lg:h-8 text-purple-600 mr-2" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">kirim.email</h2>
              </div>
              {currentView === "login" && (
                <>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Sign In</h3>
                  <p className="text-sm sm:text-base text-gray-600">Access your email marketing dashboard</p>
                </>
              )}
              {currentView === "forgot" && (
                <>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Reset Password</h3>
                  <p className="text-sm sm:text-base text-gray-600">Enter your email to receive reset instructions</p>
                </>
              )}
            </div>

            {/* Success Messages */}
            {resetEmailSent && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center text-sm">
                <Check className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>Password reset email sent! Check your inbox.</span>
              </div>
            )}

            {/* LOGIN FORM */}
            {currentView === "login" && (
              <div className="space-y-4 sm:space-y-6">
                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white text-sm sm:text-base"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* Password field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white text-sm sm:text-base"
                      placeholder="Enter your password"
                      required
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Remember me checkbox */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2" />
                    <span className="ml-2 text-xs sm:text-sm text-gray-700">Remember Me</span>
                  </label>
                  <button onClick={() => setCurrentView("forgot")} className="text-xs sm:text-sm text-purple-600 hover:text-purple-800 transition-colors">
                    Forgot Password?
                  </button>
                </div>

                {/* Sign in button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
                >
                  Sign In Now
                </button>
              </div>
            )}

            {/* FORGOT PASSWORD FORM */}
            {currentView === "forgot" && (
              <div className="space-y-4 sm:space-y-6">
                <button onClick={() => setCurrentView("login")} className="flex items-center text-purple-600 hover:text-purple-800 transition-colors mb-4 text-sm sm:text-base">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Sign In
                </button>

                <div>
                  <label htmlFor="reset-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="reset-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white text-sm sm:text-base"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <button
                  onClick={handleForgotPassword}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
                >
                  Send Reset Email
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
