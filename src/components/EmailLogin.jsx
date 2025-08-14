import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Zap, User, ArrowLeft, Send, CheckCircle } from "lucide-react";

const EmailLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  // Sign up specific states
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Forgot password specific states
  const [resetEmail, setResetEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);

    // Handle forgot password
    if (isForgotPassword) {
      setTimeout(() => {
        setIsLoading(false);
        setIsEmailSent(true);
      }, 2000);
      return;
    }

    // Handle login/signup
    setTimeout(() => {
      setIsLoading(false);
      if (isSignUp) {
        alert("Pendaftaran berhasil! Silakan login.");
        setIsSignUp(false);
        // Reset form
        setFullName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        alert("Login berhasil!");
      }
    }, 2000);
  };

  const handleBackToLogin = () => {
    setIsForgotPassword(false);
    setIsEmailSent(false);
    setResetEmail("");
  };

  // Google OAuth Login
  const handleGoogleLogin = () => {
    setIsLoading(true);

    // Simulate Google OAuth process
    console.log("Initiating Google OAuth...");

    // In real implementation, you would:
    // 1. Redirect to Google OAuth consent screen
    // 2. Handle callback with authorization code
    // 3. Exchange code for access token
    // 4. Get user info from Google API

    setTimeout(() => {
      setIsLoading(false);
      // Simulate successful login with mock data
      const mockGoogleUser = {
        name: "John Doe",
        email: "john.doe@gmail.com",
        picture: "https://via.placeholder.com/150",
        provider: "google",
      };

      alert(`Login berhasil dengan Google!\nNama: ${mockGoogleUser.name}\nEmail: ${mockGoogleUser.email}`);

      // Here you would typically:
      // - Store user data in state/localStorage
      // - Redirect to dashboard
      // - Set authentication tokens
    }, 2000);
  };

  // Microsoft OAuth Login
  const handleMicrosoftLogin = () => {
    setIsLoading(true);

    // Simulate Microsoft OAuth process
    console.log("Initiating Microsoft OAuth...");

    // In real implementation, you would:
    // 1. Redirect to Microsoft OAuth consent screen
    // 2. Handle callback with authorization code
    // 3. Exchange code for access token
    // 4. Get user info from Microsoft Graph API

    setTimeout(() => {
      setIsLoading(false);
      // Simulate successful login with mock data
      const mockMicrosoftUser = {
        name: "Jane Smith",
        email: "jane.smith@outlook.com",
        picture: "https://via.placeholder.com/150",
        provider: "microsoft",
      };

      alert(`Login berhasil dengan Microsoft!\nNama: ${mockMicrosoftUser.name}\nEmail: ${mockMicrosoftUser.email}`);

      // Here you would typically:
      // - Store user data in state/localStorage
      // - Redirect to dashboard
      // - Set authentication tokens
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Main login card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8 transform hover:scale-105 transition-all duration-300">
          {/* Header */}
          <div className="text-center mb-8">
            {isSignUp && (
              <button onClick={() => setIsSignUp(false)} className="absolute top-6 left-6 p-2 text-gray-600 hover:text-gray-800 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div className="inline-flex items-center justify-center w-20 h-20 mb-4">
              <img
                src="/logo-kirim-email.png"
                alt="Kirim Email Logo"
                className="w-20 h-20 object-contain"
                onError={(e) => {
                  // Fallback jika gambar tidak load
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="hidden items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg">
                {isSignUp ? <User className="w-10 h-10 text-white" /> : <Mail className="w-10 h-10 text-white" />}
              </div>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{isSignUp ? "Buat Akun Baru" : "Kirim.Email"}</h1>
            <p className="text-gray-600 mt-2">{isSignUp ? "Bergabunglah dan kelola email Anda" : "Masuk ke akun email Anda"}</p>
          </div>

          {/* Login/Signup/Forgot Password form */}
          <div className="space-y-6">
            {/* Forgot Password Success Message */}
            {isForgotPassword && isEmailSent ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">Kami telah mengirim link reset password ke:</p>
                  <p className="font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-lg">{resetEmail}</p>
                  <p className="text-sm text-gray-500">Cek folder inbox dan spam Anda. Link akan expire dalam 24 jam.</p>
                  <button
                    onClick={handleBackToLogin}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Kembali ke Login</span>
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Forgot Password Email Input */}
                {isForgotPassword ? (
                  <div className="relative group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                      <input
                        type="email"
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                        placeholder="Masukkan email Anda"
                        required
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Kami akan mengirim link reset password ke email ini</p>
                  </div>
                ) : (
                  <>
                    {/* Full Name input (only for signup) */}
                    {isSignUp && (
                      <div className="relative group">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                          <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                            placeholder="Nama lengkap Anda"
                            required
                          />
                        </div>
                      </div>
                    )}

                    {/* Email input */}
                    <div className="relative group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                          placeholder="nama@email.com"
                          required
                        />
                      </div>
                    </div>

                    {/* Password input */}
                    <div className="relative group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                          placeholder="Masukkan password"
                          required
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password input (only for signup) */}
                    {isSignUp && (
                      <div className="relative group">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Konfirmasi Password</label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                            placeholder="Konfirmasi password"
                            required
                          />
                          <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Remember me & Forgot password (only for login) */}
                {!isSignUp && !isForgotPassword && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                      <span className="text-sm text-gray-600">Ingat saya</span>
                    </label>
                    <button onClick={() => setIsForgotPassword(true)} className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                      Lupa password?
                    </button>
                  </div>
                )}

                {/* Terms and conditions (only for signup) */}
                {isSignUp && (
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5" required />
                    <span className="text-sm text-gray-600">
                      Saya setuju dengan{" "}
                      <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                        Syarat & Ketentuan
                      </a>{" "}
                      dan{" "}
                      <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                        Kebijakan Privasi
                      </a>
                    </span>
                  </div>
                )}

                {/* Action button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>{isForgotPassword ? "Mengirim..." : isSignUp ? "Mendaftarkan..." : "Memproses..."}</span>
                    </>
                  ) : (
                    <>
                      {isForgotPassword ? <Send className="w-5 h-5" /> : <Zap className="w-5 h-5" />}
                      <span>{isForgotPassword ? "Kirim Reset Link" : isSignUp ? "Daftar Sekarang" : "Masuk ke Email"}</span>
                    </>
                  )}
                </button>
              </>
            )}
          </div>

          {/* Divider - only show for login */}
          {!isSignUp && !isForgotPassword && !isEmailSent && (
            <>
              <div className="flex items-center my-6">
                <div className="flex-1 border-t border-gray-200"></div>
                <span className="px-4 text-sm text-gray-500">atau</span>
                <div className="flex-1 border-t border-gray-200"></div>
              </div>

              {/* Social login buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center space-x-3 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed relative group"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-gray-400 border-t-transparent"></div>
                  ) : (
                    <img
                      src="data:image/svg+xml,%3csvg width='18' height='18' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cpath d='M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z' fill='%234285F4'/%3e%3cpath d='M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z' fill='%2334A853'/%3e%3cpath d='M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z' fill='%23FBBC05'/%3e%3cpath d='M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z' fill='%23EA4335'/%3e%3c/g%3e%3c/svg%3e"
                      alt="Google"
                      className="w-5 h-5"
                    />
                  )}
                  <span className="text-gray-700">{isLoading ? "Menghubungkan..." : "Masuk dengan Google"}</span>
                  <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity pointer-events-none"></div>
                </button>

                <button
                  onClick={handleMicrosoftLogin}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center space-x-3 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed relative group"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-gray-400 border-t-transparent"></div>
                  ) : (
                    <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">M</span>
                    </div>
                  )}
                  <span className="text-gray-700">{isLoading ? "Menghubungkan..." : "Masuk dengan Microsoft"}</span>
                  <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity pointer-events-none"></div>
                </button>
              </div>
            </>
          )}

          {/* Sign up/Login toggle link */}
          {!isForgotPassword && !isEmailSent && (
            <p className="text-center mt-6 text-gray-600">
              {isSignUp ? (
                <>
                  Sudah punya akun?{" "}
                  <button onClick={() => setIsSignUp(false)} className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                    Masuk di sini
                  </button>
                </>
              ) : (
                <>
                  Belum punya akun?{" "}
                  <button onClick={() => setIsSignUp(true)} className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                    Daftar sekarang
                  </button>
                </>
              )}
            </p>
          )}
        </div>

        {/* Footer */}
        <p className="text-center mt-6 text-gray-500 text-sm">© 2024 Email Web App. Semua hak dilindungi.</p>
      </div>
    </div>
  );
};

export default EmailLogin;
