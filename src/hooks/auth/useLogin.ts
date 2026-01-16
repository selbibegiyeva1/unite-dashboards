import { useState } from 'react'

export function useLogin() {
    const [formData, setFormData] = useState({
        login: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        login: false,
        password: false
    })
    const [hasSubmitted, setHasSubmitted] = useState(false)

    const handleChange = (field: 'login' | 'password', value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setHasSubmitted(true)
        const newErrors = {
            login: !formData.login.trim(),
            password: !formData.password.trim()
        }
        setErrors(newErrors)
        
        // If form is valid, you can add login logic here
        if (!newErrors.login && !newErrors.password) {
            // TODO: Add actual login logic
            console.log('Form is valid, ready to submit')
        }
    }

    return {
        formData,
        errors,
        hasSubmitted,
        handleChange,
        handleSubmit
    }
}
