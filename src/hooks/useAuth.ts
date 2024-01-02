import { create } from "zustand";

// const token = JSON.parse(localStorage.getItem('Authenticated') as string);
const token = localStorage.getItem('token')
const colors = ['green', 'yellow', 'red']
const modes = ['light', 'dark']
type State = {
    createAccount: {
        organizationName: string,
        officialEmail: string,
        officialPhoneNumber: string | number,
        companyWebsite: string,
        address: string,
        state: string,
        country: string,
        industry: string,
        employeeSize: string
        firstName: string
        lastName: string
        role: string
        email: string
        phoneNumber: string
        password: string
        confirmPassword: string
    },

    token?: string | null
    email?: string | null
    phoneNumber?: string
    setPhoneNumber?: (phoneNumber: string) => void
    isAuthenticated?: boolean
    activeTab: number
    activeFont: string
    open: boolean
    openDraw: boolean
    color: string[]
    mode: string[]
}
// const useAuth = create<State>((set, get) => ({
const useAuth = create<State>(() => ({
    token,
    open: true,
    openDraw: false,
    activeTab: 0,
    activeFont: 'font-noto',
    mode: modes,
    color: colors,
    createAccount: {
        organizationName: '',
        officialEmail: '',
        officialPhoneNumber: '',
        companyWebsite: '',
        address: '',
        state: '',
        country: '',
        industry: '',
        employeeSize: '',
        firstName: '',
        lastName: '',
        role: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
    },

}));

export default useAuth;
