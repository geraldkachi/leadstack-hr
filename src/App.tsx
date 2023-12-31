import './App.css'
// import "react-color-palette/lib/css/styles.css";
import { Suspense, useEffect, useRef, useState, } from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Context from './components/context';
import { Layout, Loading } from './components';
import { CreateAccount, Employees, Dashboard, MyTeam, Login, ForgotPassword, Otp, PasswordReset, Hiring, TimeManagement, LeaveManagement, Training, Documents, Performance, ReportsAnalytics, Finance, SelfService, AddEmployees, Overview, JobPortal, Profile, Application, CreateNewJob, Settings, HiringDetail, Help, HiringDetailEdit } from './pages';
import { ProtectedRoutes, UnProtectedRoutes } from './routers';
import { useAuth } from './hooks';
// const colors = ['green', 'yellow', 'red`']
// const modes = ['light', 'dark']
const App: React.FC = () => {
  const colors = useAuth(state => state.color)
  const modes = useAuth(state => state.mode)
  const activeFont = useAuth(state => state.activeFont)
  // const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

  // console.log(mode, 'mode')
  // console.log(color, 'color')

  const useStickyState = (state: string | undefined, key: string): [string | undefined, (v: string) => void] => {
    const [value, setValue] = useState<string | undefined>(state)

    useEffect(() => {
      const stickValue = localStorage.getItem(key)
      if (stickValue !== null) {
        setValue(stickValue)
      }
    }, [key, setValue])

    return [value, (y: string) => {
      localStorage.setItem(key, y)
      setValue(y)
    }]
  }
  const [color, setColor] = useStickyState(colors[0], 'theme-color')
  const [mode, setMode] = useStickyState(modes[0], 'theme-mode')
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
      // document.body.style.background === 'white';
    }, 1000);
  }, []);

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

  if (isLoading) {
    return <Loading />;
  }

  return (
    // <div className={`${activeFont}`[
    <div className={[
      `bg-white  dark:bg-[#161819] ${activeFont} `,
      color && `theme-${color}`,
      mode && `theme-${mode}`,
    ].filter(Boolean).join(' ')}>
          {/* <button className='flex items-center justify-end float-right' onClick={handleThemeSwitch}>handleThemeSwitch</button> */}
      <QueryClientProvider client={ref.current}>
        <Context>
          <Suspense fallback={<>{isLoading && <Loading />}</>}>
            <Routes>
              <Route element={<UnProtectedRoutes />}>
                <Route path="/" element={<CreateAccount />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/otp" element={<Otp />} />
                <Route path="/reset" element={<PasswordReset />} />
              </Route>

              {/* Protected Roues */}
              <Route element={<ProtectedRoutes />}>
                <Route element={<Layout />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/employees" element={<Employees />} />
                  <Route path="/employees/add-employees" element={<AddEmployees />} />
                  <Route path="/my-team" element={<MyTeam />} />
                  <Route path="/hiring" element={<Hiring />} />
                  <Route path="/hiring/:id" element={<HiringDetail />} />
                  <Route path="/hiring/:id/edit" element={<HiringDetailEdit />} />
                  <Route path="/hiring/overview" element={<Overview />} />
                  <Route path="/hiring/job-portal" element={<JobPortal />} />
                  <Route path="/hiring/application" element={<Application />} />
                  {/* <Route path="/hiring/application/:id" element={<ApplicationDetail />} />s */}
                  <Route path="/hiring/job-portal" element={<Hiring />} />
                  <Route path="/hiring/create-new-job" element={<CreateNewJob />} />
                  <Route path="/time-management" element={<TimeManagement />} />
                  <Route path="/leave-management" element={<LeaveManagement />} />
                  <Route path="/training" element={<Training />} />
                  <Route path="/documents" element={<Documents />} />
                  <Route path="/performance" element={<Performance />} />
                  <Route path="/reports-analytics" element={<ReportsAnalytics />} />
                  <Route path="/finance" element={<Finance />} />
                  <Route path="/self-service" element={<SelfService />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/help" element={<Help />} />

                </Route>
              </Route>
              {/* 404 page */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </Context>
      </QueryClientProvider>
    </div>
  )
}

export default App
