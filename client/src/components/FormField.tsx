import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  error?: string;
  touched?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextarea?: boolean;
  rows?: number;
  required?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  error,
  touched,
  onChange,
  onBlur,
  isTextarea = false,
  rows = 5,
  required = false,
}) => {
  const hasError = touched && error;
  const isValid = touched && !error && value.trim() !== '';

  const baseClasses =
    'w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all';
  const normalClasses = 'border-gray-300 focus:ring-blue-600';
  const errorClasses = 'border-red-500 focus:ring-red-600 bg-red-50';
  const validClasses = 'border-green-500 focus:ring-green-600 bg-green-50';

  const inputClasses = `${baseClasses} ${
    hasError ? errorClasses : isValid ? validClasses : normalClasses
  }`;

  return (
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <div className="relative">
        {isTextarea ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            rows={rows}
            className={`${inputClasses} resize-none`}
            required={required}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className={inputClasses}
            required={required}
          />
        )}

        {/* Ícono de validación */}
        {touched && (
          <div className="absolute right-3 top-3">
            {hasError ? (
              <AlertCircle className="text-red-500" size={20} />
            ) : isValid ? (
              <CheckCircle className="text-green-500" size={20} />
            ) : null}
          </div>
        )}
      </div>

      {/* Mensaje de error */}
      {hasError && (
        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
          <AlertCircle size={14} />
          {error}
        </p>
      )}

      {/* Mensaje de éxito */}
      {isValid && (
        <p className="mt-2 text-sm text-green-600 flex items-center gap-1">
          <CheckCircle size={14} />
          Campo válido
        </p>
      )}
    </div>
  );
};
