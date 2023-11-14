import { Suspense, useRef, } from 'react'
import { QueryClient, QueryClientProvider } from "react-query";
import { Navigate, Route, Routes } from "react-router-dom";

import './App.css'
import { Layout } from './components';
import Context from './components/context';
import { CreateAccount, Employees, Dashboard, Home, MyTeam, Login, ForgotPassword, Otp, PasswordReset, Hiring, TimeManagement, LeaveManagement, Training, Documents, Performance, ReportsAnalytics, Finance, SelfService } from './pages';
import { ProtectedRoutes, UnProtectedRoutes } from './routers';

const App: React.FC = () => {
  // const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

  const ref = useRef<QueryClient>();
  const queryClient = new QueryClient();
  //   {
  //   defaultOptions: {
  //     queries: {
  //       refetchOnWindowFocus: false,
  //       refetchOnMount: false,
  //       refetchOnReconnect: false,
  //       retry: false,
  //       staleTime: twentyFourHoursInMs,
  //     },
  //   },
  // }
  ref.current = queryClient;

  return (
    <>
      <QueryClientProvider client={ref.current}>
        {/* <ToastContainer /> */}
        <Context>
          <Suspense fallback={"Loading"}>
            <Routes>
              <Route element={<UnProtectedRoutes />}>
                <Route path="/" element={<CreateAccount />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/otp" element={<Otp />} />
                  <Route path="/reset" element={<PasswordReset />} />
              </Route>

              {/* Protected Roues */}
              <Route element={<ProtectedRoutes />}>
                <Route element={<Layout />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/employees" element={<Employees />} />
                  <Route path="/my-team" element={<MyTeam />} />
                  <Route path="/hiring" element={<Hiring />} />
                  <Route path="/time-management" element={<TimeManagement />} />
                  <Route path="/leave-management" element={<LeaveManagement />} />
                  <Route path="/training" element={<Training />} />
                  <Route path="/documents" element={<Documents />} />
                  <Route path="/performance" element={<Performance />} />
                  <Route path="/reports-analytics" element={<ReportsAnalytics />} />
                  <Route path="/finance" element={<Finance />} />
                  <Route path="/self-service" element={<SelfService />} />

                  <Route path="/personal-banking" element={<Home />} />
                </Route>
              </Route>
              {/* 404 page */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </Context>
      </QueryClientProvider>
    </>
  )
}

export default App
