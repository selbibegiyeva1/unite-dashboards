import { useState } from 'react'
import { useLogin } from '../../hooks/auth/useLogin'

function Login() {
    const { formData, errors, hasSubmitted, handleChange, handleSubmit } = useLogin()
    const [focused, setFocused] = useState({ login: false, password: false })

    const getBorderClass = (field: 'login' | 'password') => {
        if (focused[field]) {
            return 'border-[#0035CC]'
        }
        if (errors[field] && hasSubmitted) {
            return 'border-[#ED2428]'
        }
        return 'border-[#00000026]'
    }

    return (
        <div className="py-[32px] px-[24px]">
            <form className="max-w-[393px] m-auto" onSubmit={handleSubmit}>
                <div className="flex items-center justify-center gap-[10px]">
                    <img src="/favicon.png" alt="logo" className="w-[36px]" />
                    <h1 className="text-[24px] font-bold">Unite Shop</h1>
                </div>
                <div className="mt-[23.5px] mb-[35.5px]">
                    <div className="flex items-center gap-[10px] m-auto w-fit cursor-pointer">
                        <p className="text-[14px] font-medium">РУ</p>
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.87883 5.29289L0.293044 1.70711C-0.336921 1.07714 0.109246 0 1.00015 0H8.17172C9.06263 0 9.50879 1.07714 8.87883 1.70711L5.29304 5.29289C4.90252 5.68342 4.26935 5.68342 3.87883 5.29289Z" fill="black" />
                        </svg>
                    </div>
                </div>
                <div className="mt-[26px]">
                    <center>
                        <h1 className="text-[24px] font-bold">Личный кабинет</h1>
                        <p className="text-[#00000099] font-medium max-w-[309px] leading-5 mt-[12px]">Войдите в личный кабинет чтобы начать работу.</p>
                    </center>
                </div>
                <div className="flex flex-col gap-[16px] mt-[32px]">
                    <div>
                        <p className="mb-[8px] font-medium text-[15px]">Логин</p>
                        <input
                            type="text"
                            placeholder="Введите логин"
                            value={formData.login}
                            onChange={(e) => handleChange('login', e.target.value)}
                            onFocus={() => setFocused(prev => ({ ...prev, login: true }))}
                            onBlur={() => setFocused(prev => ({ ...prev, login: false }))}
                            className={`w-full border rounded-[8px] p-[12px] outline-none ${getBorderClass('login')}`}
                        />
                        {errors.login && hasSubmitted && (
                            <p className="mt-[8px] text-[#ED2428] text-[15px]">Заполните поле</p>
                        )}
                    </div>
                    <div>
                        <p className="mb-[8px] font-medium text-[15px]">Пароль</p>
                        <input
                            type="password"
                            placeholder="Введите пароль"
                            value={formData.password}
                            onChange={(e) => handleChange('password', e.target.value)}
                            onFocus={() => setFocused(prev => ({ ...prev, password: true }))}
                            onBlur={() => setFocused(prev => ({ ...prev, password: false }))}
                            className={`w-full border rounded-[8px] p-[12px] outline-none ${getBorderClass('password')}`}
                        />
                        {errors.password && hasSubmitted && (
                            <p className="mt-[8px] text-[#ED2428] text-[15px]">Заполните поле</p>
                        )}
                    </div>
                    <button className="w-full bg-[#2D85EA] hover:bg-[#2D85EA]/80 transition-all duration-300 cursor-pointer text-white text-[15px] font-medium rounded-[8px] p-[12px] mt-[8px]">Войти</button>
                </div>
                <center>
                    <p className="text-[#00000099] font-medium mt-[16px] mb-[32px] leading-5">Самостоятельная регистрация недоступна. Доступ выдаёт поддержка</p>
                </center>
                <center>
                    <p className="text-[#2D85EA] font-medium">Поддержка:+993 62 42-31-18</p>
                </center>
            </form>
        </div>
    )
}

export default Login