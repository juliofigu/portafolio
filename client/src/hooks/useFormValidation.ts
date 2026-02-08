import { useState, useCallback } from 'react';

interface FormErrors {
  [key: string]: string;
}

interface FormData {
  [key: string]: string;
}

export const useFormValidation = (initialValues: FormData) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = useCallback((name: string, value: string) => {
    const newErrors = { ...errors };

    switch (name) {
      case 'nombre':
        if (!value.trim()) {
          newErrors[name] = 'El nombre es requerido';
        } else if (value.trim().length < 3) {
          newErrors[name] = 'El nombre debe tener al menos 3 caracteres';
        } else {
          delete newErrors[name];
        }
        break;

      case 'email':
        if (!value.trim()) {
          newErrors[name] = 'El email es requerido';
        } else if (!validateEmail(value)) {
          newErrors[name] = 'El email no es válido';
        } else {
          delete newErrors[name];
        }
        break;

      case 'asunto':
        if (!value.trim()) {
          newErrors[name] = 'El asunto es requerido';
        } else if (value.trim().length < 5) {
          newErrors[name] = 'El asunto debe tener al menos 5 caracteres';
        } else {
          delete newErrors[name];
        }
        break;

      case 'mensaje':
        if (!value.trim()) {
          newErrors[name] = 'El mensaje es requerido';
        } else if (value.trim().length < 10) {
          newErrors[name] = 'El mensaje debe tener al menos 10 caracteres';
        } else {
          delete newErrors[name];
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [errors]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value }));
      if (touched[name]) {
        validateField(name, value);
      }
    },
    [touched, validateField]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));
      validateField(name, value);
    },
    [validateField]
  );

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    Object.keys(values).forEach((key) => {
      if (!validateField(key, values[key])) {
        newErrors[key] = errors[key] || 'Campo inválido';
      }
    });

    setTouched(
      Object.keys(values).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {} as { [key: string]: boolean })
    );

    return Object.keys(newErrors).length === 0;
  }, [values, validateField, errors]);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  const isFormValid = Object.keys(errors).length === 0 && Object.values(values).every((v) => v.trim() !== '');

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    resetForm,
    isFormValid,
    setValues,
  };
};
