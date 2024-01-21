import { z } from 'zod';

export const registerSchema = z.object({
    username: z.string({
        required_error: 'El usuario es requerido'
    }),
    email: z
        .string({
            required_error: 'El mail es requerido'
        })
        .email({
            message: 'Email inválido'
        }),
    password: z
        .string({
            required_error: 'La constraseña es reqierida'
        })
        .min(6, {
            message: 'La constraseña debe tener al menos 6 caracteres.'
    }),
});

export const loginSchema = z.object({
    email: z
        .string({
            required_error: 'El mail es requerido'
        })
        .email({
            message: 'Email inválido'
        }),
    password: z
        .string({
            required_error: 'La constraseña es reqierida'
        })
        .min(6, {
            message: 'La constraseña debe tener al menos 6 caracteres.'
    }),
});