import { create } from "zustand";

// const token = JSON.parse(localStorage.getItem('Authenticated') as string);
const token = localStorage.getItem('token')
const colors = ['green', 'yellow', 'red`']
const modes = ['light', 'dark']
type State = {
    token?: string | null
    email?: string | null
    phoneNumber?: string
    setPhoneNumber?: (phoneNumber: string) => void
    isAuthenticated?: boolean
    activeTab: number
    activeFont: string
    open: boolean
    openDraw: boolean
    color: string 
    mode:  string
}
// const useAuth = create<State>((set, get) => ({
const useAuth = create<State>(() => ({
    token, 
    open: true,  
    openDraw: false,
    activeTab: 0,
    activeFont: 'font-noto',
    mode: modes[0],
    color: colors[0]
}));
                        
export default useAuth;
