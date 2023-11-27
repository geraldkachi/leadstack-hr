import { create } from "zustand";

// const token = JSON.parse(localStorage.getItem('Authenticated') as string);
const token = localStorage.getItem('token')

type State = {
    token?: string | null
    email?: string | null
    phoneNumber?: string
    setPhoneNumber?: (phoneNumber: string) => void
    isAuthenticated?: boolean
    activeTab?: number
    activeFont: string
}
// const useAuth = create<State>((set, get) => ({
const useAuth = create<State>(() => ({
    token,   
    activeTab: 0,
    activeFont: 'font-noto'
}));
                        
export default useAuth;
