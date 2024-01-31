'use client'

import clsx from 'clsx'
import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from 'react-hook-form';

interface inputProps{
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
    disabled?: boolean;
    
}

const Input = () => {
  return (
    <div>
      
    </div>
  )
}

export default Input
