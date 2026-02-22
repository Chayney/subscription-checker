import { useState } from "react"
import type { RegisterRequest } from "../types/auth";
import { useNavigate } from "react-router-dom";
import { NAVIGATION_LIST } from "../const/navigation";

export const useRegister = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const addInputUserName = (event: React.ChangeEvent<HTMLInputElement>) => setUserName(event.target.value);
    const addInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);
    const addInputPasswordConfirm = (event: React.ChangeEvent<HTMLInputElement>) => setPasswordConfirm(event.target.value);

    const handleRegister = async (event: React.SyntheticEvent<HTMLFormElement>) => { 
        event.preventDefault();

        if (password !== passwordConfirm) {
            alert('パスワードが一致しません');
            return;
        }

        const newUser: RegisterRequest = {
            name: userName,
            password: password,
            is_guest: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }

        try {
            const response = await fetch('http://localhost:3001/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser)
            });
            if (!response.ok) throw new Error('登録失敗');
            await response.json();
            navigate(NAVIGATION_LIST.SUMMARY);
        } catch (error) {
            console.error(error);
        } 
    }

    return {
        userName,
        password,
        passwordConfirm,
        addInputUserName,
        addInputPassword,
        addInputPasswordConfirm,
        handleRegister
    }
}