import { Activity, Shield, User, Lock, Eye, LogIn, ShieldCheck, LockKeyhole } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate('/');
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-white border-b border-slate-200">
        <div className="flex items-center gap-2">
          <Activity className="text-primary w-7 h-7" />
          <h1 className="text-xl font-bold text-primary font-headline-md tracking-tight">MediClinic Pro</h1>
        </div>
        <div className="hidden md:flex gap-6">
          <span className="text-primary font-bold font-label-md cursor-pointer">Login</span>
          <span className="text-slate-600 font-label-md cursor-pointer hover:text-primary transition-colors">Support</span>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center pt-16 pb-8 clinical-gradient relative overflow-hidden flex-1 w-full h-full">
        {/* Subtle Medical Illustration Background Layer */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <img 
            className="w-full h-full object-cover" 
            alt="Medical background"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB37FhU9A2HWjPZapWgjnGbX-7LIZAOn3dksCxhcYeUH4nPZlOKylaD9DlE6ikdjwDXN0LrxAtdxGHJWEemcXPUy86UxRYqJEy1tP7dzDqfoKKJwPKHokfH80W0wW3zhlaprnKLU2Z2gAAyiHd6bhjaXExxe8DVkUlzaSju_QajlNBThrYnYZerIkK90o4EuQ7grSUJkap1KmjMmLQmPODfDksNLGHAw0NLWOtfDbloUkjld7imf9iFTRT6OebNEo2L5l0TOvpTZTxr"
          />
        </div>

        {/* Login Card */}
        <div className="relative z-10 w-full max-w-md px-6 my-auto">
          <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant shadow-sm backdrop-blur-sm bg-opacity-95">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-container/10 mb-4">
                <Shield className="text-primary w-8 h-8" />
              </div>
              <h2 className="font-headline-md text-on-surface mb-2">Hospital Portal Access</h2>
              <p className="font-body-sm text-on-surface-variant">Secure authentication for authorized staff only.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="block font-label-md text-on-surface text-left" htmlFor="employee-id">Employee ID or Email</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
                  <input 
                    className="w-full pl-11 pr-4 py-3 bg-surface-bright border border-outline-variant rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md" 
                    id="employee-id" 
                    name="employee-id" 
                    placeholder="e.g. MC-12345 or john.d@clinic.com" 
                    type="text"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-label-md text-on-surface text-left" htmlFor="password">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
                  <input 
                    className="w-full pl-11 pr-12 py-3 bg-surface-bright border border-outline-variant rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md" 
                    id="password" 
                    name="password" 
                    placeholder="••••••••••••" 
                    type="password"
                    required
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors" type="button">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between py-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                  <span className="font-body-sm text-on-surface-variant">Remember device</span>
                </label>
              </div>

              <button className="w-full bg-primary-container text-white font-label-md py-4 rounded-lg hover:opacity-90 active:opacity-80 transition-all flex items-center justify-center gap-2 shadow-sm" type="submit">
                <LogIn className="w-5 h-5" />
                Sign In
              </button>
            </form>

            <div className="mt-8 text-center">
              <a className="text-primary font-label-md hover:underline decoration-2 underline-offset-4" href="#">Forgot Password?</a>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-100 text-center">
              <div className="flex justify-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="text-secondary w-4 h-4" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-1">
                  <LockKeyhole className="text-secondary w-4 h-4" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">256-Bit SSL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full py-6 flex flex-col md:flex-row justify-between items-center px-8 gap-4 bg-slate-50 border-t border-slate-200 mt-auto">
        <p className="font-manrope text-sm text-slate-500">© 2024 MediClinic Systems. All rights reserved. Secure Medical Environment.</p>
        <div className="flex gap-6">
          <a className="font-manrope text-sm text-slate-500 hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="font-manrope text-sm text-slate-500 hover:text-primary transition-colors" href="#">Terms of Service</a>
          <a className="font-manrope text-sm text-slate-500 hover:text-primary transition-colors" href="#">Support</a>
        </div>
      </footer>
    </>
  );
}
